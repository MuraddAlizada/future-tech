'use client';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = '', showText = true, size = 'medium' }: LogoProps) {
  const sizeConfig = {
    small: { icon: 40, text: '1.1rem', gap: '0.5rem' },
    medium: { icon: 50, text: '1.5rem', gap: '0.75rem' },
    large: { icon: 60, text: '1.8rem', gap: '1rem' },
  };

  const config = sizeConfig[size];

  return (
    <div 
      className={`d-flex align-items-center ${className}`} 
      style={{ gap: config.gap, cursor: 'pointer' }}
    >
      {/* Logo Icon with modern design */}
      <div 
        className="d-flex align-items-center justify-content-center position-relative"
        style={{
          width: `${config.icon}px`,
          height: `${config.icon}px`,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          borderRadius: '14px',
          color: 'white',
          fontSize: `${config.icon * 0.4}px`,
          fontWeight: '800',
          flexShrink: 0,
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
        }}
      >
        {/* Shine effect */}
        <div 
          className="logo-shine"
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
          }}
        />
        <span style={{ position: 'relative', zIndex: 1 }}>FT</span>
      </div>
      
      {/* Logo Text with gradient and modern typography */}
      {showText && (
        <div className="d-flex flex-column">
          <span 
            className="fw-bolder"
            style={{
              fontSize: config.text,
              letterSpacing: '1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2',
              textTransform: 'uppercase',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            FutureTech
          </span>
          <span 
            className="text-white"
            style={{
              fontSize: `${parseFloat(config.text) * 0.5}px`,
              letterSpacing: '2px',
              opacity: 0.7,
              marginTop: '-2px',
              fontWeight: '300',
            }}
          >
            SUMMIT
          </span>
        </div>
      )}
    </div>
  );
}

