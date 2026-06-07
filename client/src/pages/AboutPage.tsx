import Header from "@/components/Header";
import { Mail, Globe, Heart } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Wheeloname</h1>
        
        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wheeloname is dedicated to making random selection simple, fair, and fun. Whether you're a teacher picking students, an event organizer running a raffle, or friends deciding where to eat, Wheeloname helps you make decisions with a spin. We believe that fair, transparent randomization should be accessible to everyone, regardless of technical skill or budget.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-3">🎡</div>
                <h3 className="font-bold text-lg mb-2">Free Spin Wheel Maker</h3>
                <p className="text-gray-600">Create unlimited custom wheels with no sign-up required. Fully customizable with 6 beautiful themes.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold text-lg mb-2">Classroom Tools</h3>
                <p className="text-gray-600">Perfect for teachers and educators. Pick random students, run fair classroom activities, and manage groups.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-bold text-lg mb-2">Event Management</h3>
                <p className="text-gray-600">Run fair raffles, giveaways, and contests. Transparent randomization for events and promotions.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-bold text-lg mb-2">Team Division</h3>
                <p className="text-gray-600">Automatically divide entries into balanced teams, pairs, or groups for activities and games.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold text-lg mb-2">Weighted Entries</h3>
                <p className="text-gray-600">Assign custom weights to entries for realistic probability distributions and weighted selection.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-3">🔗</div>
                <h3 className="font-bold text-lg mb-2">Embeddable Widget</h3>
                <p className="text-gray-600">Embed Wheeloname on your website or blog to increase engagement and drive traffic.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Wheeloname?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold mb-1">Completely Free</h3>
                  <p className="text-gray-600">No sign-up, no hidden fees, no premium tiers. Just create, spin, and enjoy.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold mb-1">Fully Customizable</h3>
                  <p className="text-gray-600">6 beautiful themes, unlimited colors, custom fonts, and personalization options.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold mb-1">Powerful Features</h3>
                  <p className="text-gray-600">Weighted entries, team division, CSV import/export, sound effects, and more.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold mb-1">Privacy First</h3>
                  <p className="text-gray-600">Your wheels are stored only in your browser. We don't collect or store your personal data.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold mb-1">Works Offline</h3>
                  <p className="text-gray-600">Progressive Web App (PWA) that works offline. Install on your device and use anywhere.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-bold mb-1">Always Improving</h3>
                  <p className="text-gray-600">We continuously add new features and improvements based on user feedback.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Fairness</h3>
                <p className="text-gray-600">We believe in transparent, fair randomization for everyone.</p>
              </div>

              <div className="text-center">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Accessibility</h3>
                <p className="text-gray-600">Free and easy to use for everyone, regardless of technical skill.</p>
              </div>

              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Community</h3>
                <p className="text-gray-600">We listen to our users and continuously improve based on feedback.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                Have questions, feedback, or suggestions? We'd love to hear from you! Contact us using the information below.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Mail className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600"><a href="mailto:support@wheeloname.com" className="text-purple-600 hover:underline">support@wheeloname.com</a></p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Globe className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="text-gray-600">www.wheeloname.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Legal</h2>
            <div className="space-y-3">
              <p><Link href="/privacy" className="text-purple-600 hover:underline font-semibold">Privacy Policy</Link></p>
              <p><Link href="/terms" className="text-purple-600 hover:underline font-semibold">Terms of Service</Link></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
