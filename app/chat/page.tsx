"use client";

import {
  useState,
  useEffect,
  useRef,
} from "react"
import ReactMarkdown from "react-markdown";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([]);

  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  async function sendMessage() {
    if (!message.trim()) return;

    const currentMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentMessage,
      },
    ]);

    setMessage("");

    try {
      setLoading(true);

      const response = await fetch(
        "https://legaltech-bot.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: currentMessage,
            sessionId: "web-user",
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);

      setLoading(false);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "An error occurred while contacting LegalMate.",
        },
      ]);

      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen p-8 text-white"
      style={{
        backgroundColor: "#121214",
      }}
    >
      <h1
        className="font-bold mb-8"
        style={{
          color: "#B59410",
          fontSize: "25px",
        }}
      >
        ⚖️ LegalMate
      </h1>

      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-xl p-6 mb-6 min-h-[400px] overflow-y-auto"
          style={{
            backgroundColor: "#1A1A1D",
            
          }}
        >
          {messages.length === 0 && (
            <p className="text-gray-400">
              Ask LegalMate anything...
            </p>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-6 ${
                msg.role === "user"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <div
                className="inline-block p-4 rounded-xl max-w-[80%]"
                style={{
                  backgroundColor:
                    msg.role === "user"
                      ? "#B59410"
                      : "#2A2A2D",

                  color:
                    msg.role === "user"
                      ? "#121214"
                      : "white",
                }}
              >
                <ReactMarkdown>
                  {msg.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}

          {loading && (
            <p className="text-gray-400">
              LegalMate is thinking...
            </p>
          )}
          <div ref={bottomRef}></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Type your question..."
            className="flex-1 p-4 rounded-xl text-white"
            style={{
              backgroundColor: "#1A1A1D",
              border: "0.3px solid #B59410",
            }}
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="px-6 rounded-xl font-semibold"
            style={{
              backgroundColor: "#B59410",
              color: "#121214",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </main>
  );
}