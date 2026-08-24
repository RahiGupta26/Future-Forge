import { useState } from 'react'

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentId = `accordion-content-${title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`

  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div
        id={contentId}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
        hidden={!isOpen}
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
