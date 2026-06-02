/* =============================================================
   WheelPage — Wheeloname Clone
   Full interactive wheel spinner with advanced features
   - Local storage persistence
   - Custom themes
   - Winner history
   - Import/export CSV
   - Full-screen mode
   - Share functionality
   - SOUND EFFECTS
   ============================================================= */

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import ThemeSelector, { Theme } from "@/components/ThemeSelector";
import WinnerCelebration from "@/components/WinnerCelebration";
import { Plus, Trash2, RotateCcw, Copy, Check, Maximize2, Download, History, Volume2, VolumeX } from "lucide-react";
import { toast } from "sonner";
import { useWheelStorage } from "@/hooks/useWheelStorage";
import { useWinnerHistory } from "@/hooks/useWinnerHistory";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const DEFAULT_COLORS = [
  "#22d3ee", "#f97316", "#a855f7", "#22c55e",
  "#ec4899", "#3b82f6", "#eab308", "#ef4444",
  "#14b8a6", "#f59e0b", "#8b5cf6", "#10b981",
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
  const s = polarToCartesian(cx, cy, r, end);
  const e = polarToCartesian(cx, cy, r, start);
  const large = end - start <= 180 ? "0" : "1";
  return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${large} 0 ${e.x} ${e.y} Z`;
}

export default function WheelPage() {
  const [entries, setEntries] = useState<string[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [wheelTitle, setWheelTitle] = useState("My Wheel");
  const [fullScreen, setFullScreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [wheelColors, setWheelColors] = useState(DEFAULT_COLORS);
  const [showCelebration, setShowCelebration] = useState(false);
  const [wheelId] = useState(() => new URLSearchParams(window.location.search).get("wheel") || `wheel_${Date.now()}`);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [removeWinnerMode, setRemoveWinnerMode] = useState(false);
  const [selectedWinners, setSelectedWinners] = useState<Set<string>>(new Set());
  
  const { saveWheel, updateWheel, getWheel } = useWheelStorage();
  const { addWinner, getWheelHistory, getWinnerStats } = useWinnerHistory();
  const { soundEnabled, toggleSound, playSpinTicks, playFanfare } = useSoundEffects();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLInputElement>(null);

  const size = fullScreen ? 600 : 450;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 6;
  const innerR = size * 0.2;
  const segAngle = entries.length > 0 ? 360 / entries.length : 360;

  // Load wheel from URL params if shared
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const wheelData = params.get("wheel");
    if (wheelData) {
      try {
        const decoded = JSON.parse(atob(wheelData));
        setWheelTitle(decoded.title);
        setEntries(decoded.entries);
      } catch (e) {
        console.error("Failed to decode shared wheel:", e);
      }
    }
  }, []);

  const handleSpin = () => {
    if (spinning || entries.length < 2) {
      if (entries.length < 2) toast.error("Add at least 2 entries to spin!");
      return;
    }
    setSpinning(true);
    setResult(null);

    // Play tick sounds during spin
    if (soundEnabled) {
      playSpinTicks(3500);
    }

    const extra = 6 + Math.floor(Math.random() * 6);
    const rand = Math.random() * 360;
    const total = rotation + extra * 360 + rand;
    setRotation(total);

    setTimeout(() => {
      setSpinning(false);
      const normalizedRotation = ((total % 360) + 360) % 360;
      const pointerSegmentIndex = Math.floor(((360 - normalizedRotation) % 360) / segAngle) % entries.length;
      let winner = entries[pointerSegmentIndex];
      
      // Remove winner mode: track selected entries
      if (removeWinnerMode) {
        const newSelected = new Set(selectedWinners);
        newSelected.add(winner);
        setSelectedWinners(newSelected);
        
        if (newSelected.size === entries.length) {
          toast.info("All entries selected! Resetting...");
          setSelectedWinners(new Set());
        }
      }
      
      setResult(winner);
      addWinner(winner, wheelId);
      setShowCelebration(true);
      
      // Play fanfare on winner
      if (soundEnabled) {
        playFanfare();
      }
      
      toast.success(`🎉 Winner: ${winner}`);
    }, 3500);
  };

  const addEntry = () => {
    const trimmed = newEntry.trim();
    if (!trimmed) return;
    if (entries.includes(trimmed)) {
      toast.error("Entry already exists");
      return;
    }
    setEntries((prev) => [...prev, trimmed]);
    setNewEntry("");
  };

  const removeEntry = (idx: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== idx));
    setResult(null);
    setShowCelebration(false);
  };

  const resetWheel = () => {
    setEntries([]);
    setNewEntry("");
    setResult(null);
    setRotation(0);
    setShowCelebration(false);
    setSelectedWinners(new Set());
    toast.success("Wheel reset");
  };

  const generateShareLink = async () => {
    if (entries.length < 2) {
      toast.error("Add at least 2 entries to share!");
      return;
    }
    
    const wheelData = btoa(JSON.stringify({ title: wheelTitle, entries }));
    const shortId = Math.random().toString(36).substring(2, 10);
    const shortUrl = `${window.location.origin}/w/${shortId}`;
    
    const shortLinks = JSON.parse(localStorage.getItem('wheeloname_short_links') || '{}');
    shortLinks[shortId] = { wheelData, createdAt: Date.now(), title: wheelTitle };
    localStorage.setItem('wheeloname_short_links', JSON.stringify(shortLinks));
    
    setShareLink(shortUrl);
    setShowShareModal(true);
  };
  
  const copyShareLink = () => {
    if (shareLink) {
      navigator.clipboard.writeText(shareLink);
      setCopied(true);
      toast.success("Share link copied!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareWheel = () => {
    const wheelData = btoa(JSON.stringify({ title: wheelTitle, entries }));
    const shareUrl = `${window.location.origin}${window.location.pathname}?wheel=${wheelData}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success("Wheel link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const exportCSV = () => {
    const csv = entries.join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${wheelTitle}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Wheel exported as CSV!");
  };

  const importCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const newEntries = content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !line.startsWith("#"));

      if (newEntries.length > 0) {
        setEntries(newEntries);
        toast.success(`Imported ${newEntries.length} entries!`);
      } else {
        toast.error("No valid entries found in file");
      }
    };
    reader.readAsText(file);
  };

  const importFromGoogleSheets = async () => {
    const sheetUrl = prompt(
      "Paste your Google Sheets CSV export URL:\n\nSteps:\n1. Open your Google Sheet\n2. File → Download → CSV\n3. Paste the download link here",
      ""
    );
    
    if (!sheetUrl) return;
    
    try {
      toast.loading("Importing from Google Sheets...");
      const response = await fetch(sheetUrl);
      const content = await response.text();
      
      const newEntries = content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !line.startsWith("#"));

      if (newEntries.length > 0) {
        setEntries(newEntries);
        toast.success(`Imported ${newEntries.length} entries from Google Sheets!`);
      } else {
        toast.error("No valid entries found");
      }
    } catch (error) {
      toast.error("Failed to import. Make sure the link is public and accessible.");
      console.error("Import error:", error);
    }
  };

  const handleThemeSelect = (theme: Theme) => {
    setWheelColors(theme.colors);
  };

  const wheelHistory = getWheelHistory(wheelId);

  const saveWheelToStorage = () => {
    try {
      saveWheel(wheelTitle, entries);
      toast.success("Wheel saved!");
    } catch (error) {
      console.error("Error saving wheel:", error);
      toast.error("Failed to save wheel");
    }
  };

  if (fullScreen) {
    return (
      <>
        {showCelebration && <WinnerCelebration />}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div
              className="absolute z-10"
              style={{
                top: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "12px solid transparent",
                borderRight: "12px solid transparent",
                borderTop: "22px solid #7c3aed",
                filter: "drop-shadow(0 2px 6px rgba(124,58,237,0.5))",
              }}
            />
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className="drop-shadow-2xl cursor-pointer"
              onClick={handleSpin}
            >
              <g
                style={{
                  transformOrigin: `${cx}px ${cy}px`,
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning ? "transform 3.5s cubic-bezier(0.17, 0.67, 0.12, 1)" : "none",
                }}
              >
                {entries.map((entry, i) => {
                  const start = i * segAngle;
                  const end = start + segAngle;
                  const mid = start + segAngle / 2;
                  const textR = outerR * 0.65;
                  const textPos = polarToCartesian(cx, cy, textR, mid);
                  const color = wheelColors[i % wheelColors.length];
                  return (
                    <g key={i}>
                      <path
                        d={describeArc(cx, cy, outerR, start, end)}
                        fill={color}
                        stroke="white"
                        strokeWidth="2"
                      />
                      {entries.length <= 16 && (
                        <text
                          x={textPos.x}
                          y={textPos.y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize={Math.max(9, Math.min(13, 120 / entries.length))}
                          fontWeight="600"
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                          fill="white"
                          transform={`rotate(${mid}, ${textPos.x}, ${textPos.y})`}
                          style={{ userSelect: "none" }}
                        >
                          {entry.length > 10 ? entry.slice(0, 9) + "…" : entry}
                        </text>
                      )}
                    </g>
                  );
                })}
                <circle cx={cx} cy={cy} r={innerR} fill="white" />
              </g>
              <circle cx={cx} cy={cy} r={innerR - 2} fill="white" stroke="#e5e7eb" strokeWidth="2" />
              <text
                x={cx}
                y={cy + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={22}
                fontWeight="800"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fill={spinning ? "#a855f7" : "#7c3aed"}
                style={{ userSelect: "none" }}
              >
                {spinning ? "…" : result ? "Again!" : "Spin!"}
              </text>
            </svg>
          </div>

          <button
            onClick={() => setFullScreen(false)}
            className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
          >
            Exit Fullscreen
          </button>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      {showCelebration && <WinnerCelebration />}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wheel Display */}
          <div className="lg:col-span-2 flex flex-col items-center gap-6">
            <div className="text-center">
              <input
                type="text"
                value={wheelTitle}
                onChange={(e) => setWheelTitle(e.target.value)}
                className="text-2xl font-bold text-gray-900 text-center bg-transparent border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 transition-colors w-full"
                placeholder="Click to rename your wheel"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
            </div>

            <div className="relative">
              <div
                className="absolute z-10"
                style={{
                  top: -4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderTop: "22px solid #7c3aed",
                  filter: "drop-shadow(0 2px 6px rgba(124,58,237,0.5))",
                }}
              />
              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="drop-shadow-2xl cursor-pointer"
                onClick={handleSpin}
              >
                <g
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: `rotate(${rotation}deg)`,
                    transition: spinning ? "transform 3.5s cubic-bezier(0.17, 0.67, 0.12, 1)" : "none",
                  }}
                >
                  {entries.map((entry, i) => {
                    const start = i * segAngle;
                    const end = start + segAngle;
                    const mid = start + segAngle / 2;
                    const textR = outerR * 0.65;
                    const textPos = polarToCartesian(cx, cy, textR, mid);
                    const color = wheelColors[i % wheelColors.length];
                    return (
                      <g key={i}>
                        <path
                          d={describeArc(cx, cy, outerR, start, end)}
                          fill={color}
                          stroke="white"
                          strokeWidth="2"
                        />
                        {entries.length <= 16 && (
                          <text
                            x={textPos.x}
                            y={textPos.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={Math.max(9, Math.min(13, 120 / entries.length))}
                            fontWeight="600"
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            fill="white"
                            transform={`rotate(${mid}, ${textPos.x}, ${textPos.y})`}
                            style={{ userSelect: "none" }}
                          >
                            {entry.length > 10 ? entry.slice(0, 9) + "…" : entry}
                          </text>
                        )}
                      </g>
                    );
                  })}
                  <circle cx={cx} cy={cy} r={innerR} fill="white" />
                </g>
                <circle cx={cx} cy={cy} r={innerR - 2} fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text
                  x={cx}
                  y={cy + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={22}
                  fontWeight="800"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fill={spinning ? "#a855f7" : "#7c3aed"}
                  style={{ userSelect: "none" }}
                >
                  {spinning ? "…" : result ? "Again!" : "Spin!"}
                </text>
              </svg>
            </div>

            {result && !spinning && (
              <div className="animate-fade-up bg-white border-2 border-purple-200 rounded-2xl px-8 py-4 shadow-lg text-center">
                <p className="text-xs text-purple-500 font-bold uppercase tracking-widest mb-1">🎉 Winner</p>
                <p className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {result}
                </p>
              </div>
            )}

            <div className="flex gap-2 w-full max-w-xs">
              <button
                onClick={handleSpin}
                disabled={spinning}
                className="flex-1 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {spinning ? "Spinning…" : "Spin!"}
              </button>
              <button
                onClick={() => setFullScreen(true)}
                className="px-4 py-3.5 rounded-xl font-bold text-purple-700 bg-white border border-purple-200 hover:bg-purple-50 shadow-sm transition-all active:scale-95"
                title="Fullscreen mode"
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </div>

          {/* Entry Editor & Controls */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2
                className="text-lg font-bold text-gray-900"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Entries
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={toggleSound}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-600 transition-colors px-2 py-1 rounded-lg hover:bg-purple-50"
                  title={soundEnabled ? "Disable sound" : "Enable sound"}
                >
                  {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
                  {soundEnabled ? "On" : "Off"}
                </button>
                <button
                  onClick={() => setRemoveWinnerMode(!removeWinnerMode)}
                  className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg transition-colors ${
                    removeWinnerMode
                      ? "text-purple-600 bg-purple-50 border border-purple-200"
                      : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                  title="No repeats until all selected"
                >
                  ✓ No Repeat
                </button>
                <button
                  onClick={resetWheel}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-600 transition-colors px-2 py-1 rounded-lg hover:bg-purple-50"
                >
                  <RotateCcw size={13} />
                  Reset
                </button>
              </div>
            </div>

            {/* Theme Selector */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Theme</p>
              <ThemeSelector onThemeSelect={handleThemeSelect} />
            </div>

            {/* Add entry - Wheelofnames style */}
            <div className="mb-5">
              <input
                ref={textareaRef}
                type="text"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addEntry();
                    textareaRef.current?.focus();
                  }
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  const text = e.clipboardData.getData("text");
                  const lines = text.split("\n")
                    .map(line => line.replace(/^\d+\.\s*/, "").trim())
                    .filter(line => line.length > 0);
                  
                  if (lines.length === 0) return;
                  
                  if (lines.length === 1) {
                    setNewEntry(lines[0]);
                    toast.success("Pasted: " + lines[0]);
                  } else {
                    const newEntries = lines.filter(line => !entries.includes(line));
                    setEntries(prev => [...prev, ...newEntries]);
                    setNewEntry("");
                    toast.success(`Added ${newEntries.length} entries`);
                  }
                }}
                placeholder="Type an entry and press Enter (or paste multiple lines)"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all font-medium"
              />
              <p className="text-xs text-gray-500 mt-2 ml-1">💡 Press Enter to add • Paste multiple lines at once</p>
            </div>

            {/* Entries list - Clean display */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Entries ({entries.length})</p>
              </div>
              <div className="space-y-1.5 max-h-56 overflow-y-auto bg-gray-50 rounded-lg p-3 border border-gray-200">
              {entries.map((entry, idx) => (
                <div key={idx} className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group">
                  <span className="text-sm font-medium text-gray-700">{entry}</span>
                  <button
                    onClick={() => removeEntry(idx)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2">
              <button
                onClick={generateShareLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all active:scale-95"
              >
                <Copy size={16} />
                {showShareModal ? "Copy Link" : "Get Share Link"}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={exportCSV}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
                >
                  <Download size={16} />
                  Export CSV
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
                >
                  <Plus size={16} />
                  Import CSV
                </button>
              </div>

              <button
                onClick={importFromGoogleSheets}
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
              >
                Import from Google Sheets
              </button>

              <button
                onClick={saveWheelToStorage}
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all active:scale-95"
              >
                Save Wheel
              </button>

              {wheelHistory.length > 0 && (
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <History size={16} />
                  History ({wheelHistory.length})
                </button>
              )}
            </div>

            {/* Winner history */}
            {showHistory && wheelHistory.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent Winners</p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {wheelHistory.slice(0, 10).map((record, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-purple-50 text-sm">
                      <span className="font-medium text-gray-700">{record.winner}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(record.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        onChange={importCSV}
        className="hidden"
      />

      {showShareModal && shareLink && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Share Your Wheel</h3>
            <p className="text-sm text-gray-600">Send this link to share your wheel:</p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 break-all">
              <code className="text-xs font-mono text-gray-700">{shareLink}</code>
            </div>
            <div className="flex gap-2">
              <button
                onClick={copyShareLink}
                className="flex-1 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all active:scale-95"
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
              <button
                onClick={() => setShowShareModal(false)}
                className="flex-1 py-2.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
