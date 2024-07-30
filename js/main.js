document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestbook-form');
    const messagesContainer = document.getElementById('messages-container');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch('submit.php', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                form.reset();
                fetchMessages();
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    async function fetchMessages() {
        try {
            const response = await fetch('fetch.php');
            const messages = await response.json();
            messagesContainer.innerHTML = messages.map(msg => `
                <div class="message">
                    <h3>${msg.name}</h3>
                    <p>${msg.message}</p>
                    <small>${msg.created_at}</small>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    fetchMessages();
});
