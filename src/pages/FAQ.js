import React from 'react';
import './Terms.css';

const faqs = [
  {
    id: 'what-is',
    question: 'What is Promptopedia?',
    answer: 'Promptopedia is a curated library of prompts designed to enhance images using AI models like Gemini. It offers ready-to-use prompts and examples to speed up your creative workflow.'
  },
  {
    id: 'how-to-use',
    question: 'How do I use the prompts?',
    answer: 'Browse the library, hover to reveal a prompt, copy it, and paste it into your AI image tool (e.g., Gemini) along with your image. Adjust the prompt as needed to fit your style.'
  },
  {
    id: 'account',
    question: 'Do I need an account?',
    answer: 'You can view the landing content without an account. To access the full prompt library and personalized features, sign up and log in.'
  },
  {
    id: 'cost',
    question: 'Is Promptopedia free?',
    answer: 'The current library is free to access.core browsing and copying prompts are free.'
  },
  {
    id: 'ai-disclaimer',
    question: 'Are AI outputs guaranteed?',
    answer: 'No. AI outputs can vary, be biased, or inaccurate. Always review results and follow the terms of the AI provider you use (e.g., Gemini).'
  },
  {
    id: 'contact',
    question: 'How can I submit feedback or prompts?',
    answer: 'You can reach us at rithvikbng@gmail.com or use the “Submit a prompt” link to share suggestions or contributions.'
  }
];

const FAQ = () => {
  return (
    <div className="terms-page">
      <header className="terms-hero">
        <div className="terms-hero-content">
          <p className="terms-kicker">Support</p>
          <h1>Frequently Asked Questions</h1>
          <p className="terms-subtitle">
            Quick answers about Promptopedia, prompts, accounts, and using AI models like Gemini.
          </p>
        </div>
      </header>

      <main className="terms-main">
        <div className="terms-container">
          <nav className="terms-toc" aria-label="FAQ navigation">
            <ul>
              {faqs.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.question}</a></li>
              ))}
            </ul>
          </nav>

          <section className="terms-content">
            {faqs.map((item) => (
              <article key={item.id} id={item.id} className="terms-section">
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
