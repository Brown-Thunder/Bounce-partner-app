const base = { fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }

export const IconTag = ({ size = 20, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M11.5 3H5C3.9 3 3 3.9 3 5V11.5C3 12 3.2 12.5 3.6 12.9L11.6 20.9C12.4 21.7 13.6 21.7 14.4 20.9L20.9 14.4C21.7 13.6 21.7 12.4 20.9 11.6L12.9 3.6C12.5 3.2 12 3 11.5 3Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <circle cx="8" cy="8" r="1.5" fill={color}/>
  </svg>
)

export const IconClock = ({ size = 20, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M12 7V12L15.5 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconChat = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M4 5C4 4.4 4.4 4 5 4H19C19.6 4 20 4.4 20 5V15C20 15.6 19.6 16 19 16H9L5 19.5V16H5C4.4 16 4 15.6 4 15V5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
  </svg>
)

export const IconBell = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M12 3C10.3 3 9 4.3 9 6C6.6 6.8 5 9.2 5 12V16L3.4 18.2C3.1 18.5 3.3 19 3.7 19H20.3C20.7 19 20.9 18.5 20.6 18.2L19 16V12C19 9.2 17.4 6.8 15 6C15 4.3 13.7 3 12 3Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M9.5 19C9.5 20.4 10.6 21.5 12 21.5C13.4 21.5 14.5 20.4 14.5 19" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
)

export const IconBank = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M3 10L12 4L21 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10V19M9.5 10V19M14.5 10V19M19 10V19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M3 19H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M3 21.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconRocket = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M12 2C12 2 17 6.5 17 12.5C17 15 15.5 17 12 19C8.5 17 7 15 7 12.5C7 6.5 12 2 12 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="2" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M7 14L4 17.5L7.5 17M17 14L20 17.5L16.5 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 19L9 22L12 20.5L15 22L14 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconCheckCircle = ({ size = 24, filled = false, color = '#16151C', strokeWidth = 1.7 }) => (
  filled ? (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="11" fill={color}/>
      <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="9.5" stroke="#D8D5E8" strokeWidth={strokeWidth}/>
    </svg>
  )
)

export const IconChevronRight = ({ size = 16, color = '#C8C4DE', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
    <path d="M6 4L10 8L6 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconLock = ({ size = 16, color = '#6B6B70', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M8 11V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconInfo = ({ size = 18, color = '#6B6B70', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M12 11V16.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="12" cy="7.8" r="1.1" fill={color}/>
  </svg>
)

export const IconCamera = ({ size = 24, color = '#6B6B70', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M4 8C4 7.4 4.4 7 5 7H7.5L8.5 5H15.5L16.5 7H19C19.6 7 20 7.4 20 8V18C20 18.6 19.6 19 19 19H5C4.4 19 4 18.6 4 18V8Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="3.5" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
)

export const IconPin = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M12 21C12 21 19 14.5 19 9.5C19 5.6 15.9 3 12 3C8.1 3 5 5.6 5 9.5C5 14.5 12 21 12 21Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <circle cx="12" cy="9.5" r="2.5" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
)

export const IconStar = ({ size = 18, filled = false, color = '#5B4FE5' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.5L14.9 8.9L21.8 9.7L16.6 14.3L18.2 21.2L12 17.5L5.8 21.2L7.4 14.3L2.2 9.7L9.1 8.9L12 2.5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const IconSearch = ({ size = 20, color = '#6B6B70', strokeWidth = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="11" cy="11" r="7" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M20 20L16.5 16.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconSliders = ({ size = 20, color = '#16151C', strokeWidth = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M4 6H14M18 6H20M4 12H8M12 12H20M4 18H16M20 18H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="16" cy="6" r="2" fill="white" stroke={color} strokeWidth={strokeWidth}/>
    <circle cx="10" cy="12" r="2" fill="white" stroke={color} strokeWidth={strokeWidth}/>
    <circle cx="18" cy="18" r="2" fill="white" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
)

export const IconDownload = ({ size = 20, color = '#16151C', strokeWidth = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 17V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconCopy = ({ size = 18, color = 'white', strokeWidth = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="8" y="8" width="12" height="12" rx="2" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M16 8V6C16 4.9 15.1 4 14 4H6C4.9 4 4 4.9 4 6V14C4 15.1 4.9 16 6 16H8" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
)

export const IconClose = ({ size = 22, color = '#6B6B70', strokeWidth = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconGear = ({ size = 20, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M12 3V5.5M12 18.5V21M21 12H18.5M5.5 12H3M18.4 5.6L16.6 7.4M7.4 16.6L5.6 18.4M18.4 18.4L16.6 16.6M7.4 7.4L5.6 5.6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconBag = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M6 8H18L19 21H5L6 8Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M9 8V6C9 4.3 10.3 3 12 3C13.7 3 15 4.3 15 6V8" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
)

export const IconSupport = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth}/>
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M5.5 5.5L9 9M19 5.5L15 9M5.5 19L9 15.5M19 19L15 15.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconPlane = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M3 12L21 4L13 22L11 14L3 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M11 14L21 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconPhone = ({ size = 18, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M5 4H9L11 9L8.5 10.5C9.5 12.7 11.3 14.5 13.5 15.5L15 13L20 15V19C20 20.1 19.1 21 18 21C10.3 20.5 4.5 14.7 4 7C4 5.9 3.9 4 5 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
  </svg>
)

export const IconPiggyBank = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M4 13C4 9.5 7.5 7 12 7C14 7 15.7 7.5 17 8.5L20 8L19 11C19.6 11.9 20 12.9 20 14C20 17.3 16.4 20 12 20C7.6 20 4 17.3 4 14V13Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <circle cx="15.5" cy="12.5" r="0.8" fill={color}/>
    <path d="M7 20V22M15 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M9.5 7.5L9 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconCardExchange = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="6" width="14" height="10" rx="2" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M3 10H17" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M17 15L21 15M21 15L19 13M21 15L19 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconSignage = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="4" width="18" height="12" rx="1.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M8 20L9.5 16M16 20L14.5 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M7 9H17M7 12.5H13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconTicket = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M3 9C3 7.9 3.9 7 5 7H19C20.1 7 21 7.9 21 9V10C19.9 10 19 10.9 19 12C19 13.1 19.9 14 21 14V15C21 16.1 20.1 17 19 17H5C3.9 17 3 16.1 3 15V14C4.1 14 5 13.1 5 12C5 10.9 4.1 10 3 10V9Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M13 7.5V16.5" stroke={color} strokeWidth={strokeWidth} strokeDasharray="2 2"/>
  </svg>
)

export const IconWindowSearch = ({ size = 22, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="11" cy="11" r="6" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M15.5 15.5L20 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M8 11H14M11 8V14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconLink = ({ size = 20, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M9.5 14.5L14.5 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M11.5 6.5L13 5C14.4 3.6 16.7 3.6 18.1 5C19.5 6.4 19.5 8.7 18.1 10.1L16.6 11.6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M12.5 17.5L11 19C9.6 20.4 7.3 20.4 5.9 19C4.5 17.6 4.5 15.3 5.9 13.9L7.4 12.4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)

export const IconGrid = ({ size = 20, color = 'white', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth={strokeWidth}/>
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth={strokeWidth}/>
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth={strokeWidth}/>
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
)

export const IconMail = ({ size = 20, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M3 7L12 13L21 7" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
  </svg>
)

export const IconCalendarPlus = ({ size = 20, color = '#16151C', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke={color} strokeWidth={strokeWidth}/>
    <path d="M16 3V7M8 3V7M3 10H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M12 13V18M9.5 15.5H14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
)
