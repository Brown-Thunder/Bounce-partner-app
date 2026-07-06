import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function OverviewTab() {
  return (
    <div style={{ padding: 16 }}>
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Yearly Earnings</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 100, marginBottom: 8 }}>
          {months.map(m => (
            <div key={m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ flex: 1, width: '100%', background: '#F5F5F5', borderRadius: '4px 4px 0 0', height: 4 }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {months.map(m => <div key={m} style={{ flex: 1, fontSize: 9, color: '#9E9E9E', textAlign: 'center' }}>{m}</div>)}
        </div>
        <div style={{ marginTop: 8, fontSize: 13, color: '#9E9E9E', textAlign: 'center' }}>£0 this year</div>
      </div>
      <button style={{ background: 'none', border: 'none', color: '#FF6B35', fontSize: 14, cursor: 'pointer', width: '100%', textAlign: 'center' }}>Have questions? Contact our support team</button>
    </div>
  )
}

function EarningDetailsTab() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ background: '#F5F5F5', borderRadius: 8, padding: '8px 14px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Last 30 days <span style={{ color: '#757575' }}>▾</span></div>
      </div>
      <div className="empty-state">
        <div className="empty-state-icon">💰</div>
        <div className="empty-state-title">No earnings yet</div>
        <div className="empty-state-text">Your earnings will appear here once you start receiving bookings.</div>
      </div>
    </div>
  )
}

function PayoutDetailsTab() {
  return (
    <div style={{ padding: 16 }}>
      <div className="card" style={{ marginBottom: 16 }}>
        {[{ label: 'Ready for payout', value: '£0.00' }, { label: 'Processing*', value: '£0.00' }, { label: 'Payout date', value: 'Aug 1' }].map(row => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #F5F5F5' }}>
            <span style={{ fontSize: 14, color: '#757575' }}>{row.label}</span>
            <span style={{ fontSize: 14, fontWeight: 600 }}>{row.value}</span>
          </div>
        ))}
        <button className="btn-blue" style={{ marginTop: 14 }}>Visit Stripe Dashboard</button>
      </div>
      <div style={{ fontSize: 13, color: '#9E9E9E', lineHeight: 1.5, marginBottom: 20 }}>*Recent earnings that are still being processed and will be included in a future payout.</div>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Payout breakdown</div>
      <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
        <div style={{ fontSize: 14, color: '#757575' }}>There are no payouts yet.</div>
      </div>
    </div>
  )
}

export default function Earnings() {
  const [tab, setTab] = useState('Overview')
  return (
    <Layout showNav={false}>
      <Header title="Earnings" showBack />
      <div className="sub-tabs">
        {['Overview', 'Earning details', 'Payout details'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} style={{ fontSize: 13 }}>{t}</div>
        ))}
      </div>
      {tab === 'Overview' && <OverviewTab />}
      {tab === 'Earning details' && <EarningDetailsTab />}
      {tab === 'Payout details' && <PayoutDetailsTab />}
    </Layout>
  )
}
