import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import RequirementRow from '../components/RequirementRow'
import { boostsData } from '../data/boosts'
import { IconPiggyBank, IconCardExchange, IconWindowSearch, IconSignage, IconTicket, IconSupport, IconPlane, IconLock, IconCheckCircle } from '../components/icons'

const iconMap = {
  piggy: IconPiggyBank,
  tip: IconCardExchange,
  walk: IconCardExchange,
  card: IconCardExchange,
  marketing: IconSignage,
  search: IconWindowSearch,
  signage: IconSignage,
  early: IconPlane,
  support: IconSupport,
  ticket: IconTicket,
}

export default function BoostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const boost = boostsData.find(b => b.id === parseInt(id)) || boostsData[0]
  const isLocked = boost.status === 'locked'
  const isReady = boost.status === 'ready'
  const isActive = boost.status === 'active'
  const metCount = boost.requirements.filter(r => r.met).length
  const totalCount = boost.requirements.length
  const Icon = iconMap[boost.icon] || IconPiggyBank

  return (
    <Layout showNav={false}>
      <Header title={boost.name} showClose />
      <div style={{ height: 200, background: '#F1EEFC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0, gap: 12 }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', background: isLocked ? '#E4E1EF' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={44} color={isLocked ? '#B7B4C9' : '#5B4FE5'} />
        </div>
        {isLocked && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', borderRadius: 20, padding: '5px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <IconLock size={13} color="#6B6B70" />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#6B6B70' }}>LOCKED</span>
          </div>
        )}
        {isActive && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', borderRadius: 20, padding: '5px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1E8E5A' }}>✓ ACTIVE</span>
          </div>
        )}
        {isReady && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', borderRadius: 20, padding: '5px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#5B4FE5' }}>ACTIVATE</span>
          </div>
        )}
      </div>
      <div style={{ padding: '20px 16px', paddingBottom: 90 }}>
        <div style={{ marginBottom: 20 }}>
          <div className="section-header">What this unlocks</div>
          <p style={{ fontSize: 14, color: '#6B6B70', lineHeight: 1.6 }}>{boost.description}</p>
          {boost.previewFeatures && (
            <div style={{ marginTop: 12 }}>
              {boost.previewFeatures.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '6px 0' }}>
                  <span style={{ color: '#16151C', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14 }}>{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {boost.rateCard && (
          <div style={{ marginBottom: 20 }}>
            {boost.rateCard.map(r => (
              <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F0EFF7' }}>
                <span style={{ fontSize: 14 }}>{r.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>{r.boosted}</span>
                  {r.diff && <span style={{ fontSize: 13, color: '#1E8E5A', fontWeight: 600 }}>{r.diff}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div className="section-header" style={{ margin: 0 }}>Requirements</div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#5B4FE5', background: '#DDD6F7', borderRadius: 20, padding: '3px 10px' }}>{metCount}/{totalCount}</span>
          </div>
          <div style={{ fontSize: 13, color: '#9E9CA8', marginBottom: 12 }}>Requirement updates may take a few hours</div>
          {boost.requirements.map((req, i) => <RequirementRow key={i} req={req} />)}
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 390, padding: '16px', background: 'white', borderTop: '1px solid #E8E6F0' }}>
        {isActive && (
          <>
            <button className="btn-green" disabled>Active</button>
          </>
        )}
        {isReady && <button className="btn-orange" onClick={() => navigate('/boosts')}>Activate Boost</button>}
        {isLocked && (
          <>
            <button className="btn-grey" disabled>Locked</button>
            <div style={{ textAlign: 'center', fontSize: 12, color: '#9E9CA8', marginTop: 8 }}>Meet requirements to unlock</div>
          </>
        )}
      </div>
    </Layout>
  )
}
