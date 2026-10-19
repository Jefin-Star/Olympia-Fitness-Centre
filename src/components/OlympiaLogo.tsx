import React from 'react';

interface OlympiaLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const OlympiaLogo: React.FC<OlympiaLogoProps> = ({
  className = '',
  variant = 'white',
  size = 'md',
  showSubtitle = true,
}) => {
  const textColor = variant === 'light' ? '#0a0a0a' : '#ffffff';
  const subtitleColor = variant === 'light' ? '#525252' : '#d4d4d4';
  const redColor = '#E50914';

  const heights = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heights[size]} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
        aria-label="Olympia Fitness Centre"
      >
        <defs>
          <filter id="crimsonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The Iconic Red Oval Ring behind the O */}
        <ellipse
          cx="270"
          cy="90"
          rx="72"
          ry="84"
          stroke={redColor}
          strokeWidth="24"
          fill="none"
        />

        {/* Inner shadow/accent on oval */}
        <ellipse
          cx="270"
          cy="90"
          rx="60"
          ry="72"
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="2"
          fill="none"
        />

        {/* Main OLYMPIA Lettermark */}
        <text
          x="270"
          y="108"
          textAnchor="middle"
          fill={textColor}
          fontFamily="'Cinzel', 'Times New Roman', 'Playfair Display', Georgia, serif"
          fontWeight="900"
          fontSize="92"
          letterSpacing="0.04em"
          style={{ textShadow: '0 3px 12px rgba(0,0,0,0.6)' }}
        >
          OLYMPIA
        </text>

        {/* FITNESS CENTRE Subtitle */}
        {showSubtitle && (
          <text
            x="270"
            y="146"
            textAnchor="middle"
            fill={subtitleColor}
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="0.32em"
          >
            FITNESS CENTRE
          </text>
        )}
      </svg>
    </div>
  );
};
