/* =============================================================
   Home Page — Wheeloname
   Design: Playful Precision — white bg, purple accent, clean typography
   SEO Optimized with AdSense placements
   ============================================================= */

import Header from "@/components/Header";
import SpinWheel from "@/components/SpinWheel";
import { Link } from "wouter";
import { ArrowRight, Zap, Users, Grid3x3 } from "lucide-react";
import { useEffect } from "react";

const USE_CASES = [
  { emoji: "🏫", title: "Classrooms", desc: "Random student picks, subject prompts" },
  { emoji: "🎉", title: "Party Games", desc: "Truth or Dare, dares, challenges" },
  { emoji: "🍽️", title: "Lunch Picker", desc: 'End the "where should we eat?" debate' },
  { emoji: "🎁", title: "Prize Draws", desc: "Fair raffle for events & giveaways" },
  { emoji: "💼", title: "Team Meetings", desc: "Who presents next? Who leads?" },
  { emoji: "🎮", title: "Gaming", desc: "Random game modes, challenge pickers" },
];

const FEATURES = [
  {
    title: "Weighted Entries",
    desc: "Give some options a higher probability with custom weight values.",
    icon: "⚖️",
  },
  {
    title: "Save Your Wheels",
    desc: "Create and save unlimited wheels for classrooms, events & more.",
    icon: "💾",
  },
  {
    title: "Ready-made Templates",
    desc: "Start instantly with Yes/No, Party Games, Lunch Picker & more.",
    icon: "📋",
  },
  {
    title: "Import & Export",
    desc: "Upload a CSV, paste a list, or export your results instantly.",
    icon: "📤",
  },
  {
    title: "Satisfying Sounds",
    desc: "Real ticking sounds during spin and a fanfare when the winner lands.",
    icon: "🔊",
  },
  {
    title: "Team Division",
    desc: "Automatically split entries into balanced teams or groups.",
    icon: "👥",
  },
];

const MAIN_FEATURES = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    desc: "Create and spin wheels instantly with zero loading time",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Perfect for Teams",
    desc: "Divide groups, pick presenters, and make fair decisions",
  },
  {
    icon: <Grid3x3 className="w-6 h-6" />,
    title: "Fully Customizable",
    desc: "Add unlimited entries, change colors, and save your wheels",
  },
];

/* ── AdSense helper ──────────────────────────────────────────────
   Your publisher ID: ca-pub-3811332485680799
   Slots below use "auto" format — Google will pick the best ad
   size for each placement automatically. Once your account is
   approved, replace the slot numbers with real ones from your
   AdSense dashboard (Ad units → Display ads → Get code).
   Until then, leaving slot="auto" is perfectly valid for review.
──────────────────────────────────────────────────────────────── */
function AdBanner({ slot, format = "auto" }: { slot: string; format?: string }) {
  useEffect(() => {
    try {
      const w = window as any;
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch (e) {
      // AdSense not yet loaded — safe to ignore during development
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight: "90px" }}
      data-ad-client="ca-pub-3811332485680799"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f5ff] to-white pt-20 pb-16 px-4">
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold tracking-wide mb-8 border border-purple-200">
            <span className="text-purple-500">✦</span>
            FREE &amp; NO SIGN-UP REQUIRED
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up animate-fade-up-delay-1 text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Spin the Wheel,
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
              }}
            >
              Pick a Winner
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up animate-fade-up-delay-2 text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            The free online spin wheel maker for classrooms, raffles, giveaways &amp; decisions. Create custom wheels, pick random names, divide teams, and make fair decisions instantly.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Link href="/wheel/new">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-300 transition-all duration-200 active:scale-95">
                Create Spin Wheel Now
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/wheels">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:border-purple-300 hover:text-purple-700 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95">
                My Saved Wheels
              </button>
            </Link>
          </div>

          {/* Wheel illustration */}
          <div className="animate-fade-up animate-fade-up-delay-4 flex justify-center">
            <div className="animate-float">
              <SpinWheel size={260} interactive={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ── AdSense Banner 1 — below hero ── */}
      {/* Placement: high-visibility, above-the-fold adjacent. Great for leaderboard/banner ads. */}
      <section className="py-4 px-4 bg-white border-b border-gray-100 text-center" aria-label="Advertisement">
        <AdBanner slot="auto" format="horizontal" />
      </section>

      {/* ── Main Features ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {MAIN_FEATURES.map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3
                  className="font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use-Case Cards ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-extrabold text-gray-900 text-center mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Perfect for Every Situation
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Whether you're in a classroom, hosting a party, running a meeting, or organizing an event, Wheeloname makes random selection easy and fun.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                <span className="text-3xl mb-3">{uc.emoji}</span>
                <h3
                  className="text-sm font-bold text-gray-800 mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {uc.title}
                </h3>
                <p className="text-xs text-gray-500 leading-snug">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AdSense Banner 2 — mid-page ── */}
      {/* Placement: mid-content, between use-cases and features grid. Good for in-article/rectangle ads. */}
      <section className="py-4 px-4 bg-gray-50 border-y border-gray-100 text-center" aria-label="Advertisement">
        <AdBanner slot="auto" format="rectangle" />
      </section>

      {/* ── Features Grid ── */}
      <section className="py-20 px-4 bg-[#f9f7ff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Everything you need, nothing you don't
            </h2>
            <p className="text-gray-500 text-base">Built for power users and casual spinners alike.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                    {feat.icon}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold text-gray-900 mb-1.5"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is Wheeloname ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What is Wheeloname?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Wheeloname is a free online spin wheel maker designed to make random selection simple, fair, and fun. Whether you're a teacher picking students, an event organizer running a raffle, or friends deciding where to eat, Wheeloname helps you make decisions with a spin. We believe that fair, transparent randomization should be accessible to everyone, regardless of technical skill or budget.
            </p>
            <p>
              Unlike other random selectors, Wheeloname offers powerful features like weighted entries, team division, customizable themes, and the ability to save your wheels for future use. Our intuitive interface makes it easy for anyone to create and spin wheels in seconds, without any technical knowledge required.
            </p>
            <p>
              Wheeloname has become the go-to tool for teachers, event organisers, and anyone who needs fast, transparent randomisation. Join a growing community of users who trust Wheeloname for decisions big and small.
            </p>
          </div>
        </div>
      </section>

      {/* ── How Wheeloname Works ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            How Wheeloname Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-3">Create Your Wheel</h3>
              <p className="text-gray-600">
                Add entries, names, or options to your wheel. You can add as many as you want. Simply type in your entries and they'll appear on the wheel instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-3">Customize Your Design</h3>
              <p className="text-gray-600">
                Choose from 6 beautiful themes, adjust colors, and personalize your wheel to match your style or brand. Make it uniquely yours.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-3">Spin and Share</h3>
              <p className="text-gray-600">
                Spin your wheel, celebrate the winner, and share your results with others. Generate shareable links to let others spin your wheels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Wheeloname ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Why Choose Wheeloname?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Completely Free</h3>
                <p className="text-gray-600">No sign-up, no hidden fees, no premium tiers. Just create, spin, and enjoy. Forever free.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Fully Customizable</h3>
                <p className="text-gray-600">6 beautiful themes, unlimited colors, custom fonts, and personalization options to match your needs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Powerful Features</h3>
                <p className="text-gray-600">Weighted entries, team division, CSV import/export, sound effects, and more advanced features.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Privacy First</h3>
                <p className="text-gray-600">Your wheels are stored only in your browser. We don't collect or store your personal data.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Works Offline</h3>
                <p className="text-gray-600">Progressive Web App (PWA) that works offline. Install on your device and use anywhere.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Always Improving</h3>
                <p className="text-gray-600">We continuously add new features and improvements based on user feedback and requests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AdSense Banner 3 — before FAQ ── */}
      {/* Placement: pre-FAQ, strong engagement zone. Works well as a wide banner or responsive unit. */}
      <section className="py-4 px-4 bg-white border-y border-gray-100 text-center" aria-label="Advertisement">
        <AdBanner slot="auto" format="auto" />
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-extrabold text-gray-900 text-center mb-12"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is Wheeloname really free?",
                a: "Yes! Wheeloname is completely free to use. No sign-up required and no hidden fees. You can create unlimited wheels and use all features without paying anything.",
              },
              {
                q: "Can I save my wheels?",
                a: "Absolutely. Your wheels are saved locally in your browser, so you can access them anytime without creating an account.",
              },
              {
                q: "How many entries can I add?",
                a: "You can add unlimited entries to your wheel. The more entries, the more options for random selection.",
              },
              {
                q: "Can I share my wheels with others?",
                a: "Yes! You can generate a shareable link for any wheel and send it to friends, classmates, or team members.",
              },
              {
                q: "Does it work on mobile?",
                a: "Perfectly! Wheeloname is fully responsive and works seamlessly on phones, tablets, and desktops.",
              },
              {
                q: "Can I export my data?",
                a: "Yes, you can export your wheel entries as CSV and import them into other tools or share them easily.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3
                  className="font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2
            className="text-4xl font-extrabold mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Ready to spin?
          </h2>
          <p className="text-purple-200 text-lg mb-8">No sign-up needed. Create your wheel in seconds.</p>
          <Link href="/wheel/new">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-purple-700 bg-white hover:bg-purple-50 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95">
              Start Spinning Free
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="white" />
                    <path d="M8 1 A7 7 0 0 1 15 8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <span
                  className="text-sm font-bold text-gray-900"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Wheeloname
                </span>
              </div>
              <p className="text-xs text-gray-500">Free forever. No account required.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Product</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/wheel/new">Create Wheel</Link></li>
                <li><Link href="/wheels">My Wheels</Link></li>
                <li><Link href="/teams">Teams</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Use Cases</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/classroom">Classroom Picker</Link></li>
                <li><Link href="/presets">Party Games</Link></li>
                <li><Link href="/wheel/new">Prize Draws</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3">Legal</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/privacy" className="hover:text-purple-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-purple-600">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-purple-600">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-500">
            <p>&copy; 2026 Wheeloname. All rights reserved. Made with ❤️ for decision makers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
