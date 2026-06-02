import { useState } from "react";
import { Code, Copy, Download } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";

export default function WidgetPage() {
  const [wheelId, setWheelId] = useState("demo-wheel-123");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [theme, setTheme] = useState("default");
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe
  src="https://wheelo-names.vercel.app/widget?id=${wheelId}&theme=${theme}"
  width="${width}"
  height="${height}"
  frameborder="0"
  style="border: none; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);"
  allow="clipboard-write"
></iframe>`;

  const copyCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/html;charset=utf-8," + encodeURIComponent(embedCode));
    element.setAttribute("download", "wheeloname-embed.html");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Code downloaded!");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Code size={32} className="text-indigo-600" />
              <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Embed Wheeloname
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Add a spin wheel to your website, blog, or app. Get automatic backlinks and increase engagement!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Configuration */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
                <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Configuration
                </h2>

                {/* Wheel ID */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Wheel ID</label>
                  <input
                    type="text"
                    value={wheelId}
                    onChange={(e) => setWheelId(e.target.value)}
                    placeholder="Enter wheel ID"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all font-medium"
                  />
                  <p className="text-xs text-gray-500 mt-1">💡 Use your saved wheel ID or create a new one</p>
                </div>

                {/* Width */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Width (px)</label>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min="300"
                      max="800"
                      value={width}
                      onChange={(e) => setWidth(parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <input
                      type="number"
                      min="300"
                      max="800"
                      value={width}
                      onChange={(e) => setWidth(parseInt(e.target.value) || 500)}
                      className="w-20 px-3 py-2 rounded-lg border-2 border-gray-200 text-sm font-bold"
                    />
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Height (px)</label>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min="300"
                      max="800"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <input
                      type="number"
                      min="300"
                      max="800"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value) || 500)}
                      className="w-20 px-3 py-2 rounded-lg border-2 border-gray-200 text-sm font-bold"
                    />
                  </div>
                </div>

                {/* Theme */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Theme</label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all font-medium"
                  >
                    <option value="default">Default</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="colorful">Colorful</option>
                    <option value="minimal">Minimal</option>
                    <option value="vibrant">Vibrant</option>
                  </select>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl border-2 border-indigo-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  📋 How to Embed
                </h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-700 flex-shrink-0">1.</span>
                    <span>Copy the embed code below</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-700 flex-shrink-0">2.</span>
                    <span>Paste into your website HTML or CMS</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-700 flex-shrink-0">3.</span>
                    <span>Customize the wheel ID and dimensions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-700 flex-shrink-0">4.</span>
                    <span>Your wheel will appear on your site!</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Code & Preview */}
            <div className="space-y-6">
              {/* Embed Code */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Embed Code
                </h2>

                <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-gray-100 overflow-x-auto max-h-48 overflow-y-auto">
                  {embedCode}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={copyCode}
                    className="flex-1 py-2.5 rounded-xl font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Copy size={16} />
                    {copied ? "Copied!" : "Copy Code"}
                  </button>
                  <button
                    onClick={downloadCode}
                    className="flex-1 py-2.5 rounded-xl font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Preview
                </h2>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center min-h-64 border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-600">
                    <p className="font-semibold mb-2">Preview will appear here</p>
                    <p className="text-sm">Size: {width}px × {height}px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl border-2 border-indigo-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              ✨ Benefits of Embedding
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">🔗 Automatic Backlinks</p>
                <p className="text-sm text-gray-700">Every embedded wheel links back to Wheeloname, boosting your SEO.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">📈 Increased Engagement</p>
                <p className="text-sm text-gray-700">Interactive wheels keep visitors on your site longer.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">🎨 Fully Customizable</p>
                <p className="text-sm text-gray-700">Match your site's theme with color and size options.</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Popular Use Cases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "📚 Educational Blogs", desc: "Add interactive wheels to teaching resources" },
                { title: "🎮 Gaming Sites", desc: "Embed wheels for game mechanics and randomization" },
                { title: "🎉 Event Websites", desc: "Use wheels for giveaways and contests" },
                { title: "💼 Business Tools", desc: "Integrate into productivity and decision-making apps" },
                { title: "🎨 Portfolio Sites", desc: "Showcase interactive design capabilities" },
                { title: "📱 Mobile Apps", desc: "Embed via WebView for native apps" },
              ].map((useCase, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="font-bold text-gray-900 mb-1">{useCase.title}</p>
                  <p className="text-sm text-gray-600">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
