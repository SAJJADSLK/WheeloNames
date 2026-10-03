import { TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";

interface WheelIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  entries: string[];
  emoji: string;
}

const POPULAR_IDEAS: WheelIdea[] = [
  {
    id: "would-you-rather",
    title: "Would You Rather",
    description: "Classic party conversation starter. Pick a question and defend your choice.",
    category: "Games",
    emoji: "🤔",
    entries: [
      "Be invisible or fly?",
      "Time travel to the past or future?",
      "Always be 10 minutes late or 20 minutes early?",
      "Give up your phone or your computer?",
      "Swim with sharks or skydive?",
      "Be famous or be rich?",
    ],
  },
  {
    id: "class-name-picker",
    title: "Classroom Name Picker",
    description: "A ready-made template for teachers — add your students' names and spin.",
    category: "Education",
    emoji: "🏫",
    entries: ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6"],
  },
  {
    id: "decision-maker",
    title: "Decision Maker",
    description: "Stuck choosing? Load your options and let the wheel decide fairly.",
    category: "Utilities",
    emoji: "🎯",
    entries: ["Option A", "Option B", "Option C", "Option D"],
  },
  {
    id: "party-games",
    title: "Party Games Picker",
    description: "Never argue about what to play again — spin for the next group game.",
    category: "Entertainment",
    emoji: "🎉",
    entries: [
      "Charades",
      "20 Questions",
      "Never Have I Ever",
      "Two Truths One Lie",
      "Would You Rather",
      "Hot Potato",
      "Simon Says",
      "Pictionary",
    ],
  },
  {
    id: "lunch-picker",
    title: "Lunch Picker",
    description: "End the daily 'where should we eat?' debate in one spin.",
    category: "Lifestyle",
    emoji: "🍽️",
    entries: ["Pizza", "Sushi", "Burgers", "Tacos", "Salad", "Pasta", "Sandwiches", "Thai"],
  },
  {
    id: "dare-ideas",
    title: "Dare Ideas",
    description: "A wheel of fun, harmless dares for truth-or-dare nights.",
    category: "Games",
    emoji: "😈",
    entries: [
      "Do your best impression",
      "Sing a song",
      "Dance for 30 seconds",
      "Tell a joke",
      "Speak in an accent",
      "Do 10 pushups",
    ],
  },
  {
    id: "study-break",
    title: "Study Break Activities",
    description: "Teachers and students love this — spin for a quick energizing break.",
    category: "Education",
    emoji: "📚",
    entries: [
      "Stretch for 2 minutes",
      "Draw something",
      "Quick walk",
      "Brain teaser",
      "Deep breathing",
      "Share a fun fact",
    ],
  },
  {
    id: "yes-or-no",
    title: "Yes or No Wheel",
    description: "The simplest decision tool on the internet. Spin and commit.",
    category: "Utilities",
    emoji: "⚖️",
    entries: ["Yes", "No"],
  },
];

function openWheel(idea: WheelIdea) {
  const wheelData = btoa(JSON.stringify({ title: idea.title, entries: idea.entries }));
  window.location.href = `/wheel/new?wheel=${wheelData}`;
}

export default function LeaderboardPage() {
  usePageTitle("Popular Wheel Ideas - Trending Spin Wheel Templates ");
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <TrendingUp size={32} className="text-amber-600" />
            <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Popular Wheel Ideas
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hand-picked wheel ideas our users love — classrooms, parties, decisions, and games. Click any card to open it as a real, editable wheel.
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POPULAR_IDEAS.map((idea) => (
            <div
              key={idea.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-6 flex flex-col"
            >
              <div className="text-4xl mb-4">{idea.emoji}</div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {idea.title}
                </h2>
              </div>
              <span className="self-start text-xs px-2.5 py-1 rounded-full text-amber-700 bg-amber-100 font-semibold mb-3">
                {idea.category}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{idea.description}</p>
              <p className="text-xs text-gray-400 mb-4">{idea.entries.length} entries included</p>
              <button
                onClick={() => openWheel(idea)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all"
              >
                <Sparkles size={15} />
                Try This Wheel
              </button>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            How these ideas work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">1. Pick an idea</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Browse the cards above and choose the wheel idea that fits your situation — a classroom, a party, or a tough decision.
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">2. Open it as a real wheel</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clicking "Try This Wheel" loads the entries into the full wheel editor, where you can add, remove, or rename anything.
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">3. Spin and share</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Spin your wheel, customize its theme, save it to your browser, or share a link with friends — no sign-up needed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Have your own idea?
          </h2>
          <p className="text-amber-100 mb-6 max-w-xl mx-auto">
            Start from a blank wheel and build anything — raffles, giveaways, team draws, or your own party game.
          </p>
          <Link href="/wheel/new">
            <span className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-amber-700 bg-white hover:bg-amber-50 shadow-md transition-all cursor-pointer">
              Create Your Own Wheel
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
