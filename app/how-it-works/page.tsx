export default function HowItWorksPage() {
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

        <h2 className="text-5xl font-bold mb-10">
          How It Works
        </h2>

        <div className="space-y-6">

          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: "#1A1A1D",
              border: "1px solid #B59410",
            }}
          >
            <h3 className="text-2xl font-bold mb-3">
              1. Ask Questions
            </h3>

            <p className="text-gray-300">
              Ask legal questions in plain language and
              receive AI-generated explanations.
            </p>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: "#1A1A1D",
              border: "1px solid #B59410",
            }}
          >
            <h3 className="text-2xl font-bold mb-3">
              2. Search The Constitution
            </h3>

            <p className="text-gray-300">
              Instantly retrieve and understand sections
              of the Nigerian Constitution.
            </p>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: "#1A1A1D",
              border: "1px solid #B59410",
            }}
          >
            <h3 className="text-2xl font-bold mb-3">
              3. Generate Quizzes
            </h3>

            <p className="text-gray-300">
              Create practice questions on legal topics
              to test and strengthen your understanding.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}