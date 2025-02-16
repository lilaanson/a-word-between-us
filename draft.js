function sendMessage() {
            const input = document.getElementById("messageInput");
            const text = input.value.trim();
            if (text === "") return;
            
            displayMessage(text, "sent");
            input.value = "";

            // Simulate a fake response after a short delay
            setTimeout(receiveMessage, Math.random() * 3000 + 1000);
        }

        function receiveMessage() {
            const botMessages = [
                "Hello there : )",
                "I like your profile",
                "Nice to meet you!",
                "How are you?",
                "This chatbox is cool!"
            ];
            const randomMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
            displayMessage(randomMessage, "received");
        }

        function displayMessage(text, type) {
            const chatBox = document.getElementById("chatMessages");
            const messageElement = document.createElement("div");
            if(type==="received"){
                var img = document.createElement("img");
                img.src = "/assets/profile.jpg";
                img.style = "width: 30px;";
                img.style = "padding: 0 0 10px 0;";
                chatBox.appendChild(img);
                console.log("PFP")
            }
            messageElement.classList.add("message", type);
            messageElement.innerHTML = text + `<div class="timestamp">${new Date().toLocaleTimeString()}</div>`;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
        }