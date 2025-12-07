import React from 'react';
import './Terms.css';

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    body: 'This Cookie Policy explains how Promptopedia uses cookies and similar technologies to enhance your experience, maintain sessions, and gather analytics.'
  },
  {
    id: 'what-are-cookies',
    title: '2. What Are Cookies?',
    body: 'Cookies are small text files stored on your device by your browser. They help websites remember your preferences, authentication state, and usage patterns.'
  },
  {
    id: 'types-we-use',
    title: '3. Types of Cookies We Use',
    body: 'Essential cookies: Required for authentication and core functionality (e.g., keeping you logged in). Analytics cookies: Help us understand how users interact with the site to improve features. Preference cookies: Remember your settings and choices.'
  },
  {
    id: 'third-party',
    title: '4. Third-Party Cookies',
    body: 'We may use third-party services (e.g., authentication providers, analytics tools) that set their own cookies. These are governed by the respective third-party privacy policies.'
  },
  {
    id: 'local-storage',
    title: '5. Local Storage',
    body: 'In addition to cookies, we may use browser local storage to save session data and user preferences for a smoother experience.'
  },
  {
    id: 'control',
    title: '6. Your Cookie Choices',
    body: 'You can control cookies through your browser settings. Note that disabling certain cookies may affect site functionality, such as staying logged in or accessing protected features.'
  },
  {
    id: 'duration',
    title: '7. Cookie Duration',
    body: 'Session cookies: Deleted when you close your browser. Persistent cookies: Remain until expiration or manual deletion. Check your browser settings to manage or clear cookies.'
  },
  {
    id: 'updates',
    title: '8. Updates to This Policy',
    body: 'We may update this Cookie Policy from time to time. Continued use after changes means you accept the updated policy.'
  },
  {
    id: 'contact',
    title: '9. Contact',
    body: 'Questions about cookies? Email rithvikbng@gmail.com'
  }
];

const CookiePolicy = () => {
  return (
    <div className="terms-page">
      <header className="terms-hero">
        <div className="terms-hero-content">
          <p className="terms-kicker">Legal</p>
          <h1>Cookie Policy</h1>
          <p className="terms-subtitle">
            How Promptopedia uses cookies, local storage, and similar technologies.
          </p>
        </div>
      </header>

      <main className="terms-main">
        <div className="terms-container">
          <nav className="terms-toc" aria-label="Cookie policy navigation">
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

export default CookiePolicy;
