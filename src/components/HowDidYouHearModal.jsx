import React, { useState, useEffect } from 'react';

const OPTIONS = [
  {
    label: 'Reference / Recommendation',
    value: 'reference',
    followup: 'Who recommended us, and what did they say?'
  },
  {
    label: 'Social Media',
    value: 'social',
    followup: 'Which social platform did you hear about us on?'
  },
  {
    label: 'Advertisement',
    value: 'ad',
    followup: 'Where did you see our advertisement?'
  },
  {
    label: 'Website Search',
    value: 'search',
    followup: 'Which search engine or website did you use?'
  },
  {
    label: 'Events / Conferences',
    value: 'event',
    followup: 'Which event or conference?'
  },
];

export default function HowDidYouHearModal({ open, onClose }) {
  const [selected, setSelected] = useState(null);
  const [followup, setFollowup] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSelected(null);
      setFollowup('');
      setSubmitted(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn border border-gray-700">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-3xl font-extrabold mb-8 text-center text-white tracking-tight drop-shadow">How did you hear about us?</h2>
        {submitted ? (
          <div className="text-center text-[#D40000] font-semibold text-lg">Thank you for your feedback!</div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-8">
              {OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  className={`py-3 px-5 rounded-lg border text-base font-semibold transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D40000] focus:ring-offset-2 tracking-wide
                    ${selected === opt.value
                      ? 'bg-[#D40000] text-white border-[#D40000] scale-105 shadow-lg'
                      : 'bg-gray-800 text-gray-100 border-gray-700 hover:bg-[#D40000]/90 hover:text-white hover:border-[#D40000]'}
                  `}
                  onClick={() => setSelected(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {selected && (
              <div className="mb-6">
                <label className="block text-gray-200 mb-2 text-base font-semibold">
                  {OPTIONS.find(o => o.value === selected).followup}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D40000] text-white placeholder-gray-400 bg-gray-900 text-base"
                  value={followup}
                  onChange={e => setFollowup(e.target.value)}
                  placeholder="Type your answer here..."
                  autoFocus
                />
              </div>
            )}
            <button
              className="w-full bg-[#D40000] hover:bg-[#b30000] text-white py-3 rounded-lg font-bold text-lg mt-2 transition-all duration-150 shadow focus:outline-none focus:ring-2 focus:ring-[#D40000] focus:ring-offset-2 disabled:opacity-50 tracking-wide"
              disabled={!selected || !followup}
              onClick={() => setSubmitted(true)}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
} 