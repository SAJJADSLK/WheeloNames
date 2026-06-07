import Header from "@/components/Header";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Is Wheeloname really free?",
    answer: "Yes! Wheeloname is completely free to use. No sign-up required, no hidden fees, and no premium tiers. You can create unlimited wheels and use all features without paying anything. We believe fair randomization should be accessible to everyone."
  },
  {
    question: "Can I save my wheels?",
    answer: "Absolutely! Your wheels are automatically saved in your browser's local storage. You can access them anytime from the 'My Wheels' page without creating an account. Your data stays on your device and is never sent to our servers."
  },
  {
    question: "How many entries can I add to a wheel?",
    answer: "You can add unlimited entries to your wheel. Whether you need 10 entries or 1000, Wheeloname can handle it. The more entries you add, the more options you have for random selection."
  },
  {
    question: "Can I use weighted entries?",
    answer: "Yes! You can assign custom weights to entries to give some options higher probability than others. This is useful for creating realistic probability distributions, difficulty levels in games, or skill-based selection scenarios."
  },
  {
    question: "Can I embed Wheeloname on my website?",
    answer: "Yes! We provide an embeddable widget that you can add to your website or blog. Visit the Embed Widget page for instructions on how to integrate Wheeloname into your site to increase engagement and drive traffic."
  },
  {
    question: "Does Wheeloname work offline?",
    answer: "Yes! Wheeloname is a Progressive Web App (PWA) that works offline. You can install it on your device and use it anywhere, even without an internet connection. Your wheels will continue to work seamlessly."
  },
  {
    question: "Can I import entries from a CSV file?",
    answer: "Yes! You can import entries from CSV files or paste a list directly into Wheeloname. This is perfect for large wheels with many entries or when you want to reuse data from spreadsheets."
  },
  {
    question: "Is my data private?",
    answer: "Yes! Your wheels and data are stored only in your browser's local storage. We don't collect, store, or transmit your personal information. Your privacy is our top priority. Check our Privacy Policy for more details."
  },
  {
    question: "Can I share my wheels with others?",
    answer: "Yes! You can generate shareable links for any wheel and send them to friends, classmates, or team members. They can spin your wheels without needing to create an account or install anything."
  },
  {
    question: "Does it work on mobile devices?",
    answer: "Perfectly! Wheeloname is fully responsive and works seamlessly on phones, tablets, and desktops. Whether you're on iOS, Android, or any other device, you'll have a great experience."
  },
  {
    question: "Can I export my wheel data?",
    answer: "Yes, you can export your wheel entries as CSV and import them into other tools or share them easily. This makes it simple to backup your wheels or use your data elsewhere."
  },
  {
    question: "Can I customize the appearance of my wheel?",
    answer: "Yes! You can choose from 6 beautiful themes, customize colors, change fonts, adjust the size, and personalize many other aspects of your wheel. Make it uniquely yours to match your brand or style."
  },
  {
    question: "Can I use Wheeloname for classroom activities?",
    answer: "Absolutely! Wheeloname is perfect for classrooms. Teachers use it to pick random students, divide teams, run fair activities, and make classroom management more engaging. It's completely free and requires no setup."
  },
  {
    question: "Can I use Wheeloname for raffles and giveaways?",
    answer: "Yes! Wheeloname is ideal for running fair raffles and giveaways. You can add all participants, spin the wheel transparently, and share results. Perfect for events, promotions, and contests."
  },
  {
    question: "How do I divide people into teams?",
    answer: "Use the Team Division feature to automatically split entries into balanced teams or groups. Simply enter your entries and specify how many teams you want. Wheeloname will create fair, balanced groups automatically."
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Wheeloname and how to use it.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left text-gray-900">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-purple-50 rounded-lg border border-purple-200">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-4">
            Can't find the answer you're looking for? Please contact us at support@wheeloname.com and we'll be happy to help!
          </p>
        </div>
      </main>
    </div>
  );
}
