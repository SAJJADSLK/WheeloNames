import { useState } from "react";
import { Palette, Zap, RotateCw } from "lucide-react";
import Header from "@/components/Header";

const THEMES = [
  {
    id: "default",
    name: "Default",
    colors: ["#7c3aed", "#6366f1", "#3b82f6", "#06b6d4"],
    description: "Classic purple & blue",
  },
  {
    id: "sunset",
    name: "Sunset",
    colors: ["#f97316", "#fb923c", "#fbbf24", "#fcd34d"],
    description: "Warm orange & gold",
  },
  {
    id: "ocean",
    name: "Ocean",
    colors: ["#0369a1", "#0284c7", "#0ea5e9", "#38bdf8"],
    description: "Cool blues & cyans",
  },
  {
    id: "forest",
    name: "Forest",
    colors: ["#15803d", "#22c55e", "#4ade80", "#86efac"],
    description: "Nature greens",
  },
  {
    id: "candy",
    name: "Candy",
    colors: ["#ec4899", "#f43f5e", "#fb7185", "#fda4af"],
    description: "Vibrant pinks & reds",
  },
  {
    id: "midnight",
    name: "Midnight",
    colors: ["#1e293b", "#334155", "#475569", "#64748b"],
    description: "Dark grays & blues",
  },
  {
    id: "neon",
    name: "Neon",
    colors: ["#00ff00", "#00ffff", "#ff00ff", "#ffff00"],
    description: "Bright neon colors",
  },
  {
    id: "pastel",
    name: "Pastel",
    colors: ["#fce7f3", "#dbeafe", "#dcfce7", "#fef3c7"],
    description: "Soft pastels",
  },
];

const ANIMATIONS = [
  {
    id: "smooth",
    name: "Smooth Spin",
    description: "Gentle, smooth rotation",
  },
  {
    id: "bounce",
    name: "Bouncy",
    description: "Bouncy spring effect",
  },
  {
    id: "elastic",
    name: "Elastic",
    description: "Elastic snap effect",
  },
  {
    id: "momentum",
    name: "Momentum",
    description: "Realistic momentum",
  },
];

export default function CustomizationPage() {
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [selectedAnimation, setSelectedAnimation] = useState("smooth");
  const [wheelSize, setWheelSize] = useState(400);
  const [spinSpeed, setSpinSpeed] = useState(5);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Palette size={32} className="text-pink-600" />
              <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Customization Studio
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Create your perfect wheel with custom themes, animations, and settings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20 space-y-4">
                <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Preview
                </h2>

                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center min-h-96 border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div
                      className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
                      style={{
                        background: `conic-gradient(${THEMES.find((t) => t.id === selectedTheme)?.colors.join(", ")})`,
                      }}
                    />
                    <p className="font-semibold text-gray-900 mb-2">{THEMES.find((t) => t.id === selectedTheme)?.name}</p>
                    <p className="text-sm text-gray-600">{ANIMATIONS.find((a) => a.id === selectedAnimation)?.name}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Wheel Size: {wheelSize}px</label>
                    <input
                      type="range"
                      min="200"
                      max="600"
                      value={wheelSize}
                      onChange={(e) => setWheelSize(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Spin Speed: {spinSpeed}s</label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={spinSpeed}
                      onChange={(e) => setSpinSpeed(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="lg:col-span-2 space-y-6">
              {/* Themes */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  🎨 Color Themes
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedTheme === theme.id
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex gap-1 mb-2 justify-center">
                        {theme.colors.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-4 h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <p className="font-semibold text-sm text-gray-900">{theme.name}</p>
                      <p className="text-xs text-gray-600">{theme.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Animations */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  ⚡ Spin Animations
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {ANIMATIONS.map((anim) => (
                    <button
                      key={anim.id}
                      onClick={() => setSelectedAnimation(anim.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedAnimation === anim.id
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Zap size={20} className="mx-auto mb-2 text-pink-600" />
                      <p className="font-semibold text-sm text-gray-900">{anim.name}</p>
                      <p className="text-xs text-gray-600">{anim.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Options */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-200 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  ⚙️ Advanced Options
                </h2>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                    <span className="text-sm font-medium text-gray-700">Enable sound effects</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                    <span className="text-sm font-medium text-gray-700">Show confetti on winner</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                    <span className="text-sm font-medium text-gray-700">Enable haptic feedback (mobile)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm font-medium text-gray-700">Dark mode</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all">
                  Save Customization
                </button>
                <button className="px-6 py-3 rounded-lg font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition-all flex items-center gap-2">
                  <RotateCw size={16} />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
