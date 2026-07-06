import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { IconChat, IconBell, IconTag, IconClock, IconGrid, IconBank } from '../components/icons'

const ProgressRing = ({ value, total, size = 56 }) => {
  const stroke = 7
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = value / total
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#DCD6F7" strokeWidth={stroke} fill="none" />
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#5B4FE5" strokeWidth={stroke} fill="none"
        strokeDasharray={c} strokeDashoffset={c * (1 - pct)} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} />
    </svg>
  )
}

const tasksData = [
  { id: 1, title: 'Order security tags & signage', desc: 'Make your store stand out to your customers and make sure bags are always tagged', done: false, cta: 'Order', path: '/store/signage' },
  { id: 2, title: 'Connect your bank account', desc: 'Connect your bank account to Stripe to get paid', done: true, cta: 'Connect', path: null },
  { id: 3, title: 'Add your store hours', desc: 'Let customers know when you are open for drop-off and pick-up', done: true, cta: null, path: null },
  { id: 4, title: 'Upload storefront photos', desc: 'Photos help customers recognize your store', done: true, cta: null, path: null },
  { id: 5, title: 'Set your bag capacity', desc: 'Tell us how many bags you can store at once', done: true, cta: null, path: null },
  { id: 6, title: 'Complete your profile', desc: 'Add your contact details so we can reach you', done: true, cta: null, path: null },
]

export default function Home() {
  const navigate = useNavigate()
  const [showAllTasks, setShowAllTasks] = useState(false)
  const incompleteTasks = tasksData.filter(t => !t.done)
  const completedCount = tasksData.filter(t => t.done).length
  const visibleTasks = showAllTasks ? tasksData : incompleteTasks

  const ChatButton = () => (
    <button onClick={() => navigate('/messages')} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconChat size={20} />
    </button>
  )
  const BellButton = () => (
    <button onClick={() => navigate('/notifications')} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <IconBell size={20} />
      <span className="notif-dot" />
    </button>
  )

  return (
    <Layout>
      <Header
        title={<span style={{ fontSize: 26, fontWeight: 800, color: '#16151C', letterSpacing: -0.6 }}>Hi, Amit!</span>}
        rightContent={<div style={{ display: 'flex', gap: 8 }}><ChatButton /><BellButton /></div>}
      />
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, overflowX: 'auto' }}>
          <button onClick={() => navigate('/store/signage')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8E6F0', borderRadius: 20, padding: '8px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer', color: '#16151C', flexShrink: 0 }}>
            <IconTag size={15} /> Link Signage
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8E6F0', borderRadius: 20, padding: '8px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer', color: '#16151C', flexShrink: 0 }}>
            <IconClock size={15} /> Add Holidays/Vacations
          </button>
        </div>

        <div style={{ background: '#F1EEFC', borderRadius: 16, padding: 16, marginBottom: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
              <ProgressRing value={5} total={10} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#E4DFFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 8.5L21 9.5L16 14L17.5 20.5L12 17L6.5 20.5L8 14L3 9.5L9.5 8.5L12 2Z" stroke="#5B4FE5" strokeWidth="1.7" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#16151C' }}>Unlocked Boosts</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#16151C' }}>5 of 10</div>
            </div>
          </div>
          <button onClick={() => navigate('/boosts')} className="link-text" style={{ marginTop: 6, textAlign: 'left' }}>See how to unlock more &gt;</button>
        </div>

        <div className="orange-banner" style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 500, flex: 1, marginRight: 8 }}>You have Boosts waiting for activation! <button onClick={() => navigate('/boosts/5')} className="link-text" style={{ fontSize: 14 }}>Activate</button></span>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span className="section-header" style={{ margin: 0 }}>Pending Tasks</span>
            {incompleteTasks.length > 0 && (
              <span style={{ background: '#5B4FE5', color: 'white', borderRadius: '50%', width: 20, height: 20, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{incompleteTasks.length}</span>
            )}
          </div>
          <div style={{ fontSize: 13, color: '#6B6B70', marginBottom: 12, lineHeight: 1.4 }}>Complete all tasks to unlock benefits and boost your earnings!</div>

          {visibleTasks.map(task => (
            <div key={task.id} className="card" style={{ marginBottom: 10, opacity: task.done && !showAllTasks ? 0.6 : 1 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  {task.done ? (
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#16151C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13L10 18L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  ) : (
                    <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #D8D5E8' }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{task.title}</div>
                  <div style={{ fontSize: 13, color: '#6B6B70', lineHeight: 1.4, marginBottom: task.cta && !task.done ? 12 : 0 }}>{task.desc}</div>
                  {task.cta && !task.done && <button onClick={() => task.path && navigate(task.path)} className="btn-orange-outline" style={{ width: 'auto' }}>{task.cta}</button>}
                </div>
              </div>
            </div>
          ))}

          {completedCount > 0 && (
            <button onClick={() => setShowAllTasks(s => !s)} className="link-text" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {showAllTasks ? 'Hide completed tasks' : `Show all tasks (${tasksData.length})`}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transform: showAllTasks ? 'rotate(180deg)' : 'none' }}><path d="M6 9L12 15L18 9" stroke="#5B4FE5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          )}
        </div>

        <div style={{ background: '#F1EEFC', borderRadius: 16, padding: 20, marginBottom: 16, position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>You're missing an A3 sticker</div>
          <div style={{ fontSize: 14, color: '#16151C', marginBottom: 16, maxWidth: '75%' }}>Partners with A3 stickers see a 25% revenue increase.</div>
          <button onClick={() => navigate('/store/signage')} className="btn-orange-outline" style={{ width: 'auto' }}>Order now</button>
        </div>

        <button onClick={() => navigate('/account')} className="support-link" style={{ marginBottom: 12 }}>Have questions? Contact our support team</button>

        <button onClick={() => navigate('/check-in-out')} className="btn-blue" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <IconGrid size={18} />
          Check in/out
        </button>
      </div>
    </Layout>
  )
}
