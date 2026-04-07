import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Grow A Garden Calculator. Read our rules and conditions for using this website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
            📋 Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            Terms of Service
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-8">

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using <strong>{siteName}</strong> ("{siteUrl}"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>{siteName} is a free, fan-made calculator tool for the Roblox game "Grow A Garden." Our services include:</p>
            <ul>
              <li>Crop value calculators</li>
              <li>Mutation multiplier tools</li>
              <li>Pet stat calculators</li>
              <li>Trade value calculators</li>
              <li>Seed profit calculators</li>
              <li>Reverse goal calculators</li>
              <li>Inventory net worth tracking via backpack system</li>
            </ul>
          </Section>

          <Section title="3. Disclaimer of Affiliation">
            <p><strong>{siteName} is NOT affiliated with, endorsed by, or connected to Roblox Corporation or the official "Grow A Garden" game developers.</strong></p>
            <p>All game data, values, item names, and mechanics referenced on this website are the intellectual property of their respective owners. We use this information solely for educational and reference purposes under fair use.</p>
            <p>"Roblox" and "Grow A Garden" are trademarks of their respective owners.</p>
          </Section>

          <Section title="4. Accuracy of Information">
            <p>Game values, mutation multipliers, and other in-game data on this website are maintained by our team and the community. However:</p>
            <ul>
              <li>We do not guarantee that all values are 100% accurate or up to date.</li>
              <li>Game values can change with updates from the game developers.</li>
              <li>You should always verify critical values in-game before making important decisions.</li>
              <li>We are not responsible for any in-game losses resulting from reliance on our calculator data.</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>The content, design, code, and features of {siteName} — including but not limited to text, graphics, logos, and software — are the property of {siteName} and are protected by applicable intellectual property laws.</p>
            <p>You may not:</p>
            <ul>
              <li>Copy, reproduce, or redistribute our website's code without permission</li>
              <li>Use our brand name or logo without written consent</li>
              <li>Scrape our site for commercial purposes</li>
              <li>Create derivative works based on our tools without permission</li>
            </ul>
          </Section>

          <Section title="6. Advertising">
            <p>Our website displays advertisements served by <strong>Google AdSense</strong> and potentially other advertising partners. By using our site, you acknowledge and agree that:</p>
            <ul>
              <li>Ads are displayed to help fund the free operation of this service.</li>
              <li>Third-party advertisers may use cookies to personalize ads.</li>
              <li>We are not responsible for the content of third-party advertisements.</li>
              <li>You may opt out of personalized ads through your Google account settings.</li>
            </ul>
          </Section>

          <Section title="7. User Conduct">
            <p>You agree not to use the site to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Engage in any activity that interferes with or disrupts the site's functionality</li>
              <li>Use automated bots or scrapers without prior written permission</li>
            </ul>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>This website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that:</p>
            <ul>
              <li>The site will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The site or its server are free of viruses or other harmful components</li>
              <li>The results of using the site will meet your requirements</li>
            </ul>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>To the fullest extent permitted by law, {siteName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from:</p>
            <ul>
              <li>Your use or inability to use the service</li>
              <li>Any errors or inaccuracies in the calculator data</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any other matter relating to the service</li>
            </ul>
          </Section>

          <Section title="10. Changes to Terms">
            <p>We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site after changes are posted constitutes your acceptance of the revised terms.</p>
          </Section>

          <Section title="11. Governing Law">
            <p>These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through good-faith negotiation before pursuing legal remedies.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
