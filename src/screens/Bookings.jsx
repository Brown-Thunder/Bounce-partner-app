import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { bookingsData } from '../data/bookings'

const statusColor = {
  'checked-in': { bg: '#E8F5E9', text: '#2E7D32' },
  'pending': { bg: '#FFF3ED', text: '#FF6B35' },
  'awaiting': { bg: '#F5F5F5', text: '#757575' },
}

export default function Bookings() {
  const [tab, setTab] = useState('Today')
  const navigate = useNavigate()
  const FilterIcon = () => (
    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M7 12H17M11 18H13" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/></svg>
    </button>
  )
  return (
    <Layout>
      <Header title="Bookings" rightContent={<FilterIcon />} />
      <div className="sub-tabs">
        {['Today', 'Upcoming', 'Past'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      <div style={{ padding: '12px 16px' }}>
        {tab === 'Today' ? bookingsData.map(booking => {
          const sc = statusColor[booking.status]
          return (
            <div key={booking.id} className="card" style={{ marginBottom: 10, cursor: 'pointer' }} onClick={() => navigate(`/bookings/${booking.id}`)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 13, color: '#757575', marginBottom: 2 }}>#{booking.id}</div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{booking.customer}</div>
                </div>
                <span style={{ background: sc.bg, color: sc.text, borderRadius: 20, padding: '4px 10px', fontSize: 12, fontWeight: 600 }}>{booking.statusLabel}</span>
              </div>
              <div style={{ height: 1, background: '#F5F5F5', marginBottom: 8 }} />
              <div style={{ fontSize: 13, color: '#757575', marginBottom: 4 }}>⏰ {booking.timeInfo}</div>
              <div style={{ fontSize: 13, color: '#757575', marginBottom: 4 }}>🧳 {booking.bags}</div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>💷 {booking.amount}</div>
            </div>
          )
        }) : (
          <div className="empty-state">
            <div className="empty-state-icon">📅</div>
            <div className="empty-state-title">No {tab.toLowerCase()} bookings</div>
            <div className="empty-state-text">Bookings will appear here</div>
          </div>
        )}
      </div>
    </Layout>
  )
}
