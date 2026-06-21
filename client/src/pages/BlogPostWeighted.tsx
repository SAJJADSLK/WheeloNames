import Header from "@/components/Header";
import { Link } from "wouter";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

export default function BlogPostWeighted() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-8">
          <span className="text-7xl">⚖️</span>
        </div>

        <div className="flex flex-wrap gap-4 items-center mb-4">
          <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Advanced</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Clock size={14} /> 10 min read</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Calendar size={14} /> June 1, 2026</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><User size={14} /> Wheeloname Team</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Weighted Spin Wheels Explained: Control Probability Without Losing Fairness
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            A standard spin wheel gives every entry the same chance of winning. That's the right tool for most situations — a class raffle, a team random picker, a simple lunch decision. But sometimes equal probability isn't the right model for your situation. That's where weighted entries come in.
          </p>
          <p>
            Weighted spin wheels let you assign different probabilities to different outcomes, giving some entries a larger slice of the wheel than others. This guide explains how weighting works, when to use it, and how to set it up in Wheeloname.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">How Weighted Entries Work</h2>
          <p>
            Think of the wheel as a pie. In an unweighted wheel, every entry gets an equal-sized slice. In a weighted wheel, the slices are sized proportionally to each entry's weight.
          </p>
          <p>
            If you have three entries — A with weight 1, B with weight 2, and C with weight 3 — the total weight is 6. Entry A occupies 1/6 of the wheel (about 17%), B occupies 2/6 (33%), and C occupies 3/6 (50%). The wheel spins randomly across the full 360 degrees, but C has three times the probability of landing as A.
          </p>
          <p>
            The weights don't have to add to any particular number. What matters is the ratio between them. Weights of 1, 2, 3 produce the same probabilities as weights of 10, 20, 30 — the proportions are identical.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">When to Use Weighted Entries</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Raffle Tickets and Multi-Entry Systems</h3>
          <p>
            The most common use case is a raffle where participants can earn multiple entries. A charity fundraiser might give one raffle entry per ticket purchased. Instead of entering "Maria" five times and "James" once, assign Maria a weight of 5 and James a weight of 1. The result is identical, but the wheel stays clean, readable, and easier to manage.
          </p>
          <p>
            This also helps with social media giveaways that reward multiple actions. "Follow us" gives one entry, "Comment" gives a second, "Share" gives a third. Assign cumulative weights to each participant based on their completed actions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Differentiated Classroom Activities</h3>
          <p>
            Teachers using random question selection can weight questions by difficulty. Easy review questions get a weight of 3, medium questions a weight of 2, and challenging extension questions a weight of 1. The result is a wheel that is statistically more likely to land on accessible questions — useful for mixed-ability classes where you want to include harder content without it dominating.
          </p>
          <p>
            The same approach works for student selection. If you're tracking participation and some students haven't been called on recently, temporarily increase their weight to give them higher probability — without making anyone feel singled out.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Game Design and Probability Simulations</h3>
          <p>
            Game designers and educators teaching probability can use weighted wheels to demonstrate how different probability distributions work. Create a wheel with entries weighted to match a biased coin (60/40), a loaded die, or a card draw from a non-standard deck. Students can observe the distribution across multiple spins and see how probability manifests over repeated trials.
          </p>
          <p>
            This is particularly effective for teaching the difference between expected probability and observed frequency — two concepts students often conflate. The wheel might be set 70% to outcome A and 30% to outcome B, but in any 10 spins the actual results may vary considerably. Logging results across 50 or 100 spins makes the convergence toward expected probability visible.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Loot Boxes and Reward Tables</h3>
          <p>
            Game developers building reward systems, loot box mechanics, or random item tables often use weighted probability to match their game's design intent. A weapon drop wheel might give common items a weight of 100, rare items a weight of 10, and legendary items a weight of 1. Wheeloname can serve as a quick prototype tool for testing and visualising these distributions before they're coded into the game.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Resource and Task Allocation</h3>
          <p>
            When allocating tasks or resources where workload differences need to be reflected in selection probability, weights allow for this calibration. A team of five where two members have half-time availability can be represented with full-time members at weight 2 and part-time members at weight 1 — so the random task assignment reflects capacity without the manager making constant manual adjustments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Setting Up Weighted Entries in Wheeloname</h2>
          <p>
            Open the wheel editor and locate the entry list. Next to each entry, there is a weight field. The default is 1 for all entries (equal probability). Change individual values to adjust the distribution.
          </p>
          <p>
            A few practical tips for setup:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Use small, meaningful ratios.</strong> Weights of 1, 2, and 3 are easier to reason about than 100, 200, and 300. Keep the numbers small enough that you can mentally verify the intended distribution.</li>
            <li><strong>Verify the visual distribution.</strong> After setting weights, look at the wheel. The slice sizes should match your intended probabilities. If an entry looks far larger or smaller than expected, check the weight value.</li>
            <li><strong>Document your weights.</strong> If you're running a recurring event with weighted entries, note the weights somewhere external (a spreadsheet, a document). This creates an auditable record if anyone questions the fairness of the draw.</li>
            <li><strong>Be transparent about weighting when it matters.</strong> If participants know entries are being weighted, disclose it. "Entries are weighted by number of tickets purchased" is a fair disclosure. Secretly weighting a public raffle against the rules of that raffle is a different matter entirely.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Weighted vs. Unweighted: Choosing the Right Approach</h2>
          <p>
            Most everyday uses of a spin wheel don't need weighting. When the goal is simple, transparent randomness — pick a winner from a list of equals, assign a task from a group of peers, choose a restaurant from a shortlist — unweighted wheels are simpler and harder to question.
          </p>
          <p>
            Reach for weighted entries when you have a genuine reason to give some outcomes different probability. The key word is genuine. Weighting should reflect a real-world factor (ticket count, contribution level, availability) that participants would recognise as a legitimate reason for differential probability — not an undisclosed thumb on the scale.
          </p>
          <p>
            When in doubt, default to equal weights and add weighting only when you can clearly explain why it's there.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Advanced Pattern: Sequential Weighted Draws</h2>
          <p>
            For complex selection scenarios — picking a ranked list of outcomes, selecting a top three from a weighted pool — you can run sequential spins. After each spin, remove the winning entry (or reduce its weight significantly) and spin again. This produces a ranked selection that reflects the weight distribution at each stage.
          </p>
          <p>
            Example: a school picking three students for a trip from a weighted pool of nominees. First spin picks the top choice. Remove that student, re-spin for second place, remove and re-spin for third. Each student's probability at each stage is proportional to their remaining weight relative to the remaining pool — a genuinely weighted sequential draw.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Conclusion</h2>
          <p>
            Weighted spin wheels give you fine-grained control over probability without sacrificing the visual transparency that makes random selection trustworthy. The wheel still spins. The result is still random. The difference is that the randomness is calibrated to reflect factors that matter in your specific context.
          </p>
          <p>
            Use that control thoughtfully, disclose it when relevant, and you have a selection tool that is both more flexible and more honest than equal-weight randomness alone.
          </p>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 text-center">
          <h3 className="text-xl font-bold mb-3">Try weighted entries yourself</h3>
          <p className="text-gray-600 mb-5">Create a wheel, adjust the weights, and see the distribution change in real time.</p>
          <Link href="/wheel/new">
            <button className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md transition-all">
              Build a Weighted Wheel
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
