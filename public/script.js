const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

  document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    // Helper to add a message to the chat box
    function addMessage(role, text, messageId = null) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `chat-message ${role}`;
      if (messageId) msgDiv.id = messageId;
      msgDiv.textContent = text;
      chatBox.appendChild(msgDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
      return msgDiv;
    }

    // Helper to update a message by ID
    function updateMessage(messageId, newText) {
      const msgDiv = document.getElementById(messageId);
      if (msgDiv) msgDiv.textContent = newText;
    }

    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const message = userInput.value.trim();
      if (!message) return;

      // Add user message
      addMessage('user', message);

      // Add temporary bot message
      const thinkingId = `bot-thinking-${Date.now()}`;
      addMessage('bot', 'Thinking...', thinkingId);

      // Prepare payload
      const payload = {
        messages: [{ role: 'user', content: message }]
      };

      try {
        const response = await fetch('http://localhost:3000/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          updateMessage(thinkingId, 'Failed to get response from server.');
          return;
        }

        const data = await response.json();
        if (data && typeof data.result === 'string' && data.result.trim()) {
          updateMessage(thinkingId, data.result.trim());
        } else {
          updateMessage(thinkingId, 'Sorry, no response received.');
        }
      } catch (err) {
        updateMessage(thinkingId, 'Failed to get response from server.');
      } finally {
        userInput.value = '';
        userInput.focus();
      }
    });
  });

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
