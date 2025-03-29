// This function is used to send a message to the contact form
// It is triggered when a user submits the contact form
// This is a Cloudflare Worker function
export async function onRequest(context) {
    const { request } = context;
    const { name, email, message } = await request.json();
    return new Response("Thank you for your message! We will get back to you as soon as possible.")
}