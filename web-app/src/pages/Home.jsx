import AgentAvatar from '../components/AgentAvatar'
import SupportButton from '../components/SupportButton'

export default function Home() {
  return (
    <div className="page-content">
      <style>{`
        .hero {
          background: #fff;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          /* Intentionally narrow container to expose the button overflow bug */
          max-width: 320px;
          margin-bottom: 2rem;
        }
        .hero h2 {
          font-size: 1.5rem;
          color: #004370;
        }
        .hero p {
          color: #3f4652;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .agent-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
        }
        .agent-section h3 {
          font-size: 1.1rem;
          color: #004370;
        }
      `}</style>
      <section className="hero">
        <h2>How can we help you today?</h2>
        <p>
          Our support team is available 24/7 to assist with your orders,
          returns, and account questions.
        </p>
        <SupportButton />
      </section>
      <section className="agent-section">
        <h3>Your Support Agent</h3>
        <AgentAvatar name="Sarah Chen" title="Senior Support Specialist" />
      </section>
    </div>
  )
}
