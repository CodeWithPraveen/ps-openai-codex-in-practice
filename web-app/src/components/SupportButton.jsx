export default function SupportButton() {
  return (
    <>
      <style>{`
        .support-btn {
          /* Bug: fixed width (360px) exceeds the .hero container width (320px),
             causing the button label to overflow and get clipped */
          width: 360px;
          padding: 0.85rem 1.5rem;
          background: #004370;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          text-align: center;
        }
        .support-btn:hover {
          background: #00304f;
        }
      `}</style>
      <button
        className="support-btn"
        onClick={() => alert('Connecting you to support...')}
      >
        Contact Support Now
      </button>
    </>
  )
}
