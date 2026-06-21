import Header from "@/components/Header";
import { Link } from "wouter";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

export default function BlogPostClassroom() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Hero banner */}
        <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-8">
          <span className="text-7xl">🏫</span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Education</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Clock size={14} /> 5 min read</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Calendar size={14} /> June 5, 2026</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><User size={14} /> Wheeloname Team</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Complete Guide to Using Spin Wheels in Classrooms
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Classroom management is one of the most challenging aspects of teaching. Keeping students engaged, ensuring fair participation, and making quick decisions about who answers a question, who leads a group, or which topic gets discussed next — all of these micro-decisions add up over a school day. A digital spin wheel can solve many of them at once.
          </p>
          <p>
            This guide walks you through exactly how to use Wheeloname in your classroom, with practical examples for different grade levels and subjects.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Why Random Selection Works in Education</h2>
          <p>
            Research in educational psychology consistently shows that students pay more attention when they know they could be called on at any moment. When selection is predictable — going down rows, alphabetical order — students mentally "opt out" until their turn approaches. A visible, randomised spin wheel changes that dynamic entirely.
          </p>
          <p>
            There is also a fairness dimension. Students are acutely sensitive to perceived favouritism. When the wheel picks the next presenter, no one can claim the teacher has a favourite. The decision is transparent, public, and undeniable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Five Practical Uses for Classroom Spin Wheels</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Random Student Selection</h3>
          <p>
            This is the most common use. Add every student's name to a wheel at the start of term. When you need a volunteer, a reader, or someone to answer a question, spin the wheel. Students quickly learn to stay ready. Many teachers report a noticeable increase in attentiveness within the first week of introducing a spin wheel.
          </p>
          <p>
            Tip: use Wheeloname's "remove after spin" option so each student gets called once before anyone is called twice. This ensures equal participation across the whole class.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Topic and Prompt Selection</h3>
          <p>
            Create a wheel with writing prompts, discussion topics, or revision questions. Instead of the teacher choosing what to review, the wheel decides. This removes the "we always do the easy stuff" complaint and keeps revision sessions unpredictable and thorough.
          </p>
          <p>
            Example wheels to build: "This week's vocabulary words", "Chapter review questions", "Discussion debate topics", "Creative writing scenarios".
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Team and Group Division</h3>
          <p>
            Forming groups fairly is time-consuming and socially fraught. Students gravitate to their friends, leaving some individuals isolated. With Wheeloname's team division feature, you add all student names and specify the number of groups. The tool automatically creates balanced teams at random. The process is transparent — students see their names being divided in real time.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Classroom Jobs and Responsibilities</h3>
          <p>
            Many primary classrooms operate with weekly jobs: line leader, board eraser, plant waterer, attendance taker. Instead of maintaining a rotating chart (which is always slightly confusing), build a wheel of student names and spin it each Monday. Jobs are assigned instantly, and students love the ritual.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Gamified Learning Activities</h3>
          <p>
            Spin wheels add a game-show element to review sessions. Create a wheel of point values (100, 200, 300, Bonus Round, Lose a Turn) and pair it with quiz questions. Students answer a question correctly, spin for points, and the lesson becomes genuinely exciting. This format works particularly well in the last 15 minutes of a class when energy typically drops.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Setting Up Your First Classroom Wheel</h2>
          <p>
            Getting started takes under two minutes. Navigate to Wheeloname, click "Create Wheel," and type or paste your student names. Each name becomes a segment. Hit spin and the wheel animates with a satisfying tick-tick-tick before landing on a result.
          </p>
          <p>
            Save the wheel with a name like "Period 3 — English" and it will be available every time you open the site, with no account or login required. Build separate wheels for different classes or different purposes, and switch between them in seconds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Tips for Making It Work Long-Term</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Project it on the board.</strong> The spin wheel only creates its engagement magic when students can see it. A shared screen or projector is essential.</li>
            <li><strong>Build the ritual.</strong> Use the same wheel at the same points in the lesson. Students start to anticipate the spin, which itself generates attention.</li>
            <li><strong>Let students create wheels too.</strong> For older students, letting them build wheels for peer review pairings or group project topics gives them ownership of the process.</li>
            <li><strong>Use weighted entries for differentiation.</strong> If you have students working at different levels, you can weight the wheel so that harder questions more often go to advanced students — without anyone knowing the wheel is weighted.</li>
            <li><strong>Reset the wheel when needed.</strong> If a student is absent, temporarily remove their name. Add it back when they return. The wheel should always reflect who is actually in the room.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Common Questions from Teachers</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">What if the same student gets picked repeatedly?</h3>
          <p>
            Enable the "remove after spin" toggle. This ensures the wheel removes each name after it lands, so every student is called before anyone is called a second time. You can also reset the wheel to its full list at the start of each week or each class.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Is it distracting for students?</h3>
          <p>
            Initially, yes — the novelty creates excitement. Within a week or two it becomes a normal classroom tool and the excitement settles into engaged attention rather than distraction. Most teachers report the brief spin animation is far less disruptive than the time typically spent deciding who to call on.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Can I use it without an internet connection?</h3>
          <p>
            Yes. Wheeloname is a Progressive Web App that works offline once loaded. Install it on your classroom device and your saved wheels will work even without a network connection — useful for schools with unreliable Wi-Fi.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Getting Started</h2>
          <p>
            A spin wheel is one of the simplest, cheapest classroom interventions available. It takes two minutes to set up, costs nothing, and the engagement benefits are immediate. If you haven't tried it yet, build your first wheel today and spin it in tomorrow's lesson.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 text-center">
          <h3 className="text-xl font-bold mb-3">Ready to try it in your classroom?</h3>
          <p className="text-gray-600 mb-5">Create your first class wheel in under 2 minutes — free, no sign-up needed.</p>
          <Link href="/wheel/new">
            <button className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md transition-all">
              Create a Classroom Wheel
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
