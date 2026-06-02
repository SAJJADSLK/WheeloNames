import { BookOpen, Users, Lightbulb, Download, ExternalLink } from "lucide-react";
import Header from "@/components/Header";

export default function ClassroomPage() {
  const resources = [
    {
      title: "Name Picker for Attendance",
      description: "Use Wheeloname to randomly select students for attendance or participation.",
      icon: Users,
      tips: ["Create a wheel with all student names", "Spin to select who answers questions", "Use 'No Repeat' mode to ensure everyone participates"],
    },
    {
      title: "Team Building Activities",
      description: "Divide your class into teams for group projects and activities.",
      icon: Users,
      tips: ["Use Team Generator for quick grouping", "Perfect for lab partners or project teams", "Export teams for your records"],
    },
    {
      title: "Ice Breaker Games",
      description: "Start class with fun ice breaker activities to build community.",
      icon: Lightbulb,
      tips: ["Use pre-built Ice Breaker preset wheel", "Great for first day of school", "Helps students get to know each other"],
    },
    {
      title: "Decision Making",
      description: "Let the wheel decide on classroom decisions fairly.",
      icon: Lightbulb,
      tips: ["Create wheels for classroom choices", "Fair and transparent decision making", "Students love the randomness!"],
    },
  ];

  const lessonIdeas = [
    {
      grade: "Elementary (K-5)",
      ideas: [
        "Spelling bee selector",
        "Math problem picker",
        "Reading comprehension questions",
        "Science experiment volunteer",
        "Art project idea generator",
      ],
    },
    {
      grade: "Middle School (6-8)",
      ideas: [
        "Group project team builder",
        "Presentation order randomizer",
        "Lab partner selector",
        "Discussion question picker",
        "Homework problem selector",
      ],
    },
    {
      grade: "High School (9-12)",
      ideas: [
        "Debate topic selector",
        "Research project assigner",
        "Presentation scheduler",
        "Quiz question randomizer",
        "College major explorer",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <BookOpen size={32} className="text-emerald-600" />
              <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Classroom Resources
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover how teachers are using Wheeloname to make learning more engaging, fair, and fun.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg transition-all p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-100">
                      <Icon size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">How to use:</p>
                    <ul className="space-y-1.5">
                      {resource.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lesson Ideas by Grade */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Lesson Ideas by Grade Level
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lessonIdeas.map((gradeLevel, idx) => (
                <div key={idx} className="bg-white rounded-2xl border-2 border-emerald-100 shadow-sm p-6">
                  <h3 className="text-lg font-bold text-emerald-700 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {gradeLevel.grade}
                  </h3>
                  <ul className="space-y-2">
                    {gradeLevel.ideas.map((idea, ideaIdx) => (
                      <li key={ideaIdx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl border-2 border-emerald-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              ⭐ Best Practices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">For Fair Selection</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Use "No Repeat" mode to ensure everyone participates equally</li>
                  <li>✓ Save your wheels for reuse throughout the year</li>
                  <li>✓ Let students see the wheel to build trust in randomness</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">For Engagement</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Use colorful themes to keep students interested</li>
                  <li>✓ Enable sound effects for extra excitement</li>
                  <li>✓ Let students create their own wheels for projects</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">For Efficiency</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Import student names from CSV files</li>
                  <li>✓ Use Team Generator for quick group assignments</li>
                  <li>✓ Share wheels with colleagues via short links</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">For Differentiation</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Create different wheels for different skill levels</li>
                  <li>✓ Use preset wheels for quick activities</li>
                  <li>✓ Customize wheels for specific lessons</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-white rounded-2xl border-2 border-emerald-100 shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Create your first classroom wheel in minutes. No sign-up required, completely free to use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/wheel/new"
                className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all inline-flex items-center justify-center gap-2"
              >
                Create Your First Wheel
                <ExternalLink size={18} />
              </a>
              <a
                href="/presets"
                className="px-8 py-3 rounded-xl font-bold text-emerald-700 bg-emerald-50 border-2 border-emerald-200 hover:bg-emerald-100 transition-all inline-flex items-center justify-center gap-2"
              >
                Browse Preset Wheels
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {[
                {
                  q: "Is Wheeloname free for teachers?",
                  a: "Yes! Wheeloname is completely free for all users, including teachers. No sign-up or credit card required.",
                },
                {
                  q: "Can I save my wheels for next year?",
                  a: "Yes! All wheels are saved in your browser. You can also export them as CSV files for backup.",
                },
                {
                  q: "How do I share wheels with other teachers?",
                  a: "Click the 'Get Share Link' button to generate a shareable link. You can send this link to colleagues.",
                },
                {
                  q: "Can students create their own wheels?",
                  a: "Absolutely! Students can create wheels for projects, presentations, or classroom activities.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-700 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
