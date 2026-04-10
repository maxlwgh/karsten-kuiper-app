"use client";
import { useState, useEffect } from "react";

const LOGO_URL = "https://images.squarespace-cdn.com/content/6578302d98877146b0f2c41c/117f5db1-e6f3-4956-ad5c-6372aca043b2/Karsten_kuiper_logo-2_doorzichtig.png?content-type=image%2Fpng";

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);
  return (
    <main className="min-h-screen bg-stone-900 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center transition-all duration-1000" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
        <img src={LOGO_URL} alt="Karsten & Kuiper logo" className="w-full max-w-lg" style={{ filter: "invert(1)" }} />
        <div className="mt-12 text-center max-w-md">
          <p className="text-stone-500 text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Van Diemenstraat 132 · Zeeheldenkwartier · Den Haag</p>
          <p className="mt-6 text-stone-400 text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Sinds 2014 serveren wij dagelijks verse maaltijden met de beste ingrediënten. Van Nederlandse klassiekers tot Mediterrane, Oriëntaalse en Arabische gerechten.</p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="https://www.karstenkuiper.nl" target="_blank" rel="noopener noreferrer" className="text-sm tracking-[0.15em] uppercase border border-stone-400 text-stone-300 px-6 py-3 hover:bg-stone-300 hover:text-stone-900 transition-all duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Bekijk menu</a>
            <a href="https://karstenkuiper.foodticket.nl" target="_blank" rel="noopener noreferrer" className="text-sm tracking-[0.15em] uppercase border border-stone-600 text-stone-500 px-6 py-3 hover:border-stone-400 hover:text-stone-300 transition-all duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Bestellen</a>
          </div>
        </div>
      </div>
      <footer className="mt-20 mb-8 text-center">
        <p className="text-stone-700 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>© 2024 Karsten & Kuiper · Den Haag</p>
      </footer>
    </main>
  );
}
