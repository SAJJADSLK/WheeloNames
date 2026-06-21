import Header from "@/components/Header";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    slug: "/blog/spin-wheels-in-classrooms",
    title: "Complete Guide to Using Spin Wheels in Classrooms",
    excerpt: "From picking random students to running gamified reviews — a practical guide to using spin wheels for classroom management and engagement.",
    date: "June 5, 2026",
    author: "Wheeloname Team",
    category: "Education",
    readTime: "5 min read",
    emoji: "🏫",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    slug: "/blog/how-to-run-fair-raffles",
    title: "How to Run Fair Raffles and Giveaways That People Actually Trust",
    excerpt: "Transparency is everything in a raffle. Here's how to use a visible spin wheel to make your draw provably fair — for social media giveaways and live events.",
    date: "June 4, 2026",
    author: "Wheeloname Team",
    category: "Events",
    readTime: "6 min read",
    emoji: "🎁",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    slug: "/blog/team-building-with-spin-wheels",
    title: "Team Building Activities with Spin Wheels: A Practical Guide for Managers",
    excerpt: "A spin wheel won't fix team dynamics on its own — but it can make group formation, icebreakers, and activity selection genuinely fair and surprisingly fun.",
    date: "June 3, 2026",
    author: "Wheeloname Team",
    category: "Team Building",
    readTime: "7 min read",
    emoji: "👥",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 4,
    slug: "/blog/psychology-of-random-selection",
    title: "The Psychology of Random Selection: Why Fairness Feels Better Than Control",
    excerpt: "Why do people trust a spinning wheel more than a human's 'random' choice? The answer reveals something fundamental about bias, fairness, and how we make decisions.",
    date: "June 2, 2026",
    author: "Wheeloname Team",
    category: "Psychology",
    readTime: "8 min read",
    emoji: "🧠",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    slug: "/blog/weighted-spin-wheels-explained",
    title: "Weighted Spin Wheels Explained: Control Probability Without Losing Fairness",
    excerpt: "Equal probability isn't always the right model. Weighted entries let you give some options a higher chance — here's how it works and when to use it.",
    date: "June 1, 2026",
    author: "Wheeloname Team",
    category: "Advanced",
    readTime: "10 min read",
    emoji: "⚖️",
    gradient: "from-blue-500 to-violet-600",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Wheeloname Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Practical guides on using spin wheels for classrooms, events, team building, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className={`bg-gradient-to-br ${post.gradient} h-44 flex items-center justify-center`}>
                <span className="text-6xl">{post.emoji}</span>
              </div>

              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-purple-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>

                <Link href={post.slug}>
                  <span className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:gap-3 transition-all cursor-pointer">
                    Read full article <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">More guides coming soon</h2>
          <p className="text-gray-600 mb-2">
            We publish new articles on random selection, decision-making, and classroom tools regularly.
          </p>
          <p className="text-sm text-gray-500">
            Have a topic you'd like us to cover? <a href="/contact" className="text-purple-600 hover:underline font-medium">Send us a suggestion.</a>
          </p>
        </div>
      </main>
    </div>
  );
}
