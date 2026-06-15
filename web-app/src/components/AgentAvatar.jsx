export default function AgentAvatar({ name, title }) {
  return (
    <>
      <style>{`
        .agent-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.25rem;
        }
        .agent-avatar-img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
        }
        .agent-info strong {
          display: block;
          font-size: 1rem;
          color: #1a1a2e;
        }
        .agent-info span {
          font-size: 0.85rem;
          color: #3f4652;
        }
      `}</style>
      <div className="agent-card">
        {/* Bug: src points to a file that does not exist — renders as a broken image */}
        <img
          className="agent-avatar-img"
          src="/assets/agent-sarah.jpg"
          alt={name}
        />
        <div className="agent-info">
          <strong>{name}</strong>
          <span>{title}</span>
        </div>
      </div>
    </>
  )
}
