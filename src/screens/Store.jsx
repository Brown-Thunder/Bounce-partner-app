import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'
import { IconPhone, IconCamera, IconClose, IconInfo } from '../components/icons'

function QRCodeModal({ onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: '20px 20px 0 0', padding: 20, width: '100%', maxWidth: 390 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
          <button onClick={onClose} style={{ background: '#F5F4FA', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconClose size={16} /></button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 4 }}>{storeData.name} QR Code</div>
          <div style={{ fontSize: 13, color: '#6B6B70', marginBottom: 20 }}>Scan the QR code to open your booking page.</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="white"/>
              <rect x="10" y="10" width="56" height="56" fill="black"/><rect x="18" y="18" width="40" height="40" fill="white"/><rect x="26" y="26" width="24" height="24" fill="black"/>
              <rect x="134" y="10" width="56" height="56" fill="black"/><rect x="142" y="18" width="40" height="40" fill="white"/><rect x="150" y="26" width="24" height="24" fill="black"/>
              <rect x="10" y="134" width="56" height="56" fill="black"/><rect x="18" y="142" width="40" height="40" fill="white"/><rect x="26" y="150" width="24" height="24" fill="black"/>
              <rect x="74" y="74" width="8" height="8" fill="black"/><rect x="90" y="74" width="8" height="8" fill="black"/><rect x="106" y="74" width="8" height="8" fill="black"/><rect x="122" y="74" width="8" height="8" fill="black"/>
              <rect x="82" y="82" width="8" height="8" fill="black"/><rect x="98" y="82" width="8" height="8" fill="black"/><rect x="114" y="82" width="8" height="8" fill="black"/>
              <rect x="74" y="90" width="8" height="8" fill="black"/><rect x="90" y="90" width="8" height="8" fill="black"/><rect x="106" y="90" width="8" height="8" fill="black"/>
              <rect x="82" y="98" width="8" height="8" fill="black"/><rect x="114" y="98" width="8" height="8" fill="black"/>
              <rect x="74" y="106" width="8" height="8" fill="black"/><rect x="98" y="106" width="8" height="8" fill="black"/><rect x="122" y="106" width="8" height="8" fill="black"/>
              <rect x="90" y="114" width="8" height="8" fill="black"/><rect x="106" y="114" width="8" height="8" fill="black"/>
              <rect x="74" y="122" width="8" height="8" fill="black"/><rect x="82" y="122" width="8" height="8" fill="black"/><rect x="114" y="122" width="8" height="8" fill="black"/>
            </svg>
          </div>
          <div className="info-box" style={{ display: 'flex', gap: 8, textAlign: 'left', marginBottom: 16 }}>
            <IconInfo size={16} />
            <span>If your signage QR code isn't working, show this QR code to your customers so they can scan and make a booking.</span>
          </div>
          <button className="btn-orange" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  )
}

function OverviewTab({ onShowQR }) {
  const navigate = useNavigate()
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span className="exclusive-badge">EXCLUSIVE</span>
        <button onClick={onShowQR} className="link-text">Store QR code</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        {[{ value: '0.0', label: 'Store rating' }, { value: 'Cafe', label: 'Store type' }, { value: '20', label: 'Bag capacity' }].map((item, i) => (
          <div key={item.label} style={{ flex: 1, textAlign: 'center', borderLeft: i > 0 ? '1px solid #E8E6F0' : 'none' }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{item.value}</div>
            <div style={{ fontSize: 11.5, color: '#6B6B70', marginTop: 2 }}>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#F1EEFC', borderRadius: 16, padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Store commissions</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', marginBottom: 8 }}>Online Bookings</div>
        {['£1.50 per small bag stored', '£2.50 per regular bag stored', '£3.75 per odd-sized item stored'].map(row => (
          <div key={row} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #E4DFFA' }}>
            <span style={{ fontSize: 14 }}>{row}</span>
          </div>
        ))}
        <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B70', textTransform: 'uppercase', margin: '12px 0 8px' }}>Walk-in Bookings</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
          <span style={{ fontSize: 14 }}>Walk-in booking</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>85% of booking value</span>
        </div>
        <div style={{ fontSize: 12, color: '#9E9CA8', marginTop: 6 }}>(excl. service fee)</div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div className="section-header" style={{ margin: 0, fontSize: 15 }}>Contact info</div>
          <button className="link-text">Edit details</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconPhone size={17} />
          <span style={{ fontSize: 15 }}>{storeData.phone}</span>
        </div>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Location photos</div>
      <div className="info-box" style={{ marginBottom: 16 }}>
        Partners with storefront photos are preferred by customers and receive higher reviews on average. Add yours to help increase bookings.
        <button onClick={() => navigate('/store/photos/tutorial')} className="link-text" style={{ display: 'block', marginTop: 8 }}>Review photo guidelines</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {[1, 2].map(i => (
          <div key={i} style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3', background: '#F0EBE3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, color: '#9B8F7A' }}>{storeData.name}</span>
            <div style={{ position: 'absolute', top: 6, left: 6, width: 22, height: 22, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13L10 18L19 7" stroke="#1E8E5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{ position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M6 18L18 6" stroke="#C4432B" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </div>
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #E8E6F0', borderRadius: 14, padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
        <IconCamera size={22} />
        <div style={{ fontSize: 14, color: '#6B6B70', marginTop: 8 }}>Click to upload a photo</div>
      </div>
    </div>
  )
}

function HoursTab() {
  const days = [
    { day: 'Monday', hours: '07:00 – 19:00' }, { day: 'Tuesday', hours: '07:00 – 19:00' },
    { day: 'Wednesday', hours: '07:00 – 19:00' }, { day: 'Thursday', hours: '07:00 – 19:00' },
    { day: 'Friday', hours: '07:00 – 19:00' }, { day: 'Saturday', hours: '08:00 – 18:00' },
    { day: 'Sunday', hours: null },
  ]
  return (
    <div style={{ padding: 16 }}>
      <div className="section-header" style={{ fontSize: 16 }}>Opening hours</div>
      <div style={{ fontSize: 13.5, color: '#6B6B70', marginBottom: 16, lineHeight: 1.4 }}>
        You can add <button className="link-text" style={{ fontSize: 13.5 }}>exceptions</button> for holidays or special closures.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {days.map(d => (
          <div key={d.day} style={{ border: '1px solid #E8E6F0', borderRadius: 14, padding: '12px 14px', opacity: d.hours ? 1 : 0.5 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, marginBottom: 4 }}>{d.day}</div>
            <div style={{ fontSize: 13, color: d.hours ? '#6B6B70' : '#C4432B' }}>{d.hours || 'Closed'}</div>
          </div>
        ))}
      </div>
      <button className="btn-orange-outline" style={{ width: '100%', marginBottom: 10 }}>Edit opening hours</button>
      <button style={{ background: 'none', border: '1.5px solid #C4432B', color: '#C4432B', borderRadius: 999, padding: '12px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', marginBottom: 24 }}>Close store for today</button>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div className="section-header" style={{ margin: 0, fontSize: 16 }}>Exceptions and holidays</div>
      </div>
      <div className="card" style={{ marginBottom: 12, textAlign: 'center', padding: '24px' }}>
        <div style={{ color: '#6B6B70', fontSize: 14 }}>No exceptions set</div>
      </div>
      <button className="btn-orange-outline" style={{ width: '100%' }}>+ Add exception</button>
    </div>
  )
}

export default function Store() {
  const [tab, setTab] = useState('Overview')
  const [showQR, setShowQR] = useState(false)
  return (
    <Layout>
      <Header title={storeData.name} border />
      <div className="sub-tabs">
        {['Overview', 'Hours'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      {tab === 'Overview' && <OverviewTab onShowQR={() => setShowQR(true)} />}
      {tab === 'Hours' && <HoursTab />}
      {showQR && <QRCodeModal onClose={() => setShowQR(false)} />}
    </Layout>
  )
}
