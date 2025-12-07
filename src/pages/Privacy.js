import React from 'react';
import './Terms.css';

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    body: 'This Privacy Policy explains how Promptopedia collects, uses, and protects your information when you use our site and services.'
  },
  {
    id: 'data-we-collect',
    title: '2. Data We Collect',
    body: 'Account email and basic usage data (e.g., auth events, page visits). We do not ask for or require sensitive personal information in prompts or uploads.'
  },
  {
    id: 'usage-data',
    title: '3. Usage Data & Analytics',
    body: 'We may collect minimal analytics (e.g., page views, feature usage) to improve the product. IP addresses may be processed for security and rate limiting.'
  },
  {
    id: 'prompts',
    title: '4. Prompts & Uploaded Content',
    body: 'Prompts you submit or save may be stored to provide the service. Do not include personal, sensitive, or confidential data in prompts or uploads.'
  },
  {
    id: 'ai-services',
    title: '5. Third-Party AI Services',
    body: 'Prompts may be sent to third-party AI providers (e.g., Google Gemini). Their terms and privacy policies apply separately and may change without notice.'
  },
  {
    id: 'cookies',
    title: '6. Cookies & Local Storage',
    body: 'We may use cookies or local storage for authentication, session continuity, and basic preferences. You can control cookies via your browser settings.'
  },
  {
    id: 'security',
    title: '7. Security',
    body: 'We use industry-standard measures to protect data, but no system is perfectly secure. Notify us if you suspect unauthorized access.'
  },
  {
    id: 'retention',
    title: '8. Data Retention',
    body: 'We retain account data while your account is active or as needed to provide the service. You may request deletion of your account and associated data.'
  },
  {
    id: 'your-rights',
    title: '9. Your Choices & Rights',
    body: 'You can request access, correction, or deletion of your data by contacting us. You may disable cookies in your browser, which could affect functionality.'
  },
  {
    id: 'children',
    title: '10. Children',
    body: 'The service is not directed to children under 13. If you believe a child provided personal data, contact us to remove it.'
  },
  {
    id: 'changes',
    title: '11. Changes to this Policy',
    body: 'We may update this Privacy Policy periodically. Continued use after changes means you accept the updated policy.'
  },
  {
    id: 'contact',
    title: '12. Contact',
    body: 'Questions? Email rithvikbng@gmail.com'
  }
];

const Privacy = () => {
  return (
    <div className="terms-page">
      <header className="terms-hero">
        <div className="terms-hero-content">
          <p className="terms-kicker">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="terms-subtitle">
            How Promptopedia handles your data, cookies, and use of AI services.
          </p>
        </div>
      </header>

      <main className="terms-main">
        <div className="terms-container">
          <nav className="terms-toc" aria-label="Privacy navigation">
            <ul>
              {sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
              ))}
            </ul>
          </nav>

          <section className="terms-content">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="terms-section">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
