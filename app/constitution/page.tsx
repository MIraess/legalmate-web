"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ConstitutionPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchConstitution() {
    if (!query.trim()) return;

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
            message: `Explain Section ${query} of the Nigerian Constitution`,
            sessionId: "constitution-user",
          }),
        }
      );

      const data = await response.json();

      setResult(data.reply);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.error(error);

      setResult(
        "An error occurred while searching the Constitution."
      );
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

        <h2 className="text-4xl font-bold mb-4">
          Constitution Search
        </h2>

        <p className="text-gray-400 mb-8">
          Enter a section number to instantly retrieve
          and explain constitutional provisions.
        </p>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchConstitution();
              }
            }}
            placeholder="e.g. 36"
            className="flex-1 p-4 rounded-xl text-white"
            style={{
              backgroundColor: "#1A1A1D",
              border: "1px solid #B59410",
            }}
          />

          <button
            onClick={searchConstitution}
            className="px-6 rounded-xl font-semibold"
            style={{
              backgroundColor: "#B59410",
              color: "#121214",
            }}
          >
            Search
          </button>

        </div>

        <div
          className="rounded-xl p-6 min-h-[400px]"
          style={{
            backgroundColor: "#1A1A1D",
            border: "1px solid #B59410",
          }}
        >
          {loading ? (
            "Searching Constitution..."
          ) : (
            <ReactMarkdown>
            {result || "Constitutional provisions will appear here."}
            </ReactMarkdown>
          )}
        </div>

      </div>
    </main>
  );
}