import { useNavigate } from 'react-router-dom'
import { IconClose } from './icons'

export default function Header({ title, showBack = false, showClose = false, rightContent, bg = 'white', titleStyle = {}, border = false }) {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: 56, background: bg, display: 'flex', alignItems: 'center', padding: '10px 16px', borderBottom: border ? '1px solid #E8E6F0' : 'none', flexShrink: 0, position: 'sticky', top: 0, zIndex: 20 }}>
      {showBack && (
        <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#16151C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div style={{ flex: 1, ...titleStyle }}>
        {typeof title === 'string' ? (
          <span style={{ fontSize: 20, fontWeight: 800, color: '#16151C', letterSpacing: -0.4 }}>{title}</span>
        ) : title}
      </div>
      {rightContent && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{rightContent}</div>
      )}
      {showClose && (
        <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #E8E6F0', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 8 }}>
          <IconClose size={18} />
        </button>
      )}
    </div>
  )
}
