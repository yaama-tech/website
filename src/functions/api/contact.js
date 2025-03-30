// This function is used to send a message to the contact form
// It is triggered when a user submits the contact form
// This is a Cloudflare Worker function
// The database is a Cloudflare D1 database and can be accessed by env.DB
// The database has a table called `contacts`
// The table has the following columns:
// - id: the id of the message
// - name: the name of the sender
// - email: the email of the sender
// - message: the message of the sender
// - date: the date and time the message was created
export async function onRequestGet(context) {
    return new Response("This api is for sending messages to the contact form!")
}

export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const { name, email, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message || name.trim() === "" || email.trim() === "" || message.trim() === "") {
            return new Response(
                JSON.stringify({
                    error: "All fields (name, email, message) are required"
                }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            }
            );
        }

        // Insert data into database
        const timestamp = new Date().toISOString();
        const statement = await env.DB.prepare(
            "INSERT INTO contacts (name, email, message, date) VALUES (?, ?, ?, ?)"
        ).bind(name.trim(), email.trim(), message.trim(), timestamp);

        await statement.run();

        return new Response(
            JSON.stringify({
                message: "Message sent successfully!",
                timestamp: timestamp
            }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: "Internal server error",
                details: error.message
            }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        }
        );
    }
}