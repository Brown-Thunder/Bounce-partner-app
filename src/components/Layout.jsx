import StatusBar from './StatusBar'
import BottomNav from './BottomNav'

export default function Layout({ children, showNav = true, statusBg }) {
  return (
    <div className="app-wrapper">
      <StatusBar bg={statusBg} />
      <div className={`screen-content ${showNav ? '' : 'no-nav'}`}>
        {children}
      </div>
      {showNav && <BottomNav />}
    </div>
  )
}
