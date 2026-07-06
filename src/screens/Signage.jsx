import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconLink } from '../components/icons'

function MySignageTab() {
  return (
    <div style={{ padding: 16 }}>
      <button className="btn-orange" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
        <IconLink size={17} color="white" /> Connect
      </button>
      <div style={{ background: '#F1EEFC', borderRadius: 18, padding: 24, textAlign: 'center' }}>
        <div className="empty-illustration" style={{ background: '#E4DFFA' }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="7" width="16" height="11" rx="2" stroke="#5B4FE5" strokeWidth="1.6"/>
            <circle cx="12" cy="12.5" r="2.5" stroke="#5B4FE5" strokeWidth="1.6"/>
          </svg>
        </div>
        <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 10 }}>Connect your signage to unlock walk-ins</div>
        {['Customers can book easily using your signage.', 'Unlock walk-in bonuses and Boosts.'].map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, textAlign: 'left', padding: '4px 0' }}>
            <span style={{ color: '#16151C', fontWeight: 700, flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: 13.5 }}>{t}</span>
          </div>
        ))}
        <button className="btn-orange" style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <IconLink size={17} color="white" /> Connect signage
        </button>
      </div>
    </div>
  )
}

function OrdersTab() {
  const orders = [
    { name: 'Welcome kit', note: '1 unit', status: 'WAITING STOCK' },
    { name: 'QR Window Sticker', note: 'x2 included in welcome pack', status: 'delivered' },
    { name: 'Bag Tags x50', note: '', status: 'delivered' },
  ]
  return (
    <div style={{ padding: 16 }}>
      <button className="btn-orange" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>+ Order</button>

      <div style={{ background: '#F1EEFC', borderRadius: 16, padding: 18, marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>You're missing an A3 sticker</div>
        <div style={{ fontSize: 13, color: '#16151C', marginBottom: 12 }}>Partners with A3 stickers see a 25% revenue increase.</div>
        <button className="btn-orange-outline" style={{ width: 'auto' }}>Order now</button>
      </div>

      <div className="section-header" style={{ fontSize: 16 }}>Active orders</div>
      {orders.map(o => (
        <div key={o.name} className="card" style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: '#F5F4FA', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{o.name}</div>
            {o.note && <div style={{ fontSize: 12, color: '#9E9CA8', marginTop: 2 }}>{o.note}</div>}
          </div>
          {o.status === 'delivered' ? <span className="badge-active">Delivered</span> : <span style={{ background: '#FBEFD2', color: '#9A6B12', borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 700 }}>WAITING STOCK</span>}
        </div>
      ))}
    </div>
  )
}

export default function Signage() {
  const [tab, setTab] = useState('My Signage')
  return (
    <Layout showNav={false}>
      <Header title="Signage" showBack />
      <div className="sub-tabs">
        {['My Signage', 'Orders'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      {tab === 'My Signage' && <MySignageTab />}
      {tab === 'Orders' && <OrdersTab />}
    </Layout>
  )
}
