import React, { useState, useRef, useEffect } from 'react';

const FAQS = [
  {
    q: /hours|open|close|operation|time/i,
    a: 'Our hours of operation are Monday to Friday, 9am to 6pm, and Saturday 10am to 4pm.'
  },
  {
    q: /price|cost|fee|charge/i,
    a: 'For pricing, please visit our Pricing page or contact us for a custom quote.'
  },
  {
    q: /contact|phone|email|reach/i,
    a: 'You can contact us at info@supercarcare.com or call (123) 456-7890.'
  },
];

function getBotReply(input) {
  for (const faq of FAQS) {
    if (faq.q.test(input)) return faq.a;
  }
  return "I'm forwarding this to our team — please provide your name, email, and a short description so we can reach you.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getBotReply(input) };
    setMessages(msgs => [...msgs, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn border border-gray-700">
          <div className="bg-[#D40000] text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold tracking-wide text-lg">SuperCHAT</span>
            <button onClick={() => setOpen(false)} className="text-2xl font-bold hover:text-gray-200">&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto h-64 bg-transparent">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-lg max-w-xs text-sm font-medium shadow ${msg.from === 'user' ? 'bg-[#D40000] text-white' : 'bg-gray-800 text-gray-100 border border-gray-700'}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-gray-700 bg-gray-900 flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D40000] text-white placeholder-gray-400 bg-gray-800 text-base"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
            />
            <button
              className="bg-[#D40000] hover:bg-[#b30000] text-white px-4 py-2 rounded-lg font-bold text-base transition-all duration-150 shadow focus:outline-none focus:ring-2 focus:ring-[#D40000] focus:ring-offset-2 disabled:opacity-50"
              onClick={sendMessage}
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-[#D40000] hover:bg-[#b30000] text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl focus:outline-none focus:ring-2 focus:ring-[#D40000] focus:ring-offset-2"
          onClick={() => setOpen(true)}
          aria-label="Open chatbot"
        >
          💬
        </button>
      )}
    </div>
  );
} 