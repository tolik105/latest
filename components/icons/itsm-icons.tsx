import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

// AKRIN Brand Colors for consistency
const akrinColors = {
  purple: '#7A28FF',
  gray: '#1a1a1a',
  white: '#FFFFFF'
}

// Incident Management Icon - Custom designed for ITSM
export const IncidentIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    <path 
      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="12" cy="20" r="2" fill="currentColor" fillOpacity="0.6"/>
  </svg>
)

// Analytics Dashboard Icon - Professional data visualization design
export const AnalyticsIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Dashboard frame */}
    <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04"/>

    {/* Header bar */}
    <rect x="3" y="3" width="18" height="4" rx="2.5" fill="currentColor" fillOpacity="0.12"/>

    {/* Main trend line */}
    <path d="M6 16L8.5 13L11 15L13.5 11L16 13L18.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Data points */}
    <circle cx="6" cy="16" r="1.2" fill="currentColor" fillOpacity="0.8"/>
    <circle cx="8.5" cy="13" r="1.2" fill="currentColor" fillOpacity="0.8"/>
    <circle cx="11" cy="15" r="1.2" fill="currentColor" fillOpacity="0.8"/>
    <circle cx="13.5" cy="11" r="1.2" fill="currentColor" fillOpacity="0.8"/>
    <circle cx="16" cy="13" r="1.2" fill="currentColor" fillOpacity="0.8"/>
    <circle cx="18.5" cy="9" r="1.2" fill="currentColor" fillOpacity="0.8"/>

    {/* Bar chart elements */}
    <rect x="7" y="18" width="1" height="2" fill="currentColor" fillOpacity="0.6"/>
    <rect x="9" y="17" width="1" height="3" fill="currentColor" fillOpacity="0.6"/>
    <rect x="11" y="19" width="1" height="1" fill="currentColor" fillOpacity="0.6"/>
    <rect x="13" y="16" width="1" height="4" fill="currentColor" fillOpacity="0.6"/>
    <rect x="15" y="17.5" width="1" height="2.5" fill="currentColor" fillOpacity="0.6"/>

    {/* Dashboard indicators */}
    <circle cx="6" cy="5" r="0.8" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="8.5" cy="5" r="0.8" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="11" cy="5" r="0.8" fill="currentColor" fillOpacity="0.4"/>
  </svg>
)

// Team Management Icon - Professional skill matching design
export const TeamIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Primary team member */}
    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M4 20V18.5C4 16.6 5.6 15 7.5 15H10.5C12.4 15 14 16.6 14 18.5V20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>

    {/* Secondary team member */}
    <circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08"/>
    <path d="M20 20V19C20 17.9 19.1 17 18 17H16.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>

    {/* Skill matching connections */}
    <path d="M9 11L12 14M16 11L13 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6"/>

    {/* Central skill hub */}
    <circle cx="12.5" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>

    {/* Skill indicators */}
    <circle cx="7" cy="9" r="0.8" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="11" cy="9" r="0.8" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="16" cy="9" r="0.6" fill="currentColor" fillOpacity="0.5"/>

    {/* Team collaboration indicator */}
    <path d="M6 13L8 15M11 13L13 15" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
  </svg>
)

// Automation Icon - Refined AI/Automation design
export const AutomationIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Central processor/brain */}
    <rect x="8" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08"/>

    {/* Neural network connections */}
    <path d="M12 8V6M12 18V16M8 12H6M18 12H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M9.5 9.5L8 8M14.5 9.5L16 8M9.5 14.5L8 16M14.5 14.5L16 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>

    {/* AI nodes */}
    <circle cx="12" cy="6" r="1.5" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="12" cy="18" r="1.5" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="6" cy="12" r="1.5" fill="currentColor" fillOpacity="0.6"/>
    <circle cx="18" cy="12" r="1.5" fill="currentColor" fillOpacity="0.6"/>

    {/* Corner nodes */}
    <circle cx="8" cy="8" r="1" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="16" cy="8" r="1" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="8" cy="16" r="1" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="16" cy="16" r="1" fill="currentColor" fillOpacity="0.4"/>

    {/* Central processing indicator */}
    <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.15"/>
    <circle cx="12" cy="12" r="0.8" fill="currentColor"/>
  </svg>
)

// Service Level Agreement Icon
export const SLAIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M8 4L9 2M16 4L15 2M4 8L2 9M4 16L2 15M20 8L22 9M20 16L22 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
)

// Knowledge Base Icon
export const KnowledgeIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
    <path d="M8 7H16M8 11H16M8 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="15" r="1" fill="currentColor"/>
  </svg>
)

// Asset Management Icon
export const AssetIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
    <circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
    <path d="M16 8L18 10L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 19H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 19V21M18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Security Shield Icon - Enhanced enterprise security design
export const SecurityIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Main shield */}
    <path d="M12 2.5L4.5 6.5V12.5C4.5 16.8 7.2 20.8 11.2 21.9C11.5 22 11.8 22 12.1 21.9C16.1 20.8 18.8 16.8 18.8 12.5V6.5L12 2.5Z"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.06"/>

    {/* Security layers */}
    <path d="M12 5L7 8V12.5C7 15.5 9 18.2 11.5 19C11.7 19.1 11.9 19.1 12.1 19C14.6 18.2 16.6 15.5 16.6 12.5V8L12 5Z"
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>

    {/* Lock mechanism */}
    <rect x="10" y="11" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2"/>
    <path d="M10.5 11V9.5C10.5 8.7 11.2 8 12 8C12.8 8 13.5 8.7 13.5 9.5V11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>

    {/* Security verification checkmark */}
    <path d="M9.5 15.5L11 17L14.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Central security indicator */}
    <circle cx="12" cy="12.5" r="0.8" fill="currentColor" fillOpacity="0.3"/>
  </svg>
)

// Performance Monitoring Icon
export const PerformanceIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M3 12H7L10 3L14 21L17 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="3" r="1" fill="currentColor"/>
    <circle cx="14" cy="21" r="1" fill="currentColor"/>
    <path d="M3 12V14C3 15.1046 3.89543 16 5 16H19C20.1046 16 21 15.1046 21 14V12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fillOpacity="0.1"/>
  </svg>
)

// Notification Bell Icon - AKRIN branded
export const NotificationIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="6" r="3" fill="currentColor" fillOpacity="0.8"/>
  </svg>
)
