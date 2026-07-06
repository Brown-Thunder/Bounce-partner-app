import { useNavigate } from 'react-router-dom'

export default function Header({ title, showBack = false, rightContent, bg = 'white', titleStyle = {} }) {
  const navigate = useNavigate()
  return (
    <div style={{ height: 56, background: bg, display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid #E8E8E8', flexShrink: 0, position: 'relative' }}>
      {showBack && (
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 8px 8px 0', display: 'flex', alignItems: 'center', color: '#FF6B35' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div style={{ flex: 1, ...titleStyle }}>
        {typeof title === 'string' ? (
          <span style={{ fontSize: 17, fontWeight: 700, color: '#1A1A1A' }}>{title}</span>
        ) : title}
      </div>
      {rightContent && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{rightContent}</div>
      )}
    </div>
  )
}
