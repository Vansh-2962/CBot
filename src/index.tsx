import { createRoot } from "react-dom/client";
import ChatBot from "./components/ChatBot";

window.renderChatbot = function (selector = "chat-gpt") {
  const container = document.querySelector(selector);
  if (!container) {
    console.error("Chatbot container not found!");
    return;
  }

  const root = createRoot(container);
  root.render(<ChatBot />);
};
