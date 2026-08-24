function Card({ children, className = '', onClick }) {
  return (
    <article
      className={`card ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </article>
  )
}

export default Card
