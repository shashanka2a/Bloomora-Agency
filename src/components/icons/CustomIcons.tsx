import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const CustomArrowRight = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M5 12h14m-7-7l7 7-7 7" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CustomSparkles = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
      fill="currentColor"
    />
    <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="6" cy="18" r="1.5" fill="currentColor" opacity="0.4"/>
  </svg>
);

export const CustomCode = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M16 18l6-6-6-6M8 6l-6 6 6 6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const CustomPalette = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path 
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" 
      fill="currentColor"
    />
  </svg>
);

export const CustomRocket = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" 
      fill="currentColor"
    />
    <path 
      d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" 
      fill="currentColor"
    />
    <path 
      d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const CustomTrendingUp = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <polyline 
      points="22,7 13.5,15.5 8.5,10.5 2,17" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <polyline 
      points="16,7 22,7 22,13" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const CustomShield = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
      fill="currentColor"
    />
    <path 
      d="M9 12l2 2 4-4" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CustomZap = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <polygon 
      points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" 
      fill="currentColor"
    />
  </svg>
);

export const CustomStar = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <polygon 
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" 
      fill="currentColor"
    />
  </svg>
);

export const CustomMessageCircle = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
      fill="currentColor"
    />
    <circle cx="9" cy="12" r="1" fill="white"/>
    <circle cx="15" cy="12" r="1" fill="white"/>
  </svg>
);

export const CustomCalendar = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CustomClock = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CustomChefHat = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M6 2l3 6v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8l3-6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M9 22V12h6v10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Domain-specific portfolio icons
export const CustomRestaurant = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M3 2v7c0 1.1.9 2 2 2h4v11a1 1 0 0 0 2 0V11h4c1.1 0 2-.9 2-2V2H3z" 
      fill="currentColor"
    />
    <path 
      d="M19 2v20h2V2h-2z" 
      fill="currentColor"
    />
    <circle cx="8" cy="6" r="1" fill="white"/>
    <circle cx="12" cy="6" r="1" fill="white"/>
  </svg>
);

export const CustomAdventure = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12 2L2 7l10 5 10-5-10-5z" 
      fill="currentColor"
    />
    <path 
      d="M2 17l10 5 10-5M2 12l10 5 10-5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="7" r="2" fill="white"/>
  </svg>
);

export const CustomDating = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="3" fill="white"/>
  </svg>
);

export const CustomEvent = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="15" r="1" fill="currentColor"/>
    <circle cx="12" cy="15" r="1" fill="currentColor"/>
    <circle cx="16" cy="15" r="1" fill="currentColor"/>
  </svg>
);

export const CustomFintech = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="7" r="1" fill="currentColor"/>
    <circle cx="9" cy="7" r="1" fill="currentColor"/>
    <circle cx="12" cy="7" r="1" fill="currentColor"/>
    <path d="M16 13h4M16 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CustomPayment = ({ className = "w-4 h-4", size }: IconProps) => (
  <svg 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="7" r="1" fill="currentColor"/>
    <circle cx="9" cy="7" r="1" fill="currentColor"/>
    <circle cx="12" cy="7" r="1" fill="currentColor"/>
    <path d="M16 13h4M16 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 2l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Service illustrations as SVG components
export const CustomWebsiteIllustration = ({ className = "w-full h-full", size }: IconProps) => (
  <svg 
    width={size || 400} 
    height={size || 300} 
    viewBox="0 0 400 300" 
    fill="none" 
    className={className}
  >
    {/* Browser window */}
    <rect x="20" y="20" width="360" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
    <rect x="20" y="20" width="360" height="40" rx="8" fill="#e2e8f0"/>
    
    {/* Browser controls */}
    <circle cx="40" cy="40" r="6" fill="#ef4444"/>
    <circle cx="60" cy="40" r="6" fill="#f59e0b"/>
    <circle cx="80" cy="40" r="6" fill="#10b981"/>
    
    {/* Content area */}
    <rect x="40" y="80" width="320" height="180" rx="4" fill="white" stroke="#e2e8f0"/>
    
    {/* Header */}
    <rect x="60" y="100" width="280" height="20" rx="2" fill="#3b82f6"/>
    <rect x="60" y="130" width="200" height="12" rx="2" fill="#6b7280"/>
    
    {/* Content blocks */}
    <rect x="60" y="160" width="80" height="60" rx="4" fill="#f3f4f6"/>
    <rect x="160" y="160" width="80" height="60" rx="4" fill="#f3f4f6"/>
    <rect x="260" y="160" width="80" height="60" rx="4" fill="#f3f4f6"/>
    
    {/* Mobile device */}
    <rect x="300" y="100" width="60" height="100" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
    <rect x="305" y="105" width="50" height="90" rx="4" fill="white"/>
    <rect x="310" y="115" width="40" height="8" rx="2" fill="#3b82f6"/>
    <rect x="310" y="130" width="30" height="4" rx="1" fill="#9ca3af"/>
    <rect x="310" y="140" width="35" height="4" rx="1" fill="#9ca3af"/>
    <rect x="310" y="150" width="25" height="4" rx="1" fill="#9ca3af"/>
  </svg>
);

export const CustomSaaSIllustration = ({ className = "w-full h-full", size }: IconProps) => (
  <svg 
    width={size || 400} 
    height={size || 300} 
    viewBox="0 0 400 300" 
    fill="none" 
    className={className}
  >
    {/* Cloud infrastructure */}
    <ellipse cx="200" cy="80" rx="120" ry="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
    <ellipse cx="180" cy="70" rx="20" ry="15" fill="#3b82f6"/>
    <ellipse cx="220" cy="70" rx="20" ry="15" fill="#3b82f6"/>
    
    {/* Server racks */}
    <rect x="80" y="140" width="60" height="120" rx="4" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
    <rect x="90" y="150" width="40" height="8" rx="2" fill="#10b981"/>
    <rect x="90" y="165" width="40" height="8" rx="2" fill="#10b981"/>
    <rect x="90" y="180" width="40" height="8" rx="2" fill="#10b981"/>
    <rect x="90" y="195" width="40" height="8" rx="2" fill="#10b981"/>
    
    <rect x="260" y="140" width="60" height="120" rx="4" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
    <rect x="270" y="150" width="40" height="8" rx="2" fill="#10b981"/>
    <rect x="270" y="165" width="40" height="8" rx="2" fill="#10b981"/>
    <rect x="270" y="180" width="40" height="8" rx="2" fill="#10b981"/>
    <rect x="270" y="195" width="40" height="8" rx="2" fill="#10b981"/>
    
    {/* Database */}
    <ellipse cx="200" cy="200" rx="40" ry="20" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
    <rect x="160" y="200" width="80" height="40" rx="4" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
    <ellipse cx="200" cy="240" rx="40" ry="20" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
    
    {/* Connection lines */}
    <path d="M140 160 Q170 180 200 200" stroke="#6b7280" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
    <path d="M260 160 Q230 180 200 200" stroke="#6b7280" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
    <path d="M200 120 Q200 160 200 200" stroke="#6b7280" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
  </svg>
);

export const CustomAnalyticsIllustration = ({ className = "w-full h-full", size }: IconProps) => (
  <svg 
    width={size || 400} 
    height={size || 300} 
    viewBox="0 0 400 300" 
    fill="none" 
    className={className}
  >
    {/* Dashboard frame */}
    <rect x="20" y="20" width="360" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
    
    {/* Header */}
    <rect x="40" y="40" width="320" height="40" rx="4" fill="#1f2937"/>
    <rect x="50" y="50" width="100" height="20" rx="2" fill="#3b82f6"/>
    
    {/* Chart area */}
    <rect x="40" y="100" width="320" height="120" rx="4" fill="white" stroke="#e2e8f0"/>
    
    {/* Bar chart */}
    <rect x="60" y="180" width="20" height="30" fill="#3b82f6"/>
    <rect x="90" y="160" width="20" height="50" fill="#10b981"/>
    <rect x="120" y="140" width="20" height="70" fill="#f59e0b"/>
    <rect x="150" y="120" width="20" height="90" fill="#ef4444"/>
    <rect x="180" y="150" width="20" height="60" fill="#8b5cf6"/>
    <rect x="210" y="170" width="20" height="40" fill="#06b6d4"/>
    
    {/* Line chart */}
    <path d="M60 200 Q90 180 120 160 Q150 140 180 120 Q210 150 240 170 Q270 190 300 180" 
          stroke="#3b82f6" strokeWidth="3" fill="none"/>
    <circle cx="60" cy="200" r="3" fill="#3b82f6"/>
    <circle cx="120" cy="160" r="3" fill="#3b82f6"/>
    <circle cx="180" cy="120" r="3" fill="#3b82f6"/>
    <circle cx="240" cy="170" r="3" fill="#3b82f6"/>
    <circle cx="300" cy="180" r="3" fill="#3b82f6"/>
    
    {/* KPI cards */}
    <rect x="40" y="240" width="100" height="30" rx="4" fill="white" stroke="#e2e8f0"/>
    <rect x="50" y="250" width="80" height="8" rx="2" fill="#10b981"/>
    <rect x="50" y="260" width="60" height="4" rx="1" fill="#6b7280"/>
    
    <rect x="150" y="240" width="100" height="30" rx="4" fill="white" stroke="#e2e8f0"/>
    <rect x="160" y="250" width="80" height="8" rx="2" fill="#f59e0b"/>
    <rect x="160" y="260" width="60" height="4" rx="1" fill="#6b7280"/>
    
    <rect x="260" y="240" width="100" height="30" rx="4" fill="white" stroke="#e2e8f0"/>
    <rect x="270" y="250" width="80" height="8" rx="2" fill="#ef4444"/>
    <rect x="270" y="260" width="60" height="4" rx="1" fill="#6b7280"/>
  </svg>
);
