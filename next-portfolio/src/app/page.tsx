import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-[32px] md:rounded-[40px] m-2 md:m-6 shadow-2xl"
      style={{
        background: "#F49C69",
        backgroundImage:
          "radial-gradient(circle at 50% 100%, rgba(244, 156, 105, 1) 0%, rgba(205, 65, 64, 1) 20%, rgba(102, 16, 32, 1) 42%, rgba(0, 0, 0, 1) 65%)",
      }}
    >
      {/* Top nav */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 pt-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <Image src="/next.svg" alt="Logo" width={28} height={28} />
          </div>
        </div>
        {/* Centered nav */}
        <nav className="absolute left-1/2 top-6 -translate-x-1/2">
          <ul className="flex gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
            <li>
              <a href="#work" className="text-white/90 font-medium px-3 py-1 rounded-full hover:bg-white/20 transition">
                Work
              </a>
            </li>
            <li>
              <a href="#about" className="text-white/90 font-medium px-3 py-1 rounded-full hover:bg-white/20 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white/90 font-medium px-3 py-1 rounded-full hover:bg-white/20 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Top right icons */}
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            <Image src="/globe.svg" alt="Settings" width={20} height={20} />
          </button>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 relative px-4">
        {/* Profile */}
        <div className="flex flex-col items-center mb-8">
          <Image src="/profile.jpg" alt="Profile" width={48} height={48} className="rounded-full border-2 border-white/30 mb-2" />
          <span className="text-white/80 font-medium text-lg">Dev Patel</span>
        </div>
        {/* Headline */}
        <h1 className="text-center text-white font-extralight tracking-tight text-4xl md:text-7xl leading-tight max-w-5xl mb-10">
          code, cognition & applied research.
        </h1>
        {/* CTA Button */}
        <button className="mt-2 px-8 py-3 rounded-full bg-white/10 border border-white/30 text-white/90 font-medium text-lg backdrop-blur-md hover:bg-white/20 transition shadow-lg"
          style={{
            boxShadow: "0 4px 32px 0 rgba(255,94,98,0.15)",
            border: "1.5px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
          }}>
          View my work
        </button>
      </main>
    </div>
  );
}
