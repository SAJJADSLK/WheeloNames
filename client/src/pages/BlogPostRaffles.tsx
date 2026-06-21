import Header from "@/components/Header";
import { Link } from "wouter";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

export default function BlogPostRaffles() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-8">
          <span className="text-7xl">🎁</span>
        </div>

        <div className="flex flex-wrap gap-4 items-center mb-4">
          <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Events</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Clock size={14} /> 6 min read</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><Calendar size={14} /> June 4, 2026</span>
          <span className="flex items-center gap-1 text-sm text-gray-500"><User size={14} /> Wheeloname Team</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          How to Run Fair Raffles and Giveaways That People Actually Trust
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            A raffle only works if people believe it is fair. The moment someone suspects the result was predetermined — or even just feels that way — the goodwill a giveaway was meant to generate evaporates. Whether you're running a charity raffle, a social media giveaway, or a prize draw at a corporate event, transparency is everything.
          </p>
          <p>
            Digital spin wheels have become the go-to tool for public-facing draws precisely because they make the selection visible. This guide explains how to run raffles that are not just fair, but provably fair.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Why Online Raffles Fail — and How to Fix Them</h2>
          <p>
            Most online giveaway controversies follow a predictable pattern. An organiser announces a winner, and commenters immediately ask: "How was the winner chosen?" If the answer is vague — "randomly selected," "our team picked" — suspicion fills the gap. Even if the selection was completely fair, the lack of a verifiable process undermines trust.
          </p>
          <p>
            The fix is simple: make the selection process visible and documented. A spin wheel drawn on screen and recorded — or shown live — removes all ambiguity. Everyone can see the names going in, everyone can watch the wheel spin, and the result is undeniable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Step-by-Step: Running a Transparent Raffle</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Step 1: Collect Entries</h3>
          <p>
            For social media giveaways, common entry methods include following an account, commenting on a post, tagging a friend, or sharing content. Collect all valid entries into a list — a simple spreadsheet or text file works fine. Remove duplicate entries and any that don't meet your eligibility criteria before moving forward. Transparency starts here: if you have clear, published rules, you can point to them when explaining why certain entries were excluded.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Step 2: Build Your Wheel</h3>
          <p>
            Open Wheeloname and create a new wheel. Add each entrant's name as a separate entry. For large lists (hundreds of names), use the CSV import feature — paste your list directly and all entries populate automatically. Give the wheel a title like "Prize Draw — June 2026" so it's clearly labelled in any recording.
          </p>
          <p>
            Important: if you want some entries to count more than once (for example, someone who both followed and commented), use the weighted entries feature to give them proportionally higher probability rather than entering their name multiple times.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Step 3: Record the Draw</h3>
          <p>
            For public giveaways, record your screen while spinning the wheel. Most operating systems have built-in screen recording, or use a free tool like OBS. Alternatively, go live on your social media platform of choice so followers can watch in real time. The combination of all names being visible on the wheel and the spin happening live is the gold standard for raffle transparency.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Step 4: Announce and Verify</h3>
          <p>
            Post the recording or screenshot alongside the winner announcement. If anyone asks how the winner was chosen, you have verifiable proof. Contact the winner promptly and give them a reasonable deadline to claim their prize — 48 to 72 hours is standard. If they don't respond, you can re-spin for a new winner.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Running a Raffle at a Live Event</h2>
          <p>
            In-person prize draws have their own dynamics. The spin wheel works especially well here because the animation is engaging to watch as a crowd. Project the wheel on a large screen, add the names of everyone with a raffle ticket, and let someone from the audience spin it. The physical involvement of an audience member and the visible randomness of the wheel make the result feel genuinely fair.
          </p>
          <p>
            For charity events or formal fundraisers, you may want to document the draw in writing as well. Note the total number of entries, the time and date of the draw, and who was present. This creates a paper trail alongside the visual record.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Using Weighted Entries for Tiered Raffles</h2>
          <p>
            Some raffles offer multiple ways to earn tickets. A charity gala might award one ticket for a base donation and an additional ticket for each extra amount donated. Rather than entering "John Smith" five times into the wheel, use weighted entries: assign John a weight of 5, while other entrants have a weight of 1. The outcome is identical — John has five times the chance — but the wheel stays clean and readable.
          </p>
          <p>
            Weighted entries are also useful for sponsor recognition. If a major sponsor is sponsoring the event and gets a "guaranteed finalist" slot, you can give them a higher weight without making the draw look rigged, because the weighting is openly disclosed in your published rules.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Legal Considerations</h2>
          <p>
            Raffle regulations vary significantly by country, state, and prize value. In many jurisdictions, raffles where participants pay for tickets are classified as lotteries and require licensing. "No purchase necessary" giveaways typically face fewer restrictions but still have rules around disclosure and winner announcement.
          </p>
          <p>
            Before running a raffle, verify the rules in your region. For significant prizes (over $600 in the US, for example), there may be tax reporting requirements. Consult a local legal resource if you're unsure — this guide is general information and does not constitute legal advice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Common Mistakes to Avoid</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Vague entry rules.</strong> Define clearly what qualifies as an entry before opening registrations. Ambiguous rules lead to disputes about who is eligible.</li>
            <li><strong>No winner announcement timeline.</strong> Announce when and how the winner will be notified. Silence after the draw creates speculation.</li>
            <li><strong>Manual selection for large draws.</strong> Picking "randomly" from a spreadsheet is neither transparent nor truly random. Use a tool designed for it.</li>
            <li><strong>Forgetting to check for duplicate entries.</strong> On social platforms, the same person may comment multiple times. Decide your policy in advance and apply it consistently.</li>
            <li><strong>No unclaimed prize policy.</strong> What happens if the winner doesn't respond? State this in your rules so you're not stuck if they go quiet.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Building Trust Through Consistency</h2>
          <p>
            The most effective thing you can do for your raffle's credibility is run them the same way every time. When your audience knows that every giveaway uses the same visible, documented process, trust accumulates over time. Regular participants stop questioning the fairness of individual draws because they've seen the process work reliably before.
          </p>
          <p>
            Save your raffle wheel in Wheeloname after each draw. The next time you run one, you can start from the same wheel, update the names, and spin again — keeping your process consistent without rebuilding from scratch.
          </p>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 text-center">
          <h3 className="text-xl font-bold mb-3">Run your next raffle with Wheeloname</h3>
          <p className="text-gray-600 mb-5">Add your entries, spin publicly, and share the result. Free and instant.</p>
          <Link href="/wheel/new">
            <button className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md transition-all">
              Start Your Raffle Wheel
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
