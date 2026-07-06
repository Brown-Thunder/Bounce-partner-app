import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { bookingsData } from '../data/bookings'
import { IconSearch, IconSliders, IconDownload } from '../components/icons'

const statusColor = {
  'checked-in': { bg: '#D7F5E6', text: '#1E8E5A' },
  'pending': { bg: '#DDD6F7', text: '#5B4FE5' },
  'awaiting': { bg: '#F0EFF7', text: '#6B6B70' },
}

export default function Bookings() {
  const [tab, setTab] = useState('Today')
  const navigate = useNavigate()
  return (
    <Layout>
      <Header title="Bookings" border />
      <div style={{ padding: '12px 16px', display: 'flex', gap: 8, borderBottom: '1px solid #E8E6F0' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: '#F5F4FA', borderRadius: 12, padding: '10px 14px' }}>
          <IconSearch size={17} />
          <span style={{ fontSize: 14, color: '#9E9CA8' }}>Search booking</span>
        </div>
        <button style={{ background: '#F5F4FA', border: 'none', borderRadius: 12, width: 40, flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconSliders size={18} /></button>
        <button style={{ background: '#F5F4FA', border: 'none', borderRadius: 12, width: 40, flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconDownload size={18} /></button>
      </div>
      <div className="pill-tabs">
        {['Today', 'Upcoming', 'Past'].map(t => (
          <div key={t} className={`pill-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      <div style={{ padding: '4px 16px 16px' }}>
        {tab === 'Today' ? bookingsData.map(booking => {
          const sc = statusColor[booking.status]
          return (
            <div key={booking.id} className="card" style={{ marginBottom: 10, cursor: 'pointer' }} onClick={() => navigate(`/bookings/${booking.id}`)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{booking.customer}</div>
                <span style={{ background: sc.bg, color: sc.text, borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>{booking.statusLabel}</span>
              </div>
              <div style={{ fontSize: 13.5, color: '#6B6B70', marginBottom: 12 }}>{booking.timeInfo}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#5B4FE5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/></svg>
                  </div>
                  <span style={{ fontSize: 12.5, color: '#6B6B70' }}>{booking.id}</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{booking.bags.split(',')[0].replace(/^\d+\s*/, m => m)}</div>
              </div>
            </div>
          )
        }) : (
          <div className="empty-state">
            <div className="empty-state-icon">📅</div>
            <div className="empty-state-title">No {tab.toLowerCase()} bookings</div>
            <div className="empty-state-text">Bookings will appear here</div>
          </div>
        )}
        <button onClick={() => navigate('/account')} className="support-link" style={{ marginTop: 4 }}>Have questions? Contact our support team</button>
      </div>
    </Layout>
  )
}
