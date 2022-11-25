async function sendContact(ev) {
    ev.preventDefault();

    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const webhookBody = {
        embeds: [{
        title: 'Contact Form Submitted',
        fields: [
            { name: 'Name', value: name },
            { name: 'Company', value: company },
            { name: 'Email', value: email },
            { name: 'Message', value: message }
        ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1045489212306235502/badX22xf3kKS6dX2-MxZvLKzptptIMD-2OhCzR9c7bYsblJTzXKLROekYlr7XINvyR6q';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('I have received your message!');
    } else {
        alert('There was an error! Try again later!');
    }
}