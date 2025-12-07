import React from 'react';
import './Terms.css';

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    body: `Promptopedia provides curated prompts for image enhancement. By using this site, you agree to these Terms. If you do not agree, please do not use the service.`
  },
  {
    id: 'accounts',
    title: '2. Accounts & Access',
    body: `You are responsible for maintaining the confidentiality of your account and credentials. You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the service.`
  },
  {
    id: 'usage',
    title: '3. Acceptable Use',
    body: `Do not use prompts for illegal, harmful, harassing, or infringing purposes. Do not attempt to reverse engineer or disrupt the service. Respect third-party rights when using generated outputs.`
  },
  {
    id: 'ai-disclaimer',
    title: '4. AI & Output Disclaimer',
    body: `Outputs from AI models (including Gemini) can be inaccurate, biased, or unpredictable. You are responsible for reviewing outputs before use and for complying with the terms of any connected AI provider.`
  },
  {
    id: 'content',
    title: '5. Your Content',
    body: `If you submit prompts or examples, you grant Promptopedia a non-exclusive license to display and share them within the service. Do not upload sensitive or personal data.`
  },
  {
    id: 'privacy',
    title: '6. Privacy',
    body: `We process limited personal data (e.g., account email). For details, refer to our privacy practices. Do not store sensitive personal information in prompts.`
  },
  {
    id: 'security',
    title: '7. Security',
    body: `We use industry-standard measures, but no system is perfectly secure. Notify us immediately if you suspect unauthorized access.`
  },
  {
    id: 'third-parties',
    title: '8. Third-Party Services',
    body: `Prompts may be used with third-party AI services (e.g., Google Gemini). Their terms and policies apply separately and may change without notice.`
  },
  {
    id: 'warranty',
    title: '9. Warranty & Liability',
    body: `The service is provided "as is" without warranties. To the fullest extent allowed by law, Promptopedia is not liable for indirect, incidental, or consequential damages.`
  },
  {
    id: 'changes',
    title: '10. Changes to Terms',
    body: `We may update these Terms periodically. Continued use after changes means you accept the updated Terms.`
  },
  {
    id: 'contact',
    title: '11. Contact',
    body: `Questions? Email rithvikbng@gmail.com`
  }
];

const Terms = () => {
  return (
    <div className="terms-page">
      <header className="terms-hero">
        <div className="terms-hero-content">
          <p className="terms-kicker">Legal</p>
          <h1>Terms & Conditions</h1>
          <p className="terms-subtitle">
            Please read these Terms carefully. Your use of Promptopedia means you agree to them.
          </p>
        </div>
      </header>

      <main className="terms-main">
        <div className="terms-container">
          <nav className="terms-toc" aria-label="Terms navigation">
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

export default Terms;
