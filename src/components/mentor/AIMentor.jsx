import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage.jsx';
import '../../styles/AIMentor.css';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${GEMINI_API_KEY}`;

function AIMentor({ career }) {
  const [messages, setMessages] = useState([
    {
      type: 'mentor',
      text: career
        ? `Hello! I am your AI Career Mentor for ${career.title}. Ask me anything about skills, salary, or interviews!`
        : 'Hello! I am your AI Career Mentor. Ask me any question about starting or growing your tech career!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    setMessages([
      {
        type: 'mentor',
        text: career
          ? `Hello! I am your AI Career Mentor for ${career.title}. What would you like to know?`
          : 'Hello! I am your AI Career Mentor. Ask me any question about your tech career!'
      }
    ]);
  }, [career]);

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    setMessages((prev) => [...prev, { type: 'user', text: query }]);
    setInput('');
    setLoading(true);

    if (!GEMINI_API_KEY) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'mentor',
          text: '⚠️ Gemini API key is missing. Please create a .env file with VITE_GEMINI_API_KEY=your_key in the project root and restart the server (npm run dev).'
        }
      ]);
      setLoading(false);
      return;
    }

    try {
      const promptContext = career
        ? `You are an AI career advisor for students interested in becoming a ${career.title}. Answer this question helpfully and concisely: ${query}`
        : `You are an AI tech career advisor. Answer this student's question helpfully and concisely: ${query}`;

      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: promptContext }]
            }
          ]
        })
      });

      const data = await response.json();

      const replyText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        data.error?.message ||
        'Sorry, I could not generate an answer right now. Please try asking again.';

      setMessages((prev) => [...prev, { type: 'mentor', text: replyText }]);
    } catch (error) {
      console.error('Gemini error:', error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'mentor',
          text: `Error connecting to Gemini API: ${error.message}. Please check your connection.`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    'How do I prepare for technical interviews?',
    'What projects should I build to get hired?',
    'What skills are most important for freshers?'
  ];

  return (
    <div className="ai-mentor">
      <div className="ai-mentor-container">
        <div className="mentor-chat">
          <div className="mentor-chat-header">
            <div className="mentor-info">
              <h3>{career ? `${career.title} AI Mentor` : 'Career Mentor AI'}</h3>
              <p>Powered by Google Gemini 3.8 Flash API</p>
            </div>
            <span style={{
              marginLeft: 'auto',
              background: 'rgba(16, 185, 129, 0.25)',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
            </span>
          </div>

          <div className="mentor-chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}

            {loading && (
              <div className="chat-message mentor">
                <div className="chat-message-avatar">🧠</div>
                <div className="chat-message-bubble">
                  <div className="mentor-typing">
                    <div className="mentor-typing-dot"></div>
                    <div className="mentor-typing-dot"></div>
                    <div className="mentor-typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mentor-questions">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                className="mentor-question-btn"
                onClick={() => handleSendMessage(q)}
                disabled={loading}
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="mentor-input-bar"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about your career..."
              className="mentor-text-input"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="mentor-send-btn"
            >
              {loading ? 'Thinking...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AIMentor;
