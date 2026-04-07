import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the Grow A Garden Calculator team for support, business inquiries, or feedback.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  const contactEmail = "contact@growagardencalcs.com";

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
            style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
            📧 Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            Contact Us
          </h1>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            Have a question, suggestion, or business inquiry? We'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl border h-full" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
              <h2 className="text-2xl font-black mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>Contact Info</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "var(--muted)" }}>General Inquiries & Support</h3>
                  <a href={`mailto:${contactEmail}`} className="text-lg font-medium transition-colors hover:text-[var(--primary)]" style={{ color: "var(--foreground)" }}>
                    {contactEmail}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "var(--muted)" }}>Community</h3>
                  <a href="https://discord.gg/growagarden" target="_blank" rel="noopener noreferrer" className="text-lg font-medium flex items-center gap-2 transition-colors hover:text-[#5865F2]" style={{ color: "var(--foreground)" }}>
                    📱 Join GAG Discord
                  </a>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}>
                <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: "var(--foreground)" }}>
                  <span className="text-xl">⚠️</span> Bug Report?
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  If you found a bug or an incorrect calculator value, please email us with a screenshot or exact steps to reproduce it. We usually fix bugs within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-3xl border" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
            <form className="space-y-6" action={`mailto:${contactEmail}`} method="POST" encType="text/plain">
              
              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--muted)" }}>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:border-[var(--primary)]"
                  style={{ background: "var(--background)", borderColor: "var(--glass-border)", color: "var(--foreground)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--muted)" }}>Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:border-[var(--primary)]"
                  style={{ background: "var(--background)", borderColor: "var(--glass-border)", color: "var(--foreground)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--muted)" }}>Subject</label>
                <select 
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:border-[var(--primary)] appearance-none"
                  style={{ background: "var(--background)", borderColor: "var(--glass-border)", color: "var(--foreground)" }}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bug Report">Report a Bug / Incorrect Value</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Business/Ad Inquiry">Business / Ad Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--muted)" }}>Message</label>
                <textarea 
                  name="message" 
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:border-[var(--primary)] resize-none"
                  style={{ background: "var(--background)", borderColor: "var(--glass-border)", color: "var(--foreground)" }}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] shadow-lg"
                style={{ background: "var(--primary)" }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
