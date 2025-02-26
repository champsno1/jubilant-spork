document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");

    function appendMessage(sender, message) {
        const msgElement = document.createElement("p");
        msgElement.classList.add(sender + "-message");
        msgElement.innerText = message;
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botResponse(userMessage) {
        const responses = {
            "hello": "Hello! How can I assist you?",
            "hi": "Hi there! Ask me anything about NCC or defense preparation.",
            "what is NCC?": "NCC stands for National Cadet Corps. It trains students in discipline and leadership for defense services.",
            "how to join NDA?": "To join NDA, you must pass the UPSC NDA exam and SSB interview after 12th grade.",
            "what is CDS?": "CDS (Combined Defence Services) exam is conducted by UPSC for graduates aspiring to join the armed forces.",
            "bye": "Goodbye! Feel free to ask anytime.",
            "default": "I'm not sure about that. Try asking something else related to NCC or defense!"
        };

        return responses[userMessage.toLowerCase()] || responses["default"];
    }

    window.sendMessage = function () {
        const message = userInput.value.trim();
        if (message) {
            appendMessage("user", message);
            setTimeout(() => {
                appendMessage("bot", botResponse(message));
            }, 1000);
            userInput.value = "";
        }
    };

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
