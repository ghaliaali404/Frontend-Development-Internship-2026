import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.'
  },
  {
    id: 2,
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days. Express shipping is available at checkout and takes 1-2 business days.'
  },
  {
    id: 3,
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.'
  },
  {
    id: 4,
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship globally! International shipping fees and delivery times vary depending on the destination country.'
  },
  {
    id: 5,
    question: 'How can I track my order?',
    answer: 'Once your order ships, you will receive an email containing a tracking link and shipment details.'
  },
  {
    id: 6,
    question: 'Is customer support available 24/7?',
    answer: 'Our customer support team is available 24/7 via live chat and email to assist you with any questions.'
  }
];

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ maxWidth: '48rem', margin: '0 auto', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Interactive FAQ accordion built with React State.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}
            >
              {/* Question Button with Fixed Spacing */}
              <button
                type="button"
                onClick={() => toggleFAQ(item.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '1.125rem' }}>{item.question}</span>
                <span
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    backgroundColor: isOpen ? '#4f46e5' : '#e0e7ff',
                    color: isOpen ? '#ffffff' : '#4f46e5',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  ↓
                </span>
              </button>

              {/* Expandable Answer */}
              {isOpen && (
                <div
                  style={{
                    padding: '0 1.5rem 1.25rem 1.5rem',
                    color: '#4b5563',
                    fontSize: '1rem',
                    lineHeight: '1.625',
                    borderTop: '1px solid #f3f4f6',
                    paddingTop: '1rem'
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};