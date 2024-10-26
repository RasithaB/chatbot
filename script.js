// Grab elements
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendMessageButton = document.getElementById("send-message-button");

// Function to append messages to chat
const appendMessage = (message, sender = "user") => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  
  const messageContent = document.createElement("div");
  messageContent.classList.add("message-content");
  
  const textElement = document.createElement("span");
  textElement.classList.add("text");
  textElement.innerText = message;

  messageContent.appendChild(textElement);
  messageElement.appendChild(messageContent);
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
};

// Send message function
const sendMessage = async () => {
  const userMessage = chatInput.value.trim();
  
  if (!userMessage) return; // Prevent sending empty messages
  
  appendMessage(userMessage);
  chatInput.value = ""; // Clear input field

  // Simulate bot response
  appendMessage("Loading...", "loading");
  
  // You can replace this with actual API call to Gemini
  setTimeout(() => {
    // Simulated response
    const botResponse = `You asked: "${userMessage}". How can I assist you further?`;
    
    // Replace loading message with the bot response
    const loadingMessage = chatMessages.querySelector(".message.loading");
    if (loadingMessage) {
      loadingMessage.classList.remove("loading");
      loadingMessage.querySelector(".text").innerText = botResponse;
    } else {
      appendMessage(botResponse, "bot");
    }
  }, 1500); // Simulated delay for bot response
};

// Event listener for send button
sendMessageButton.addEventListener("click", sendMessage);

// Optional: Event listener for Enter key
chatInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
