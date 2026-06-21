import Header from "@/components/Header";
import { Link } from "wouter";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

export default function BlogPostTeamBuilding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-8">
          <span className="text-7xl">👥</span>
        </div>

        <div className="flex flex-wrap gap-4 items-center mb-4">
          <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Team Building</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Clock size={14} /> 7 min read</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Calendar size={14} /> June 3, 2026</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><User size={14} /> Wheeloname Team</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Team Building Activities with Spin Wheels: A Practical Guide for Managers
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Team building has a reputation problem. Mention it in a meeting and you'll get polite nods followed by quiet dread. The issue is usually not the intention behind team building — it's the predictability. The same icebreaker questions, the same arbitrary group assignments, the same people gravitating to their usual clusters.
          </p>
          <p>
            Adding a spin wheel to your team building toolkit doesn't magically solve all of this, but it does solve a specific, underrated problem: the moment of assignment. How teams get formed and how activities get chosen shapes how people engage with everything that follows. This guide shows you how to use Wheeloname to make that moment fair, fast, and actually enjoyable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">The Problem with Manual Group Formation</h2>
          <p>
            When a facilitator manually assigns teams, the group watches closely for evidence of favouritism or awkward pairings. When people self-select, cliques form immediately. When it's alphabetical, it's predictable and impersonal. None of these methods signal that the process is genuinely random.
          </p>
          <p>
            A visible spin wheel resolves all of this. The names go in, the wheel spins in front of everyone, and the result is undeniable. No one can claim they were intentionally grouped with someone they clash with — the wheel did it. This small shift in responsibility (from the facilitator to the wheel) reduces social friction and gets people into their groups faster.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Practical Activities Using Spin Wheels</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Random Team Formation</h3>
          <p>
            Use Wheeloname's team division feature. Enter all participant names, specify how many teams you need, and the tool splits them automatically into balanced groups. This takes about 30 seconds and can happen live on a projected screen so everyone watches their own assignment happen in real time.
          </p>
          <p>
            For larger events (20+ people), spin out teams sequentially: first spin assigns the team captains, then each remaining name is spun into teams round-robin style. The animation keeps the energy up during what could otherwise be a slow administrative moment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Icebreaker Question Wheel</h3>
          <p>
            Create a wheel of icebreaker questions: "What's one skill you have outside work?", "Describe your ideal Sunday in three words", "What's a project you're proud of that had nothing to do with your job?". Spin the wheel to select a question, then spin a separate wheel of participant names to choose who answers. This creates a structured-but-unpredictable icebreaker format that feels more like a game than an exercise.
          </p>
          <p>
            Build 15–20 questions so the wheel varies between sessions. Save it as "Icebreaker — [Team Name]" and reuse it across multiple meetings.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Activity Picker for Workshops</h3>
          <p>
            Have three or four workshop modules planned but want to let the group decide the order? Add them to a wheel. The team decides collectively to spin, which gives them ownership over the session structure while you maintain control of the overall agenda. This works well for longer training days where energy management matters and giving people choice increases buy-in.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Role Assignment for Simulations</h3>
          <p>
            Business simulations and role-play exercises require assigning characters or departments to participants. Spin the wheel to allocate roles randomly. This is especially useful for conflict resolution training — people are less likely to be defensive about their assigned position if they know they didn't choose it.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Presentation Order Selector</h3>
          <p>
            When teams need to present their work, nobody wants to go first. Spinning a wheel to determine presentation order eliminates the awkward silence and the negotiation that goes with it. It's fair, fast, and mildly entertaining — a small moment of levity before a high-stakes activity.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6. Prize and Recognition Wheel</h3>
          <p>
            At the end of a workshop or quarter, use a spin wheel for recognition. Create a wheel of team achievements or accomplishments from the period (not individual names — team-level recognition avoids hierarchy tensions) and spin to decide which gets celebrated in the monthly all-hands. Alternatively, for individual recognition events, use the wheel to select who gets to choose a prize from a pre-approved list.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Remote and Hybrid Teams</h2>
          <p>
            Spin wheels work especially well for remote teams because they're digital by nature. Share your screen during a video call, open Wheeloname, and the whole team watches the wheel spin together. This creates a shared moment — a small, genuine piece of collective experience — which is exactly what remote team building struggles to manufacture.
          </p>
          <p>
            For asynchronous teams across time zones, use Wheeloname's shareable link feature to share a pre-built wheel and ask team members to record themselves spinning it. Compile the clips into a brief video and share with the team. It's a low-effort, engaging way to involve distributed team members in group activities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Designing Wheels That Encourage Participation</h2>
          <p>
            A well-designed wheel matters. Here are a few principles:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Keep entries concise.</strong> Long text truncates on the wheel and becomes hard to read when it stops. First names only for people, short phrases for activities.</li>
            <li><strong>Limit entries for legibility.</strong> Wheels with more than 20 entries become visually cluttered. For very large groups, spin in rounds — first round picks team captains, subsequent rounds assign remaining members.</li>
            <li><strong>Use the sound effects.</strong> The ticking animation and the fanfare when the wheel lands make the reveal feel like an event. Don't mute it.</li>
            <li><strong>Allow the group to re-spin once.</strong> If someone just returned from parental leave and lands on a highly social icebreaker they're not comfortable with, a single "pass" option keeps the tone inclusive. Build this into your facilitator notes, not the wheel itself.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">What Makes This Different from Just Using a Randomiser</h2>
          <p>
            Any random number generator could pick a name. The difference with a visible spin wheel is the experience of the selection. The anticipation as the wheel slows, the moment of suspense, the reaction when it lands — these micro-moments of shared experience are exactly what team building is trying to create. A random number generator produces a result. A spin wheel produces a moment.
          </p>
          <p>
            That distinction sounds small. In practice, it changes how people engage with the activity that follows. Starting with a genuine shared moment — even a brief one — raises the energy in the room and signals that the session ahead will be different from a standard meeting.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Getting Started</h2>
          <p>
            Build your first team wheel before your next session. Add your team members' names, save it, and use it to open the meeting. The first spin usually generates a small but genuine reaction — a laugh, an "oh no!", a cheer — and that reaction is the beginning of the engagement you're trying to build.
          </p>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 text-center">
          <h3 className="text-xl font-bold mb-3">Build your team wheel now</h3>
          <p className="text-gray-600 mb-5">Free, instant, and ready to share — no sign-up required.</p>
          <Link href="/wheel/new">
            <button className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md transition-all">
              Create a Team Wheel
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
