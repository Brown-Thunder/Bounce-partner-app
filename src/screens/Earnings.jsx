import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconDownload } from '../components/icons'

const Dropdown = ({ label }) => (
  <div style={{ background: '#F5F4FA', borderRadius: 8, padding: '8px 14px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
    {label} <span style={{ color: '#6B6B70' }}>▾</span>
  </div>
)

function OverviewTab() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <Dropdown label="2026" />
        <Dropdown label="July" />
      </div>
      <div style={{ background: '#F1EEFC', borderRadius: 14, padding: '14px 16px', marginBottom: 4 }}>
        <div style={{ fontSize: 13, color: '#6B6B70', marginBottom: 4 }}>Total earned</div>
        <div style={{ fontSize: 24, fontWeight: 800 }}>£0.00</div>
        <div style={{ fontSize: 12, color: '#9E9CA8', marginTop: 2 }}>No changes from last month</div>
      </div>
      {[
        { label: 'From online bookings', value: '£0.00' },
        { label: 'From walk-in bookings', value: '£0.00' },
        { label: 'Bonuses & Referrals', value: '£0.00' },
      ].map(row => (
        <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 4px', borderBottom: '1px solid #F0EFF7' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{row.label}</div>
            <div style={{ fontSize: 12, color: '#9E9CA8', marginTop: 2 }}>No changes from last month</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>{row.value}</div>
        </div>
      ))}
      <button className="support-link" style={{ marginTop: 16 }}>Have questions? Contact our support team</button>
    </div>
  )
}

function EarningDetailsTab() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <Dropdown label="2026" />
        <Dropdown label="July" />
      </div>
      <button className="link-text" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, opacity: 0.5 }} disabled>
        <IconDownload size={16} color="#9E9CA8" /> Download CSV
      </button>
      <div className="empty-state">
        <div className="empty-state-title">There are no invoices for this period</div>
      </div>
    </div>
  )
}

function PayoutDetailsTab() {
  return (
    <div style={{ padding: 16 }}>
      {[{ label: 'Ready for payout', value: '£0.00' }, { label: 'Processing*', value: '£0.00' }, { label: 'Payout date', value: 'Aug 1' }].map(row => (
        <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #F0EFF7' }}>
          <span style={{ fontSize: 14, color: '#6B6B70' }}>{row.label}</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{row.value}</span>
        </div>
      ))}
      <button className="link-text" style={{ marginTop: 16, marginBottom: 4 }}>Visit Stripe Dashboard</button>
      <div style={{ fontSize: 13, color: '#9E9CA8', lineHeight: 1.5, marginTop: 12, marginBottom: 8 }}>*Recent earnings that are still being processed and will be included in a future payout.</div>
      <a href="#" style={{ fontSize: 13, color: '#5B4FE5', fontWeight: 500 }}>Read more in our FAQs page ↗</a>
      <div style={{ fontSize: 15, fontWeight: 700, marginTop: 24, marginBottom: 12 }}>Payout breakdown</div>
      <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
        <div style={{ fontSize: 14, color: '#6B6B70' }}>There are no payouts yet.</div>
      </div>
    </div>
  )
}

export default function Earnings() {
  const [tab, setTab] = useState('Overview')
  return (
    <Layout>
      <Header title="Earnings" showBack border />
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
