import { useState, useRef } from "react";
import { Users, Plus, Trash2, Download, RotateCcw, Copy } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";

export default function TeamGeneratorPage() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");
  const [numTeams, setNumTeams] = useState(2);
  const [teams, setTeams] = useState<string[][]>([]);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addParticipant = () => {
    const trimmed = newParticipant.trim();
    if (!trimmed) return;
    if (participants.includes(trimmed)) {
      toast.error("Participant already added");
      return;
    }
    setParticipants([...participants, trimmed]);
    setNewParticipant("");
  };

  const removeParticipant = (idx: number) => {
    setParticipants(participants.filter((_, i) => i !== idx));
  };

  const generateTeams = () => {
    if (participants.length < numTeams) {
      toast.error(`Need at least ${numTeams} participants`);
      return;
    }

    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const newTeams: string[][] = Array.from({ length: numTeams }, () => []);

    shuffled.forEach((participant, idx) => {
      newTeams[idx % numTeams].push(participant);
    });

    setTeams(newTeams);
    toast.success("Teams generated!");
  };

  const exportTeams = () => {
    const csv = teams
      .map((team, idx) => `Team ${idx + 1}\n${team.join("\n")}\n`)
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "teams.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Teams exported!");
  };

  const importParticipants = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const newParticipants = content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !line.startsWith("#"));

      if (newParticipants.length > 0) {
        setParticipants(newParticipants);
        toast.success(`Imported ${newParticipants.length} participants!`);
      }
    };
    reader.readAsText(file);
  };

  const copyTeamsToClipboard = () => {
    const text = teams
      .map((team, idx) => `Team ${idx + 1}: ${team.join(", ")}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Teams copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAll = () => {
    setParticipants([]);
    setTeams([]);
    setNewParticipant("");
    setNumTeams(2);
    toast.success("Reset complete");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users size={32} className="text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Team Generator
              </h1>
            </div>
            <p className="text-gray-600">Divide participants into random teams instantly</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Participants Input */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Add Participants
                </h2>

                <div className="space-y-3 mb-4">
                  <input
                    type="text"
                    value={newParticipant}
                    onChange={(e) => setNewParticipant(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addParticipant();
                      }
                    }}
                    onPaste={(e) => {
                      e.preventDefault();
                      const text = e.clipboardData.getData("text");
                      const lines = text
                        .split("\n")
                        .map((line) => line.trim())
                        .filter((line) => line.length > 0);

                      if (lines.length > 1) {
                        const newParticipants = lines.filter((line) => !participants.includes(line));
                        setParticipants([...participants, ...newParticipants]);
                        setNewParticipant("");
                        toast.success(`Added ${newParticipants.length} participants`);
                      } else if (lines.length === 1) {
                        setNewParticipant(lines[0]);
                      }
                    }}
                    placeholder="Type name and press Enter (or paste multiple)"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all font-medium"
                  />
                  <p className="text-xs text-gray-500 ml-1">💡 Press Enter to add • Paste multiple lines at once</p>
                </div>

                {/* Participants List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Participants ({participants.length})</p>
                  </div>
                  <div className="space-y-1.5 max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-3 border border-gray-200">
                    {participants.map((participant, idx) => (
                      <div key={idx} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white hover:bg-gray-50 transition-colors group">
                        <span className="text-sm font-medium text-gray-700">{participant}</span>
                        <button
                          onClick={() => removeParticipant(idx)}
                          className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Import Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                >
                  Import from File
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,.txt"
                  onChange={importParticipants}
                  className="hidden"
                />
              </div>
            </div>

            {/* Team Configuration */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Configuration
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Number of Teams</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setNumTeams(Math.max(2, numTeams - 1))}
                      className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-gray-700"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="2"
                      max="20"
                      value={numTeams}
                      onChange={(e) => setNumTeams(Math.max(2, parseInt(e.target.value) || 2))}
                      className="flex-1 px-3 py-2 rounded-lg border-2 border-gray-200 text-center font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                      onClick={() => setNumTeams(Math.min(20, numTeams + 1))}
                      className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={generateTeams}
                  disabled={participants.length < numTeams}
                  className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  Generate Teams
                </button>

                {teams.length > 0 && (
                  <>
                    <button
                      onClick={copyTeamsToClipboard}
                      className="w-full py-2.5 rounded-xl text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                    >
                      <Copy size={14} className="inline mr-2" />
                      {copied ? "Copied!" : "Copy Teams"}
                    </button>

                    <button
                      onClick={exportTeams}
                      className="w-full py-2.5 rounded-xl text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                    >
                      <Download size={14} className="inline mr-2" />
                      Export CSV
                    </button>

                    <button
                      onClick={resetAll}
                      className="w-full py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <RotateCcw size={14} className="inline mr-2" />
                      Reset All
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Teams Display */}
          {teams.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Generated Teams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teams.map((team, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
                    <h3 className="font-bold text-blue-700 mb-3 text-center">Team {idx + 1}</h3>
                    <div className="space-y-2">
                      {team.map((member, midx) => (
                        <div key={midx} className="bg-white rounded-lg px-3 py-2 text-sm font-medium text-gray-700 text-center">
                          {member}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-3 font-semibold">{team.length} members</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
