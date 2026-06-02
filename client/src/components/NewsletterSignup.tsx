import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      // Save to localStorage (in production, send to email service)
      const subscribers = JSON.parse(localStorage.getItem("wheeloname-subscribers") || "[]");
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("wheeloname-subscribers", JSON.stringify(subscribers));
      }

      setSubscribed(true);
      setEmail("");
      toast.success("Welcome to Wheeloname newsletter! 🎉");

      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 p-4 flex items-center gap-3">
        <Check size={20} className="text-green-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-green-900">Thanks for subscribing!</p>
          <p className="text-sm text-green-700">Check your email for updates</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200 p-6">
      <div className="flex items-start gap-3 mb-4">
        <Mail size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-gray-900">Get Wheeloname Updates</p>
          <p className="text-sm text-gray-600">New features, tips, and exclusive content</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border-2 border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>

        <p className="text-xs text-gray-600 text-center">
          ✓ No spam, unsubscribe anytime
        </p>
      </form>
    </div>
  );
}
