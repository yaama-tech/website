// This function is used to send a message to the contact form
// It is triggered when a user submits the contact form
// This is a Cloudflare Worker function
export async function onRequestGet(context) {
    return new Response("This api is for sending messages to the contact form!")
}

export async function onRequestPost(context) {
    const { request } = context;
    const { name, email, message } = await request.json();
    const nameValue = name || "NA";
    const emailValue = email || "NA";
    const messageValue = message || "NA";

    return new Response(
        `Thank you for your message! We will get back to you as soon as possible.\n\nName: ${nameValue}\nEmail: ${emailValue}\nMessage: ${messageValue}`
    );
}