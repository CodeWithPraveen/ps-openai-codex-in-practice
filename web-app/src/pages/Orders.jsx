import { useParams, useSearchParams } from 'react-router-dom'
import { formatCurrency } from '../lib/format-currency'

const ORDERS = {
  '12345': {
    id: '12345',
    customer: 'Maria Müller',
    date: 'November 14, 2024',
    status: 'Delivered',
    items: [
      { name: 'Wireless Keyboard', quantity: 1, unitPrice: 79.99 },
      { name: 'USB-C Hub', quantity: 2, unitPrice: 34.99 },
    ],
    total: 149.97,
  },
}

export default function Orders() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const locale = searchParams.get('locale') || 'en-US'
  const order = ORDERS[id]

  if (!order) {
    return (
      <div className="page-content">
        <p>Order {id} not found.</p>
      </div>
    )
  }

  return (
    <div className="page-content">
      <style>{`
        .order-card {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        .order-header h2 {
          font-size: 1.4rem;
          color: #004370;
        }
        .order-status {
          background: #004A4D;
          color: #fff;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .order-meta {
          color: #3f4652;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }
        .order-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
        }
        .order-table th {
          text-align: left;
          padding: 0.5rem 0.75rem;
          border-bottom: 2px solid #e5e7eb;
          font-size: 0.85rem;
          color: #3f4652;
        }
        .order-table td {
          padding: 0.75rem;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.95rem;
        }
        .order-total {
          text-align: right;
          font-size: 1.1rem;
          font-weight: 700;
          color: #004370;
        }
      `}</style>
      <div className="order-card">
        <div className="order-header">
          <h2>Order #{order.id}</h2>
          <span className="order-status">{order.status}</span>
        </div>
        <div className="order-meta">
          <p>Customer: {order.customer}</p>
          <p>Date: {order.date}</p>
          <p>Locale: {locale}</p>
        </div>
        <table className="order-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{formatCurrency(item.unitPrice, locale)}</td>
                <td>{formatCurrency(item.quantity * item.unitPrice, locale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="order-total">Total: {formatCurrency(order.total, locale)}</p>
      </div>
    </div>
  )
}
