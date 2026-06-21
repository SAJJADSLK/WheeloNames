import Header from "@/components/Header";
import { useState } from "react";
import { Mail, Globe, MessageSquare, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // In production, wire this to your backend or a service like Formspree / EmailJS
    // For now, open the default mail client with prefilled content
    const subject = encodeURIComponent(form.subject || "Wheeloname Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:support@wheeloname.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

  const allFilled = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Have a question, a bug report, a feature idea, or just want to say hello? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Email</p>
                    <a href="mailto:support@wheeloname.com" className="text-purple-600 hover:underline text-sm">
                      support@wheeloname.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Globe className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Website</p>
                    <p className="text-gray-600 text-sm">www.wheeloname.com</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MessageSquare className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Response time</p>
                    <p className="text-gray-600 text-sm">We typically reply within 1–2 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Common questions</h3>
              <p className="text-xs text-gray-600 mb-3">Many questions are answered on our FAQ page.</p>
              <a href="/faq" className="text-xs text-purple-600 font-semibold hover:underline">View FAQ →</a>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-600">Thanks for reaching out. Your email client should have opened with your message. We'll reply to <strong>{form.email}</strong> within 1–2 business days.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-sm text-purple-600 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a topic…</option>
                    <option value="General question">General question</option>
                    <option value="Feature request">Feature request</option>
                    <option value="Bug report">Bug report</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership or press">Partnership or press</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help…"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!allFilled}
                  className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form you agree to our{" "}
                  <a href="/privacy" className="text-purple-500 hover:underline">Privacy Policy</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
