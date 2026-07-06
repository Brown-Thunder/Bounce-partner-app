import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { storeData } from '../data/store'
import { IconCopy } from '../components/icons'

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

function Field({ label, value }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12.5, color: '#6B6B70', marginBottom: 6 }}>{label}</div>
      <div style={{ border: '1px solid #E8E6F0', borderRadius: 12, padding: '12px 14px', fontSize: 14.5 }}>{value}</div>
    </div>
  )
}

function DetailsTab() {
  const [enabled, setEnabled] = useState(() => Object.fromEntries(categories.map(c => [c.title, true])))
  const [selectedChannels, setSelectedChannels] = useState(() => Object.fromEntries(categories.map(c => [c.title, new Set(channels)])))
  const toggleCategory = (cat) => setEnabled(e => ({ ...e, [cat]: !e[cat] }))
  const toggleChannel = (cat, ch) => setSelectedChannels(s => {
    const next = new Set(s[cat])
    next.has(ch) ? next.delete(ch) : next.add(ch)
    return { ...s, [cat]: next }
  })
  return (
    <div style={{ padding: 16 }}>
      <Field label="First name" value="Amit" />
      <Field label="Last name" value="Dhunna" />
      <Field label="Phone number" value="🇬🇧 +44 7871 131125" />
      <Field label="Email" value="amit@citystasher.com" />
      <Field label="Language" value="English" />

      <div style={{ fontSize: 15, fontWeight: 600, marginTop: 20, marginBottom: 4 }}>Your notification preferences for {storeData.name}</div>
      <div style={{ fontSize: 13.5, color: '#6B6B70', marginBottom: 16 }}>Choose the topics you would like to get notified about.</div>
      {categories.map(cat => (
        <div key={cat.title} className="card" style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{cat.title}</div>
              <div style={{ fontSize: 13, color: '#9E9CA8' }}>{cat.description}</div>
            </div>
            <ToggleSwitch checked={enabled[cat.title]} onChange={() => toggleCategory(cat.title)} />
          </div>
          {enabled[cat.title] && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {channels.map(ch => {
                const active = selectedChannels[cat.title].has(ch)
                return (
                  <button key={ch} onClick={() => toggleChannel(cat.title, ch)} style={{ padding: '7px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: active ? '1.5px solid #5B4FE5' : '1.5px solid #E8E6F0', background: active ? '#EDEAFB' : 'white', color: active ? '#5B4FE5' : '#16151C' }}>{ch}</button>
                )
              })}
            </div>
          )}
        </div>
      ))}
      <button className="btn-orange" style={{ marginTop: 8, marginBottom: 20 }}>Save</button>
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <button style={{ background: 'none', border: '1.5px solid #C4432B', color: '#C4432B', borderRadius: 999, padding: '12px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%' }}>Delete User Profile</button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button style={{ background: 'none', border: 'none', color: '#9E9CA8', fontSize: 14, cursor: 'pointer' }}>Terms &amp; Conditions</button>
      </div>
    </div>
  )
}

function AffiliatesTab() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(storeData.affiliateLink).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Your affiliate Link</div>
      <div style={{ fontSize: 14, color: '#6B6B70', marginBottom: 20 }}>Share this link with others and earn money</div>
      <div style={{ background: '#F1EEFC', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{storeData.affiliateLink}</span>
        <button onClick={copy} style={{ background: '#5B4FE5', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
          <IconCopy size={16} />
        </button>
      </div>
      {copied && <div style={{ fontSize: 12.5, color: '#1E8E5A', marginTop: 8 }}>Copied!</div>}
    </div>
  )
}

export default function Profile() {
  const [tab, setTab] = useState('Details')
  return (
    <Layout showNav={false}>
      <Header title="Your profile" showBack border />
      <div className="sub-tabs">
        {['Details', 'Affiliates'].map(t => (
          <div key={t} className={`sub-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>
      {tab === 'Details' && <DetailsTab />}
      {tab === 'Affiliates' && <AffiliatesTab />}
    </Layout>
  )
}
