import { useState, useEffect } from "react";
import { TrendingUp, Trophy, Flame, Award, Share2 } from "lucide-react";
import Header from "@/components/Header";

interface TrendingWheel {
  id: string;
  title: string;
  spins: number;
  creator: string;
  category: string;
  trend: "up" | "down" | "stable";
  badge?: string;
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<TrendingWheel[]>([]);
  const [filter, setFilter] = useState<"all" | "today" | "week" | "month">("week");

  useEffect(() => {
    // Generate mock leaderboard data
    const mockData: TrendingWheel[] = [
      {
        id: "1",
        title: "Would You Rather",
        spins: 15420,
        creator: "Sarah M.",
        category: "Games",
        trend: "up",
        badge: "🔥 Trending",
      },
      {
        id: "2",
        title: "Class Name Picker",
        spins: 12850,
        creator: "Mr. Johnson",
        category: "Education",
        trend: "up",
        badge: "⭐ Popular",
      },
      {
        id: "3",
        title: "Team Generator",
        spins: 10230,
        creator: "Coach Alex",
        category: "Sports",
        trend: "stable",
      },
      {
        id: "4",
        title: "Decision Maker",
        spins: 9870,
        creator: "Emma K.",
        category: "Utilities",
        trend: "down",
      },
      {
        id: "5",
        title: "Party Games",
        spins: 8650,
        creator: "Party Planner",
        category: "Entertainment",
        trend: "up",
        badge: "🎉 Fun",
      },
      {
        id: "6",
        title: "Random Lunch Picker",
        spins: 7430,
        creator: "Food Lover",
        category: "Lifestyle",
        trend: "stable",
      },
      {
        id: "7",
        title: "Dare Ideas",
        spins: 6890,
        creator: "Fun Group",
        category: "Games",
        trend: "up",
      },
      {
        id: "8",
        title: "Study Break Activities",
        spins: 5670,
        creator: "Teacher Pro",
        category: "Education",
        trend: "stable",
      },
    ];

    setLeaderboard(mockData);
  }, [filter]);

  const getRankBadge = (index: number) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Trophy size={32} className="text-amber-600" />
              <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Trending Wheels
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover the most popular and trending spin wheels created by our community
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 justify-center flex-wrap">
            {["all", "today", "week", "month"].map((period) => (
              <button
                key={period}
                onClick={() => setFilter(period as any)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filter === period
                    ? "text-white bg-gradient-to-r from-amber-600 to-orange-600"
                    : "text-gray-700 bg-white border border-gray-200 hover:border-gray-300"
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>

          {/* Leaderboard Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-100 bg-gray-50">
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Rank</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Wheel Name</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Spins</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Trend</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Creator</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((wheel, idx) => (
                    <tr key={wheel.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-2xl font-bold text-amber-600">{getRankBadge(idx)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-semibold text-gray-900">{wheel.title}</p>
                          <div className="flex gap-2 mt-1">
                            <span className="text-xs px-2 py-1 rounded-full text-gray-700 bg-gray-100">
                              {wheel.category}
                            </span>
                            {wheel.badge && (
                              <span className="text-xs px-2 py-1 rounded-full text-amber-700 bg-amber-100 font-semibold">
                                {wheel.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <p className="font-bold text-gray-900">{wheel.spins.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">spins</p>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {wheel.trend === "up" && (
                          <div className="flex items-center justify-center gap-1 text-green-600 font-semibold">
                            <TrendingUp size={16} />
                            <span>+12%</span>
                          </div>
                        )}
                        {wheel.trend === "down" && (
                          <div className="flex items-center justify-center gap-1 text-red-600 font-semibold">
                            <TrendingUp size={16} className="rotate-180" />
                            <span>-5%</span>
                          </div>
                        )}
                        {wheel.trend === "stable" && (
                          <span className="text-gray-600 font-semibold">→ Stable</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-gray-700 font-medium">{wheel.creator}</p>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button className="p-2 rounded-lg text-amber-600 hover:bg-amber-50 transition-colors">
                          <Share2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Total Spins</p>
                <Flame size={20} className="text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">2.4M+</p>
              <p className="text-xs text-gray-500 mt-2">This week</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Active Wheels</p>
                <Award size={20} className="text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">8.3K</p>
              <p className="text-xs text-gray-500 mt-2">Community created</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">New Creators</p>
                <Trophy size={20} className="text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">342</p>
              <p className="text-xs text-gray-500 mt-2">This month</p>
            </div>
          </div>

          {/* Community Highlights */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border-2 border-amber-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              🌟 Community Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">🚀 Fastest Growing</p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>"Would You Rather"</strong> by Sarah M. gained 5,000+ spins in just 3 days!
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">👑 Most Shared</p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>"Class Name Picker"</strong> by Mr. Johnson is the most shared wheel by teachers.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">💡 Most Customized</p>
                <p className="text-sm text-gray-700 mb-2">
                  Users have created 2,400+ variations of the "Decision Maker" wheel!
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">🎯 Best Engagement</p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>"Party Games"</strong> has the highest engagement rate at 78%!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
