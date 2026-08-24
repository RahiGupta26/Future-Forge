import { useState, useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage.jsx'
import { careerData } from '../../data/careerData'
import '../../styles/AIMentor.css'

function AIMentor({ career }) {
  const [messages, setMessages] = useState([
    {
      type: 'mentor',
      text: career
        ? `Welcome! I am your AI Career Mentor for ${career.title}. Ask me anything about this career path!`
        : 'Welcome to Future Forge! I am your AI Career Mentor. Select a career path above, or ask me a general question about tech careers!'
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatBodyRef = useRef(null)

  const mentorAdvice = career
    ? career.mentorAdvice
    : [
        { question: 'Which career should I choose?', answer: 'It depends on your interests! If you love building things, try Software Engineering. If you love data and patterns, try Data Science. If you are creative, UX Design might be perfect. Explore each path using our simulator to see what excites you most!' },
        { question: 'How do I start in tech?', answer: 'Start with the basics: learn HTML, CSS, and JavaScript. Build small projects and share them on GitHub. Join tech communities, attend meetups, and never stop learning. Your first step matters more than your first choice!' },
        { question: 'Is a CS degree necessary?', answer: 'Not anymore! Many successful tech professionals are self-taught or from bootcamps. What matters most is your skills, portfolio, and ability to solve problems. However, a degree can open doors at some large companies. Focus on learning and building.' }
      ]

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    setMessages([
      {
        type: 'mentor',
        text: career
          ? `Welcome! I am your AI Career Mentor for ${career.title}. Ask me anything about this career path!`
          : 'Welcome to Future Forge! I am your AI Career Mentor. Select a career path above, or ask me a general question about tech careers!'
      }
    ])
  }, [career])

  const handleQuestion = (qa) => {
    setMessages(prev => [...prev, { type: 'user', text: qa.question }])
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { type: 'mentor', text: qa.answer }])
    }, 1500)
  }

  return (
    <div className="ai-mentor">
      <div className="container">
        <h2 className="section-title">
          🤖 <span className="gradient-text">AI Career Mentor</span>
        </h2>
        <p className="section-subtitle">
          Get personalized career advice from our AI mentor. Ask questions and get expert guidance.
        </p>
      </div>

      <div className="ai-mentor-container">
        <div className="mentor-chat">
          <div className="mentor-chat-header">
            <div className="mentor-avatar">🧠</div>
            <div className="mentor-info">
              <h3>Career Mentor AI</h3>
              <p>Always here to help</p>
            </div>
          </div>

          <div className="mentor-chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
            {isTyping && (
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
            {mentorAdvice.map((qa, index) => (
              <button
                key={index}
                className="mentor-question-btn"
                onClick={() => handleQuestion(qa)}
                disabled={isTyping}
              >
                {qa.question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIMentor
