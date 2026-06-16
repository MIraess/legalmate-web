export default function FeaturesPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#121214",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

        {/* Header */}
        <div className="text-center mb-20">

          <h1
            className="font-bold mb-6"
            style={{
              color: "#B59410",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
            }}
          >
            ⚖️ Features
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Everything Nigerian law students need to
            learn faster, understand better, and prepare
            smarter using AI-powered legal tools.
          </p>

        </div>

        {/* Feature 1 */}
        <section className="mb-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/images/law4.png"
              alt="AI Legal Assistant"
              className="rounded-2xl border"
              style={{
                borderColor: "#B59410",
              }}
            />

            <div>

              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#B59410",
                }}
              >
                🤖 Artificial Intelligence Powered Legal Assistant
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Ask legal questions and receive instant
                explanations in simple Nigerian legal
                terms. LegalMate helps students
                understand complex legal concepts,
                principles, and doctrines without
                unnecessary jargon and legalese.
              </p>

            </div>

          </div>

        </section>

        {/* Feature 2 */}
        <section className="mb-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#B59410",
                }}
              >
                📖 Constitution Search
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Search provisions of the Nigerian
                Constitution and instantly receive
                simplified explanations. No need to
                manually browse hundreds of sections.
              </p>

            </div>

            <img
              src="/images/law5.png"
              alt="Constitution Search"
              className="rounded-2xl border"
              style={{
                borderColor: "#B59410",
              }}
            />

          </div>

        </section>

        {/* Feature 3 */}
        <section className="mb-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/images/law6.png"
              alt="Quiz Generator"
              className="rounded-2xl border"
              style={{
                borderColor: "#B59410",
              }}
            />

            <div>

              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#B59410",
                }}
              >
                📝 Smart Quiz Generator
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Generate multiple-choice questions on
                any legal topic. Receive automatic
                scoring, answer review, and immediate
                feedback to improve learning outcomes.
              </p>

            </div>

          </div>

        </section>

        {/* Feature 4 */}
        <section className="mb-24">

          <div
            className="rounded-3xl p-8"
            style={{
              backgroundColor: "#1A1A1D",
              border: "1px solid #B59410",
            }}
          >

            <h2
              className="text-4xl font-bold mb-6 text-center"
              style={{
                color: "#B59410",
              }}
            >
              🎙️ WhatsApp Voice Assistant
            </h2>

            <p className="text-center text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
              Access LegalMate directly through
              WhatsApp. Send text messages or voice
              notes and receive legal assistance
              anytime, anywhere.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

              <img
                src="/images/law2.png"
                alt="WhatsApp Assistant"
                className="rounded-2xl border"
                style={{
                  borderColor: "#B59410",
                }}
              />

              <img
                src="/images/law3.png"
                alt="Voice Note Support"
                className="rounded-2xl border"
                style={{
                  borderColor: "#B59410",
                }}
              />

            </div>

            <div className="mt-10 grid md:grid-cols-5 gap-4 text-center">

              <div>✓ Text Messages</div>
              <div>✓ Voice Notes</div>
              <div>✓ Legal Research</div>
              <div>✓ Exam Support</div>
              <div>✓ Mobile Access</div>

            </div>

          </div>

        </section>

        {/* Feature 5 */}
        <section className="mb-24 text-center">

          <h2
            className="text-3xl font-bold mb-6"
            style={{
              color: "#B59410",
            }}
          >
            🧠 Personalized Learning
          </h2>

          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            LegalMate adapts its responses to suit
            different learning needs, providing
            simplified explanations, structured
            academic responses, practical examples,
            and exam-focused guidance.
          </p>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience LegalMate?
          </h2>

          <p className="text-gray-300 mb-8">
            Explore AI-powered legal learning today.
          </p>

          <a
            href="/chat"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-lg"
            style={{
              backgroundColor: "#B59410",
              color: "#121214",
            }}
          >
            Try LegalMate
          </a>

        </section>

      </div>
    </main>
  );
}