function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.type}`}>
      <div className="chat-message-avatar">
        {message.type === 'mentor' ? '🧠' : '👤'}
      </div>
      <div className="chat-message-bubble">
        {message.text}
      </div>
    </div>
  )
}

export default ChatMessage