import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

function MySignageTab() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ background: 'linear-gradient(135deg, #FF6B35, #E55A2B)', borderRadius: 12, padding: 20, marginBottom: 16, color: 'white' }}>
        <div style={{ fontSize: 22 }}>🚀</div>
        <div style={{ fontSize: 16, fontWeight: 700, margin: '8px 0 4px' }}>Turn walk-ins into paying customers</div>
        <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 12 }}>Attract passing customers to your store.</div>
        <div style={{ fontSize: 13, marginBottom: 16 }}>✓ Customers can book easily using your signage.</div>
        <button style={{ background: 'white', color: '#FF6B35', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Order now</button>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Connected Signage</div>
      <div className="card" style={{ textAlign: 'center', padding: '24px', marginBottom: 12 }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>🪧</div>
        <div style={{ fontSize: 14, color: '#757575', marginBottom: 4 }}>No signage connected yet</div>
        <div style={{ fontSize: 13, color: '#9E9E9E', lineHeight: 1.5, marginBottom: 16 }}>Connect your Bounce signage to unlock walk-in bonuses and Boosts</div>
        <button className="btn-orange-outline">+ Connect signage</button>
      </div>
    </div>
  )
}

function OrdersTab() {
  const orders = [
    { name: 'QR Window Sticker', note: 'x2 included in welcome pack', status: 'delivered' },
    { name: 'Bag Tags x50', note: '', status: 'delivered' },
    { name: 'Premium Flags', note: '', status: 'order' },
  ]
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Order signage</div>
      {orders.map(o => (
        <div key={o.name} className="card" style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{o.name}</div>
            {o.note && <div style={{ fontSize: 12, color: '#9E9E9E', marginTop: 2 }}>{o.note}</div>}
          </div>
          {o.status === 'delivered' ? <span className="badge-active">Delivered</span> : <button className="btn-orange" style={{ width: 'auto', padding: '8px 14px', fontSize: 13 }}>Order Now</button>}
        </div>
      ))}
    </div>
  )
}

export default function Signage() {
  const [tab, setTab] = useState('My signage')
  return (
    <Layout showNav={false}>
      <Header title="Signage" showBack />
      <div className="sub-tabs">
        {['My signage', 'Orders'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      {tab === 'My signage' && <MySignageTab />}
      {tab === 'Orders' && <OrdersTab />}
    </Layout>
  )
}
