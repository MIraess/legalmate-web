export default function AboutPage() {
  return (
    <main
      className="min-h-screen p-8 text-white"
      style={{
        backgroundColor: "#121214",
      }}
    >
      <div className="max-w-5xl mx-auto">

        <h1
          className="font-bold mb-8"
          style={{
            color: "#B59410",
            fontSize: "25px",
          }}
        >
          ⚖️ LegalMate
        </h1>

        <h2 className="text-5xl font-bold mb-8">
          About LegalMate
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          LegalMate is an AI-powered legal learning assistant
          designed specifically for Nigerian law students and ordinary persons.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          The platform helps students understand legal concepts,
          constitutional provisions, case law principles, and
          examination topics through conversational AI.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          Beyond legal explanations, LegalMate also provides
          constitution search capabilities and generates quizzes on any law topic
          to support learning and revision. It also supports voice notes on the current WhatsApp version as well as providing answers in the most common Nigerian Langusges.
        </p>

        <div
          className="mt-10 p-6 rounded-xl"
          style={{
            backgroundColor: "#1A1A1D",
            border: "1px solid #B59410",
          }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Our Mission
          </h3>

          <p className="text-gray-300">
            To make legal education more accessible,
            interactive and effective through artificial
            intelligence.
          </p>
        </div>

      </div>
    </main>
  );
}