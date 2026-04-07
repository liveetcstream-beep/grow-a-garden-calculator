import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Grow A Garden Calculator. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const lastUpdated = "April 6, 2025";
  const siteName = "Grow A Garden Calculator";
  const siteUrl = "https://growagardencalcs.com";
  const contactEmail = "contact@growagardencalcs.com";

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
            style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
            📄 Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 prose-custom">

          <Section title="1. Introduction">
            <p>Welcome to <strong>{siteName}</strong> ("{siteUrl}"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            <p>Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect information about you in a variety of ways:</p>
            <ul>
              <li><strong>Log Data:</strong> Our servers automatically record information your browser sends when you visit our site, including your IP address, browser type, pages visited, and timestamps.</li>
              <li><strong>Cookies & Local Storage:</strong> We use cookies and browser local storage to save your calculator preferences and backpack inventory data locally on your device. This data never leaves your device unless explicitly stated.</li>
              <li><strong>Usage Data:</strong> We collect anonymous data about how you interact with our tools to improve their performance and accuracy.</li>
            </ul>
          </Section>

          <Section title="3. Google AdSense & Advertising">
            <p>We use <strong>Google AdSense</strong> to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our site or other websites on the Internet.</p>
            <p>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>Google Ads Settings</a>.</p>
            <p>For more information about Google's privacy practices, please review the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>Google Privacy Policy</a>.</p>
            <p>We also participate in the <strong>Google AdSense program</strong> and comply with the <a href="https://support.google.com/adsense/answer/48182" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>Google Publisher Policies</a>.</p>
          </Section>

          <Section title="4. Google Analytics">
            <p>We use <strong>Google Analytics</strong> to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our website.</p>
            <p>Google's privacy policy is available at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>https://policies.google.com/privacy</a></p>
            <p>You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>Google Analytics Opt-out Browser Add-on</a>.</p>
          </Section>

          <Section title="5. Cookies">
            <p>Cookies are small files stored on your device. We use the following types of cookies:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the basic functionality of the site (e.g., saving your backpack inventory in local storage).</li>
              <li><strong>Analytics Cookies:</strong> Used by Google Analytics to understand how visitors interact with our site.</li>
              <li><strong>Advertising Cookies:</strong> Used by Google AdSense to deliver relevant advertisements.</li>
            </ul>
            <p>You can control cookies through your browser settings. However, disabling cookies may affect some functionality of our site.</p>
          </Section>

          <Section title="6. Third-Party Websites">
            <p>Our website may contain links to third-party websites such as Roblox, Discord, and others. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any information to them.</p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>Our website is intended for general audiences and may be used by children under the age of 13. We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete the information.</p>
            <p>We comply with the <strong>Children's Online Privacy Protection Act (COPPA)</strong>. Our site does not target advertising to children under 13.</p>
          </Section>

          <Section title="8. Data Retention">
            <p>We do not store any personally identifiable user data on our servers. Calculator preferences and backpack data are stored locally in your browser and are not transmitted to us. Log data may be retained for up to 90 days for security and performance purposes.</p>
          </Section>

          <Section title="9. Your Rights">
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction or deletion of your data</li>
              <li>The right to opt out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href={`mailto:${contactEmail}`} style={{ color: "var(--primary)" }}>{contactEmail}</a>.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by updating the "Last updated" date at the top of this page. Continued use of the site after changes constitutes your acceptance of the updated policy.</p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`} style={{ color: "var(--primary)" }}>{contactEmail}</a></li>
              <li><strong>Website:</strong> <a href={`${siteUrl}/contact`} style={{ color: "var(--primary)" }}>{siteUrl}/contact</a></li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl border" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
      <h2 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {children}
      </div>
    </div>
  );
}
