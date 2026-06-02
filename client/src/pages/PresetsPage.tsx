import { useState } from "react";
import { Zap, Copy } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";

const PRESETS = {
  truthOrDare: {
    title: "Truth or Dare",
    description: "Classic party game wheel",
    entries: ["Truth", "Dare"],
    colors: ["#FF6B6B", "#4ECDC4"],
  },
  yesOrNo: {
    title: "Yes or No",
    description: "Quick decision maker",
    entries: ["Yes", "No"],
    colors: ["#95E1D3", "#F38181"],
  },
  truthQuestions: {
    title: "Truth Questions",
    description: "Deep conversation starters",
    entries: [
      "What's your biggest fear?",
      "What's your most embarrassing moment?",
      "What do you secretly want to do?",
      "What's your biggest regret?",
      "What would you change about yourself?",
      "What's your hidden talent?",
      "What's your guilty pleasure?",
      "What's something nobody knows about you?",
    ],
    colors: ["#A8E6CF", "#FFD3B6", "#FFAAA5", "#FF8B94", "#A8D8EA", "#AA96DA", "#FCBAD3", "#FFFFD2"],
  },
  dareIdeas: {
    title: "Dare Ideas",
    description: "Fun challenges",
    entries: [
      "Do your best impression",
      "Sing a song",
      "Dance for 30 seconds",
      "Tell a joke",
      "Speak in an accent",
      "Do 10 pushups",
      "Call someone and sing",
      "Post a silly photo",
    ],
    colors: ["#FFB6C1", "#FFD700", "#98FB98", "#87CEEB", "#DDA0DD", "#F0E68C", "#FFA07A", "#20B2AA"],
  },
  partyGames: {
    title: "Party Games",
    description: "Group activity picker",
    entries: [
      "Charades",
      "20 Questions",
      "Never Have I Ever",
      "Two Truths One Lie",
      "Would You Rather",
      "Spin the Bottle",
      "Hot Potato",
      "Simon Says",
    ],
    colors: ["#FF1493", "#00CED1", "#FFD700", "#32CD32", "#FF4500", "#1E90FF", "#FF69B4", "#00FA9A"],
  },
  iceBreakers: {
    title: "Ice Breakers",
    description: "Meeting starters",
    entries: [
      "Share a fun fact",
      "What's your superpower?",
      "Best vacation story",
      "Favorite hobby",
      "Dream job",
      "Funny childhood memory",
      "Hidden talent",
      "Most interesting experience",
    ],
    colors: ["#87CEEB", "#FFB6C1", "#98FB98", "#DDA0DD", "#F0E68C", "#FFA07A", "#20B2AA", "#FFD700"],
  },
};

export default function PresetsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyPreset = (key: string) => {
    const preset = PRESETS[key as keyof typeof PRESETS];
    const wheelData = btoa(JSON.stringify({ title: preset.title, entries: preset.entries }));
    const shareUrl = `${window.location.origin}/wheel/new?wheel=${wheelData}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(key);
    toast.success("Link copied!");
    setTimeout(() => setCopied(null), 2000);
  };

  const openPreset = (key: string) => {
    const preset = PRESETS[key as keyof typeof PRESETS];
    const wheelData = btoa(JSON.stringify({ title: preset.title, entries: preset.entries }));
    window.location.href = `/wheel/new?wheel=${wheelData}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Zap size={32} className="text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Preset Wheels
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready-to-use wheels for popular games, ice breakers, and party activities. Click any wheel to start spinning!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(PRESETS).map(([key, preset]) => (
              <div
                key={key}
                className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
              >
                {/* Color Preview */}
                <div className="h-24 bg-gradient-to-r flex items-center justify-center gap-1" style={{
                  backgroundImage: `linear-gradient(to right, ${preset.colors.join(", ")})`,
                }}>
                  <div className="text-white text-center">
                    <p className="text-2xl font-bold">{preset.entries.length}</p>
                    <p className="text-xs opacity-90">options</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {preset.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{preset.description}</p>
                  </div>

                  {/* Preview Entries */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Entries</p>
                    <div className="flex flex-wrap gap-2">
                      {preset.entries.slice(0, 3).map((entry, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{
                          backgroundColor: preset.colors[idx % preset.colors.length],
                        }}>
                          {entry}
                        </span>
                      ))}
                      {preset.entries.length > 3 && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700 bg-gray-200">
                          +{preset.entries.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => openPreset(key)}
                      className="flex-1 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all active:scale-95"
                    >
                      Spin Now
                    </button>
                    <button
                      onClick={() => copyPreset(key)}
                      className="px-4 py-2.5 rounded-xl font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
                      title="Copy share link"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  {copied === key && (
                    <p className="text-xs text-center text-green-600 font-semibold">✓ Link copied!</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-200 p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              💡 Pro Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">🎉 Party Mode</p>
                <p className="text-sm">Use Truth or Dare for classic party games with friends and family.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">🏫 Classroom</p>
                <p className="text-sm">Use Ice Breakers to get students engaged and comfortable.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">📋 Customize</p>
                <p className="text-sm">Click "Spin Now" then edit entries to create your own version.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">🔗 Share</p>
                <p className="text-sm">Use the copy button to share preset wheels with others.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
