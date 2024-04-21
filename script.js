document.addEventListener("DOMContentLoaded", function() {
    const chatArea = document.getElementById("chatArea");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function() {
        const message = messageInput.value.trim();
        if (message !== "") {
            displayMessage(message);
            messageInput.value = "";
        }
    });

    function displayMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = message;
        chatArea.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});
