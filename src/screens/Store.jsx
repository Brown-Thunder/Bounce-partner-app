import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'

function OverviewTab() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}><span className="exclusive-badge">EXCLUSIVE</span></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 16 }}>
        {[{ icon: '⭐', value: '0.0', label: 'Store rating' }, { icon: '☕', value: 'Cafe', label: 'Store type' }, { icon: '🛄', value: '20', label: 'Bag capacity' }].map(item => (
          <div key={item.label} className="card" style={{ textAlign: 'center', padding: '12px 8px' }}>
            <div style={{ fontSize: 22 }}>{item.icon}</div>
            <div style={{ fontSize: 16, fontWeight: 700, margin: '4px 0 2px' }}>{item.value}</div>
            <div style={{ fontSize: 11, color: '#757575' }}>{item.label}</div>
          </div>
        ))}
      </div>
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Store commissions</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#757575', textTransform: 'uppercase', marginBottom: 8 }}>Online Bookings</div>
        {['£1.50 per small bag stored', '£2.50 per regular bag stored', '£3.75 per odd-sized item stored'].map(row => (
          <div key={row} style={{ display: 'flex', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid #F5F5F5' }}>
            <span style={{ fontSize: 14 }}>{row}</span>
          </div>
        ))}
        <div style={{ fontSize: 12, fontWeight: 600, color: '#757575', textTransform: 'uppercase', margin: '12px 0 8px' }}>Walk-in Bookings</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid #F5F5F5' }}>
          <span style={{ fontSize: 14 }}>Walk-in booking</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>85% of booking value</span>
        </div>
        <div style={{ fontSize: 12, color: '#9E9E9E', marginTop: 6 }}>(excl. service fee)</div>
      </div>
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#757575', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Contact info</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>📞</span>
          <span style={{ fontSize: 15 }}>{storeData.phone}</span>
        </div>
      </div>
      <button className="btn-orange-outline" style={{ width: '100%' }}>Edit details</button>
    </div>
  )
}

function HoursTab() {
  return (
    <div style={{ padding: 16 }}>
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Opening Hours</div>
        {[{ day: 'Mon–Fri', hours: '07:00 – 19:00' }, { day: 'Saturday', hours: '08:00 – 18:00' }, { day: 'Sunday', hours: '09:00 – 17:00' }].map(row => (
          <div key={row.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid #F5F5F5' }}>
            <span style={{ fontSize: 14, color: '#757575' }}>{row.day}</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{row.hours}</span>
          </div>
        ))}
      </div>
      <button className="btn-orange-outline" style={{ width: '100%', marginBottom: 10 }}>✏️ Edit opening hours</button>
      <button style={{ background: 'none', border: '1.5px solid #D32F2F', color: '#D32F2F', borderRadius: 10, padding: '12px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', marginBottom: 20 }}>🔴 Close store for today</button>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Upcoming Exceptions</div>
      <div className="card" style={{ marginBottom: 12, textAlign: 'center', padding: '20px' }}>
        <div style={{ color: '#757575', fontSize: 14 }}>No exceptions set</div>
      </div>
      <button className="btn-orange-outline" style={{ width: '100%' }}>+ Add exception</button>
    </div>
  )
}

function PhotosTab() {
  const navigate = useNavigate()
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Location photos</div>
      <div style={{ background: '#E3F2FD', borderRadius: 10, padding: 14, marginBottom: 16 }}>
        <div style={{ fontSize: 14, color: '#1565C0', lineHeight: 1.5, marginBottom: 8 }}>Partners with storefront photos are preferred by customers and receive higher reviews on average. Add yours to help increase bookings.</div>
        <button onClick={() => navigate('/store/photos/tutorial')} style={{ background: 'none', border: 'none', color: '#FF6B35', fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: 0 }}>Review photo guidelines</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {[1, 2].map(i => (
          <div key={i} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', background: '#F0EBE3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 32 }}>☕</span>
            <span style={{ fontSize: 10, color: '#757575', textAlign: 'center', padding: '0 8px' }}>The Old Bakery Cafe</span>
            <div style={{ position: 'absolute', bottom: 6, left: 6, background: '#E8F5E9', color: '#2E7D32', borderRadius: 20, padding: '2px 8px', fontSize: 11, fontWeight: 600 }}>✓ Approved</div>
          </div>
        ))}
      </div>
      <div style={{ border: '2px dashed #E8E8E8', borderRadius: 10, padding: '24px', textAlign: 'center', cursor: 'pointer', marginBottom: 8 }}>
        <div style={{ fontSize: 24, marginBottom: 6 }}>📷</div>
        <div style={{ fontSize: 14, color: '#757575' }}>+ Click to upload a photo</div>
      </div>
      <div style={{ fontSize: 12, color: '#9E9E9E', textAlign: 'center' }}>Accepts .jpg and .png</div>
    </div>
  )
}

function QRCodeTab() {
  return (
    <div style={{ padding: 16 }}>
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>The Old Bakery Cafe QR Code</div>
        <div style={{ fontSize: 13, color: '#757575', marginBottom: 20 }}>Scan the QR code to open your booking page</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="white"/>
            <rect x="10" y="10" width="56" height="56" fill="black"/>
            <rect x="18" y="18" width="40" height="40" fill="white"/>
            <rect x="26" y="26" width="24" height="24" fill="black"/>
            <rect x="134" y="10" width="56" height="56" fill="black"/>
            <rect x="142" y="18" width="40" height="40" fill="white"/>
            <rect x="150" y="26" width="24" height="24" fill="black"/>
            <rect x="10" y="134" width="56" height="56" fill="black"/>
            <rect x="18" y="142" width="40" height="40" fill="white"/>
            <rect x="26" y="150" width="24" height="24" fill="black"/>
            <rect x="74" y="74" width="8" height="8" fill="black"/>
            <rect x="90" y="74" width="8" height="8" fill="black"/>
            <rect x="106" y="74" width="8" height="8" fill="black"/>
            <rect x="122" y="74" width="8" height="8" fill="black"/>
            <rect x="82" y="82" width="8" height="8" fill="black"/>
            <rect x="98" y="82" width="8" height="8" fill="black"/>
            <rect x="114" y="82" width="8" height="8" fill="black"/>
            <rect x="74" y="90" width="8" height="8" fill="black"/>
            <rect x="90" y="90" width="8" height="8" fill="black"/>
            <rect x="106" y="90" width="8" height="8" fill="black"/>
            <rect x="82" y="98" width="8" height="8" fill="black"/>
            <rect x="114" y="98" width="8" height="8" fill="black"/>
            <rect x="74" y="106" width="8" height="8" fill="black"/>
            <rect x="98" y="106" width="8" height="8" fill="black"/>
            <rect x="122" y="106" width="8" height="8" fill="black"/>
            <rect x="90" y="114" width="8" height="8" fill="black"/>
            <rect x="106" y="114" width="8" height="8" fill="black"/>
            <rect x="74" y="122" width="8" height="8" fill="black"/>
            <rect x="82" y="122" width="8" height="8" fill="black"/>
            <rect x="114" y="122" width="8" height="8" fill="black"/>
          </svg>
        </div>
        <div className="info-box">ℹ️ If your signage QR code is not working, show this QR code to your customers for them to scan and make a booking.</div>
      </div>
    </div>
  )
}

export default function Store() {
  const [tab, setTab] = useState('Overview')
  const EditIcon = () => (
    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M11 4H4C3.5 4 3 4.5 3 5V20C3 20.5 3.5 21 4 21H19C19.5 21 20 20.5 20 20V13" stroke="#757575" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.5 2.5C19.3 1.7 20.7 1.7 21.5 2.5C22.3 3.3 22.3 4.7 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="#757575" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </button>
  )
  return (
    <Layout>
      <Header title={storeData.name} rightContent={<EditIcon />} />
      <div className="sub-tabs">
        {['Overview', 'Hours', 'Photos', 'Store QR code'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} style={{ fontSize: 12 }}>{t}</div>
        ))}
      </div>
      {tab === 'Overview' && <OverviewTab />}
      {tab === 'Hours' && <HoursTab />}
      {tab === 'Photos' && <PhotosTab />}
      {tab === 'Store QR code' && <QRCodeTab />}
    </Layout>
  )
}
