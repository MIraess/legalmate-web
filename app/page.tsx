export default function Home() {
  return (
    <main
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at right center, rgba(181,148,16,0.35), transparent 40%), #121214",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/law1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 15%",
          backgroundSize: "cover",
          opacity: 0.70,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-6 md:py-10">

        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4">

          <h1
            className="font-bold tracking-wide"
            style={{
              color: "#B59410",
              fontSize: "25px",
            }}
          >
            ⚖️ LegalMate
          </h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg">

            <a
              href="/how-it-works"
              className="hover:text-yellow-500 transition"
            >
              Features
            </a>

            <a
              href="/constitution"
              className="hover:text-yellow-500 transition"
            >
              Constitution
            </a>

            <a
              href="/quiz"
              className="hover:text-yellow-500 transition"
            >
              Quiz Generator
            </a>

            <a
              href="/about"
              className="hover:text-yellow-500 transition"
            >
              About
            </a>

          </div>

        </nav>

        {/* Hero Section */}
        <section className="mt-7 md:mt-11 max-w-4xl">

          <h2
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              lineHeight: "1.1",
            }}
          >
            AI Legal Intelligence
            <br />
            for Nigerian Law Students
          </h2>

          <p className="text-gray-300 text-base md:text-xl mt-6 max-w-xl leading-relaxed">
            Learn faster, understand legal concepts,
            explore constitutional provisions,
            and prepare for exams with AI-powered
            assistance.
          </p>

          <a
            href="/chat"
            className="inline-block mt-8 px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
            style={{
              backgroundColor: "#B59410",
              color: "#ffffff",
            }}
          >
            Try Assistant
          </a>

        </section>

      </div>
    </main>
  );
}