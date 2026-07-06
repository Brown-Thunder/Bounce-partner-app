import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const categories = [
  { title: 'Billing', description: 'Tips, bonus payments, refunds, etc.' },
  { title: 'Information', description: 'Digests, tags, etc.' },
  { title: 'Reminders', description: 'Opening hours reminders, holidays, etc.' },
  { title: 'Bookings', description: 'Notifications from bookings, cancellations, etc.' },
]
const channels = ['Email', 'SMS', 'WhatsApp', 'App Notifications']

function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="toggle-slider" />
    </label>
  )
}

export default function AccountNotifications() {
  const [prefs, setPrefs] = useState(() => {
    const init = {}
    categories.forEach(c => { init[c.title] = {}; channels.forEach(ch => { init[c.title][ch] = true }) })
    return init
  })
  const toggle = (cat, ch) => setPrefs(p => ({ ...p, [cat]: { ...p[cat], [ch]: !p[cat][ch] } }))
  return (
    <Layout showNav={false}>
      <Header title="Notifications" showBack />
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Your notification preferences for The Old Bakery Cafe</div>
        <div style={{ fontSize: 14, color: '#757575', marginBottom: 20 }}>Choose the topics you would like to get notified about.</div>
        {categories.map(cat => (
          <div key={cat.title} className="card" style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{cat.title}</div>
            <div style={{ fontSize: 13, color: '#9E9E9E', marginBottom: 14 }}>{cat.description}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {channels.map(ch => (
                <div key={ch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: '1 1 40%', minWidth: 80 }}>
                  <ToggleSwitch checked={prefs[cat.title][ch]} onChange={() => toggle(cat.title, ch)} />
                  <span style={{ fontSize: 12, color: '#757575', textAlign: 'center' }}>{ch}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="btn-orange" style={{ marginBottom: 20 }}>Save</button>
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <button style={{ background: 'none', border: 'none', color: '#D32F2F', fontSize: 14, cursor: 'pointer' }}>Delete User Profile</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{ background: 'none', border: 'none', color: '#9E9E9E', fontSize: 14, cursor: 'pointer' }}>Terms &amp; Conditions</button>
        </div>
      </div>
    </Layout>
  )
}
