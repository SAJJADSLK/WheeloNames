import Header from "@/components/Header";
import { Calendar, User, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Complete Guide to Using Spin Wheels in Classrooms",
    excerpt: "Learn how to use spin wheels to make classroom activities more engaging, fair, and fun. Discover best practices for teachers.",
    date: "June 5, 2026",
    author: "Wheeloname Team",
    category: "Education",
    readTime: "5 min read",
    content: `Spin wheels have revolutionized how teachers conduct classroom activities. From picking random students to dividing teams, spin wheels provide a fair and engaging way to make decisions in the classroom.

Benefits for Teachers:
- Fair student selection for presentations
- Engaging way to pick volunteers
- Fun classroom activities
- Transparent decision-making
- Saves time on manual selection

Best Practices:
1. Use weighted entries for differentiated instruction
2. Create themed wheels for different subjects
3. Save your wheels for reuse
4. Involve students in creating wheels
5. Use sound effects to keep students engaged`
  },
  {
    id: 2,
    title: "How to Run Fair Raffles and Giveaways",
    excerpt: "Master the art of running transparent and fair raffles using digital spin wheels. Perfect for events and promotions.",
    date: "June 4, 2026",
    author: "Wheeloname Team",
    category: "Events",
    readTime: "6 min read",
    content: `Running fair raffles and giveaways is crucial for maintaining trust with your audience. Digital spin wheels provide transparency and fairness that manual methods cannot match.

Why Use Spin Wheels for Raffles:
- Complete transparency
- Fair randomization
- Easy to manage entries
- Shareable results
- Professional appearance

Steps to Run a Fair Raffle:
1. Create your wheel with all participants
2. Set up weighted entries if needed
3. Spin the wheel in front of witnesses
4. Record and share the results
5. Contact the winner immediately`
  },
  {
    id: 3,
    title: "Team Building Activities with Spin Wheels",
    excerpt: "Discover creative ways to use spin wheels for team building and group activities. Perfect for corporate events.",
    date: "June 3, 2026",
    author: "Wheeloname Team",
    category: "Team Building",
    readTime: "7 min read",
    content: `Team building activities are essential for creating a cohesive and motivated team. Spin wheels add an element of fun and fairness to these activities.

Team Building Ideas:
- Random team assignment
- Icebreaker selection
- Activity picker
- Role assignment
- Challenge selector

How to Use Spin Wheels for Teams:
1. Create wheels for different activities
2. Use team division feature for balanced groups
3. Make it fun and engaging
4. Record results for future reference
5. Celebrate winners and participants`
  },
  {
    id: 4,
    title: "Making Fair Decisions: The Psychology of Random Selection",
    excerpt: "Understand why random selection is fair and how it improves decision-making in various contexts.",
    date: "June 2, 2026",
    author: "Wheeloname Team",
    category: "Psychology",
    readTime: "8 min read",
    content: `Random selection has been used for centuries to make fair decisions. From ancient Greece to modern times, randomization ensures fairness and eliminates bias.

Why Random Selection Works:
- Eliminates personal bias
- Provides equal opportunity
- Builds trust and confidence
- Reduces conflict
- Improves decision quality

Applications of Random Selection:
- Classroom management
- Event organization
- Team assignment
- Lottery systems
- Research sampling`
  },
  {
    id: 5,
    title: "Weighted Spin Wheels: Advanced Probability Techniques",
    excerpt: "Learn how to use weighted entries to create realistic probability distributions and advanced selection scenarios.",
    date: "June 1, 2026",
    author: "Wheeloname Team",
    category: "Advanced",
    readTime: "10 min read",
    content: `Weighted entries allow you to create more sophisticated randomization scenarios. Instead of equal probability for all entries, you can assign different weights.

When to Use Weighted Entries:
- Difficulty levels in games
- Skill-based selection
- Resource allocation
- Probability simulations
- Educational demonstrations

How to Set Up Weights:
1. Assign weight values to entries
2. Higher weights = higher probability
3. Test your distribution
4. Adjust as needed
5. Document your weights`
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Wheeloname Blog</h1>
          <p className="text-xl text-gray-600">
            Learn tips, tricks, and best practices for using spin wheels in classrooms, events, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-48"></div>
              
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 bg-purple-50 rounded-lg border border-purple-200">
          <h2 className="text-2xl font-bold mb-4">More Content Coming Soon</h2>
          <p className="text-gray-700 mb-4">
            We're constantly creating new guides and tutorials to help you get the most out of Wheeloname. Check back soon for more content on advanced features, use cases, and best practices.
          </p>
        </div>
      </main>
    </div>
  );
}
