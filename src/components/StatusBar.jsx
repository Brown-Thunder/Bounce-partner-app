export default function StatusBar({ bg = 'white' }) {
  return (
    <div style={{ height: 44, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', flexShrink: 0 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: '#1A1A1A' }}>09:32</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#1A1A1A' }}>●●●●</span>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.7 10.7 0.5 8 0.5C5.3 0.5 2.8 1.7 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z" fill="#1A1A1A"/>
          <path d="M8 5.5C9.7 5.5 11.2 6.2 12.3 7.3L13.7 5.9C12.2 4.4 10.2 3.5 8 3.5C5.8 3.5 3.8 4.4 2.3 5.9L3.7 7.3C4.8 6.2 6.3 5.5 8 5.5Z" fill="#1A1A1A"/>
          <circle cx="8" cy="10.5" r="1.5" fill="#1A1A1A"/>
        </svg>
        <span style={{ fontSize: 11, color: '#1A1A1A' }}>🔋</span>
      </div>
    </div>
  )
}
