"use client";

import { useState } from "react";

export default function QuizPage() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const [score, setScore] = useState<number | null>(null);
const [results, setResults] = useState<any[]>([]);
const [error, setError] = useState("");
  async function generateQuiz() {
    if (!topic.trim()) return;

    try {
      setLoading(true);
      setError("");
      setScore(null);

      const response = await fetch(
        "https://legaltech-bot.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `QUIZ_JSON:${topic} (${difficulty})`,
            sessionId: "quiz-user",
          }),
        }
      );

      const data = await response.json();

      console.log(data.reply);

      const parsedQuiz = JSON.parse(data.reply);

      setQuestions(parsedQuiz.questions);
      setSelectedAnswers({});
    } catch (error) {
      console.error(error);
      setError(
        "An error occurred while generating the quiz."
      );
    } finally {
      setLoading(false);
    }
  }

  function submitQuiz() {
  let correct = 0;

  const review = questions.map(
    (question, index) => {
      const userAnswer =
        selectedAnswers[index];

      const isCorrect =
        userAnswer === question.answer;

      if (isCorrect) {
        correct++;
      }

      return {
        question: question.question,
        userAnswer,
        correctAnswer:
          question.answer,
        isCorrect,
      };
    }
  );

  setResults(review);
  setScore(correct);
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
          Quiz Generator
        </h2>

        <p className="text-gray-400 mb-8">
          Generate practice questions on any legal topic.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-end">
          <input
            value={topic}
            onChange={(e) =>
              setTopic(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateQuiz();
              }
            }}
            placeholder="e.g. Contract Law"
            className="flex-1 p-4 rounded-xl text-white"
            style={{
              backgroundColor: "#1A1A1D",
              border: "1px solid #B59410",
            }}
          />

          <div>
            <label className="block mb-2 text-gray-300">
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
              className="p-4 rounded-xl text-white"
              style={{
                backgroundColor: "#1A1A1D",
                border: "1px solid #B59410",
              }}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">
                Medium
              </option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <button
            onClick={generateQuiz}
            disabled={loading}
            className="px-6 py-4 rounded-xl font-semibold"
            style={{
              backgroundColor: "#B59410",
              color: "#121214",
            }}
          >
            {loading
              ? "Generating..."
              : "Generate"}
          </button>
        </div>

        {error && (
          <div
            className="mb-6 p-4 rounded-xl"
            style={{
              border: "1px solid red",
            }}
          >
            {error}
          </div>
        )}

        <div
          className="rounded-xl p-6 min-h-[400px] overflow-y-auto"
          style={{
            backgroundColor: "#1A1A1D",
            border: "1px solid #B59410",
          }}
        >
          {loading ? (
            "Generating quiz..."
          ) : questions.length > 0 ? (
            questions.map((q, index) => (
              <div
                key={index}
                className="mb-8"
              >
                <h3 className="font-bold mb-4">
                  {index + 1}. {q.question}
                </h3>

                {Object.entries(q.options).map(
                  ([letter, option]) => (
                    <label
                      key={letter}
                      className="block mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={letter}
                        checked={
                          selectedAnswers[
                            index
                          ] === letter
                        }
                        onChange={() =>
                          setSelectedAnswers(
                            (prev) => ({
                              ...prev,
                              [index]:
                                letter,
                            })
                          )
                        }
                        className="mr-2"
                      />

                      {letter}.{" "}
                      {String(option)}
                    </label>
                  )
                )}
              </div>
            ))
          ) : (
            "Your generated quiz will appear here."
          )}
        </div>

        {questions.length > 0 && (
          <button
            onClick={submitQuiz}
            className="mt-6 px-6 py-3 rounded-xl font-semibold"
            style={{
              backgroundColor: "#B59410",
              color: "#121214",
            }}
          >
            Submit Quiz
          </button>
        )}

        {score !== null && (
          <div
            className="mt-6 p-6 rounded-xl"
            style={{
              backgroundColor: "#1A1A1D",
              border: "1px solid #B59410",
            }}
          >
            <h3 className="text-2xl font-bold">
              Score: {score}/
              {questions.length}
            </h3>

            <p className="mt-3 text-gray-300">
              {score ===
              questions.length
                ? "Perfect score! 🎉"
                : score >=
                  questions.length /
                    2
                ? "Good job! 👍"
                : "Keep practicing 💪"}
            </p>
          </div>
        )}
        {results.length > 0 && (
  <div className="mt-6">
    <h3 className="text-2xl font-bold mb-4">
      Review
    </h3>

    {results.map((result, index) => (
      <div
        key={index}
        className="mb-4 p-4 rounded-xl"
        style={{
          backgroundColor: "#1A1A1D",
          border: "1px solid #B59410",
        }}
      >
        <p className="font-semibold mb-2">
          Question {index + 1}
        </p>

        <p>
          {result.isCorrect
            ? "✅ Correct"
            : "❌ Incorrect"}
        </p>

        <p>
          Your Answer:{" "}
          {result.userAnswer || "No Answer"}
        </p>

        <p>
          Correct Answer:{" "}
          {result.correctAnswer}
        </p>
      </div>
    ))}
  </div>
)}
      </div>
    </main>
  );
}