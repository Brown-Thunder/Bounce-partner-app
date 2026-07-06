import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { bookingsData } from '../data/bookings'

export default function BookingDetail() {
  const { id } = useParams()
  const booking = bookingsData.find(b => b.id === id) || bookingsData[0]
  const isCheckedIn = booking.status === 'checked-in'
  const isPending = booking.status === 'pending'
  const statusBannerBg = isCheckedIn ? '#E8F5E9' : isPending ? '#FFF3ED' : '#F5F5F5'
  const statusBannerColor = isCheckedIn ? '#2E7D32' : isPending ? '#FF6B35' : '#757575'
  const statusBannerText = isCheckedIn ? 'Currently Checked In' : isPending ? 'Pending Check-in' : 'Awaiting'
  return (
    <Layout showNav={false}>
      <Header title={`#${booking.id}`} showBack />
      <div style={{ padding: '16px' }}>
        <div style={{ background: statusBannerBg, color: statusBannerColor, borderRadius: 10, padding: '12px 16px', marginBottom: 16, fontWeight: 600, fontSize: 15, textAlign: 'center' }}>{statusBannerText}</div>
        <div className="card" style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 13, color: '#757575', marginBottom: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>Customer Info</div>
          {[
            { label: 'Name', value: booking.customer },
            { label: 'Booking ref', value: booking.id },
            { label: 'Bags', value: booking.bags },
            ...(isCheckedIn ? [{ label: 'Check-in time', value: booking.checkIn }, { label: 'Est. checkout', value: booking.estimatedCheckout }] : [{ label: 'Booked for', value: booking.timeInfo }]),
          ].map(row => (
            <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F5F5F5' }}>
              <span style={{ color: '#757575', fontSize: 14 }}>{row.label}</span>
              <span style={{ color: '#1A1A1A', fontSize: 14, fontWeight: 500 }}>{row.value}</span>
            </div>
          ))}
        </div>
        {booking.bagTags.length > 0 && (
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, color: '#757575', marginBottom: 6 }}>Assigned bag tags</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{booking.bagTags.join(', ')}</div>
          </div>
        )}
        {isCheckedIn && <button className="btn-green" style={{ marginBottom: 12 }}>Check Out</button>}
        {isPending && <button className="btn-orange" style={{ marginBottom: 12 }}>Check In</button>}
        <button style={{ background: 'none', border: 'none', color: '#FF6B35', fontSize: 14, cursor: 'pointer', width: '100%', textAlign: 'center', padding: '8px' }}>Report an issue</button>
      </div>
    </Layout>
  )
}
