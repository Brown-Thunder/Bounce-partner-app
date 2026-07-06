import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { bookingsData } from '../data/bookings'
import { IconTag, IconChat, IconSupport, IconBag, IconInfo } from '../components/icons'

const statusPill = {
  'checked-in': { bg: '#D7F5E6', text: '#1E8E5A', label: 'CHECKED IN' },
  'pending': { bg: '#DDD6F7', text: '#5B4FE5', label: 'UPCOMING' },
  'awaiting': { bg: '#F0EFF7', text: '#6B6B70', label: 'AWAITING' },
}

function CheckInSuccess({ booking, onDone }) {
  return (
    <Layout showNav={false}>
      <Header title="" showClose />
      <div style={{ padding: '20px 24px', textAlign: 'center' }}>
        <div className="empty-illustration">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M7 12L11 16L19 6" stroke="#5B4FE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 12L11 16L19 6" stroke="#5B4FE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(0,2)"/></svg>
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Check-in successful!</div>
        <div className="info-box" style={{ marginBottom: 24, textAlign: 'left' }}>Pick up: {booking.timeInfo}</div>
        <button className="btn-orange" style={{ marginBottom: 12 }} onClick={onDone}>Take bag picture</button>
        <button className="link-text" onClick={onDone}>Undo check-in (6)</button>
      </div>
    </Layout>
  )
}

export default function BookingDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const booking = bookingsData.find(b => b.id === id) || bookingsData[0]
  const [checkedIn, setCheckedIn] = useState(booking.status === 'checked-in')
  const [showSuccess, setShowSuccess] = useState(false)
  const isPending = booking.status === 'pending' && !checkedIn
  const pill = statusPill[checkedIn ? 'checked-in' : booking.status]

  if (showSuccess) return <CheckInSuccess booking={booking} onDone={() => setShowSuccess(false)} />

  return (
    <Layout showNav={false}>
      <Header title="Booking Details" showBack />
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ fontSize: 20, fontWeight: 800 }}>{booking.customer}</div>
          <span style={{ background: pill.bg, color: pill.text, borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700 }}>{pill.label}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <span style={{ background: '#F0EFF7', color: '#6B6B70', borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 700 }}>ONLINE BOOKING</span>
          <span style={{ fontSize: 12.5, color: '#9E9CA8' }}>{booking.id}</span>
        </div>

        <div style={{ background: '#F5F4FA', borderRadius: 16, padding: 16, marginBottom: 12, display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: '#6B6B70', marginBottom: 4 }}>Drop off</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{checkedIn ? booking.checkIn : 'Today, 9:30 AM'}</div>
          </div>
          <div style={{ width: 1, background: '#E8E6F0', margin: '0 16px' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: '#6B6B70', marginBottom: 4 }}>Pick up</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{booking.estimatedCheckout || 'Today, 2:00 PM'}</div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#F1EEFC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <IconBag size={22} color="#5B4FE5" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{booking.bags}</div>
            <div style={{ fontSize: 12.5, color: '#6B6B70' }}>Purses, tote bags</div>
          </div>
        </div>
        <button className="link-text" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
          <IconInfo size={15} /> Learn to identify bag types
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
          {[
            { label: 'Add more bags', icon: IconTag },
            { label: 'Chat with customer', icon: IconChat },
            { label: 'Reach out to Support', icon: IconSupport },
          ].map(action => (
            <div key={action.label} style={{ background: '#F5F4FA', borderRadius: 14, padding: '14px 8px', textAlign: 'center', cursor: 'pointer' }}>
              <action.icon size={20} color="#5B4FE5" />
              <div style={{ fontSize: 11, fontWeight: 600, marginTop: 8, lineHeight: 1.3 }}>{action.label}</div>
            </div>
          ))}
        </div>

        {isPending && <button className="btn-orange" style={{ marginBottom: 12 }} onClick={() => { setCheckedIn(true); setShowSuccess(true) }}>Check In</button>}
        {checkedIn && <button className="btn-green" style={{ marginBottom: 12 }}>Check Out</button>}
        <button style={{ background: 'none', border: 'none', color: '#C4432B', fontSize: 14, cursor: 'pointer', width: '100%', textAlign: 'center', padding: '8px' }}>Report an issue</button>
      </div>
    </Layout>
  )
}
