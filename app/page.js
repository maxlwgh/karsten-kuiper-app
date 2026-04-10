"use client";
import { useState, useEffect } from "react";

function Logo({ size = 380 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
      <circle cx="190" cy="190" r="175" fill="#1a3a2a" stroke="#c8a96e" strokeWidth="3" />
      <circle cx="190" cy="190" r="155" fill="none" stroke="#c8a96e" strokeWidth="1" opacity="0.5" />
      <g transform="translate(55, 140)" opacity="0.6">
        <path d="M0,60 Q15,-10 30,60" fill="none" stroke="#7fa87f" strokeWidth="1.5" />
        <path d="M5,50 Q15,5 25,50" fill="none" stroke="#7fa87f" strokeWidth="1" />
        <ellipse cx="15" cy="20" rx="8" ry="18" fill="none" stroke="#7fa87f" strokeWidth="1" transform="rotate(-10, 15, 20)" />
      </g>
      <g transform="translate(295, 140)" opacity="0.6">
        <path d="M0,60 Q15,-10 30,60" fill="none" stroke="#7fa87f" strokeWidth="1.5" />
        <path d="M5,50 Q15,5 25,50" fill="none" stroke="#7fa87f" strokeWidth="1" />
        <ellipse cx="15" cy="20" rx="8" ry="18" fill="none" stroke="#7fa87f" strokeWidth="1" transform="rotate(10, 15, 20)" />
      </g>
      <text x="190" y="175" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="72" fontWeight="400" fill="#c8a96e" opacity="0.2">&amp;</text>
      <text x="190" y="160" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="44" fontWeight="700" fill="#f5f0e8" letterSpacing="8">KARSTEN</text>
      <line x1="95" y1="175" x2="285" y2="175" stroke="#c8a96e" strokeWidth="1.5" />
      <polygon points="190,170 195,175 190,180 185,175" fill="#c8a96e" />
      <text x="190" y="215" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="44" fontWeight="700" fill="#f5f0e8" letterSpacing="8">KUIPER</text>
      <path id="topArc" d="M100,80 A120,120 0 0,1 280,80" fill="none" />
      <text fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="11" fill="#c8a96e" letterSpacing="3"><textPath href="#topArc" startOffset="50%" textAnchor="middle">WINKEL · CATERING · EVENTS</textPath></text>
      <text x="190" y="260" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="12" fill="#c8a96e" letterSpacing="4">DEN HAAG</text>
      <text x="190" y="285" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="11" fill="#c8a96e" opacity="0.7" letterSpacing="2">— EST. 2014 —</text>
      <path d="M120,310 Q190,340 260,310" fill="none" stroke="#c8a96e" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center transition-all duration-1000" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
        <Logo />
        <div className="mt-10 text-center max-w-md">
          <p className="text-stone-400 text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Van Diemenstraat 132 · Zeeheldenkwartier</p>
          <h2 className="mt-8 text-stone-700 text-2xl font-light leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Vers, eerlijk &amp; met liefde bereid</h2>
          <p className="mt-4 text-stone-500 text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Sinds 2014 serveren wij dagelijks verse maaltijden met de beste ingrediënten. Van Nederlandse klassiekers tot Mediterrane, Oriëntaalse en Arabische gerechten.</p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="https://www.karstenkuiper.nl" target="_blank" rel="noopener noreferrer" className="text-sm tracking-[0.15em] uppercase border border-stone-800 bg-stone-800 text-stone-100 px-6 py-3 hover:bg-stone-700 transition-all duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Bekijk menu</a>
            <a href="https://karstenkuiper.foodticket.nl" target="_blank" rel="noopener noreferrer" className="text-sm tracking-[0.15em] uppercase border border-stone-300 text-stone-600 px-6 py-3 hover:border-stone-800 hover:text-stone-800 transition-all duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Bestellen</a>
          </div>
        </div>
      </div>
      <footer className="mt-20 mb-8 text-center">
        <p className="text-stone-300 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>© 2024 Karsten &amp; Kuiper · Den Haag</p>
      </footer>
    </main>
  );
    }
