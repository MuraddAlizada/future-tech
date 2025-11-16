'use client';

interface SponsorLogoProps {
  name: string;
  logo?: string;
}

export default function SponsorLogo({ name, logo }: SponsorLogoProps) {
  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials(name);

  return (
    <div className="sponsor-logo-wrapper d-flex flex-column align-items-center justify-content-center h-100">
      {logo ? (
        <img 
          src={logo} 
          alt={name} 
          className="img-fluid whiten mb-2" 
          style={{ maxWidth: "80%", maxHeight: "60%", objectFit: "contain" }}
          onError={(e) => {
            // Hide image and show text fallback
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : null}
      <div 
        className="sponsor-text-logo d-flex align-items-center justify-content-center"
        style={{
          width: logo ? '100%' : '80px',
          height: logo ? 'auto' : '80px',
          minHeight: logo ? '60px' : '80px',
          background: logo ? 'transparent' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          color: 'white',
          fontSize: logo ? '0.85rem' : '1.8rem',
          fontWeight: 'bold',
          marginBottom: logo ? '0.5rem' : '0',
          display: logo ? 'none' : 'flex',
        }}
      >
        {!logo && initials}
      </div>
      <span 
        className="text-white text-center mt-2" 
        style={{ fontSize: '0.7rem', opacity: 0.8, lineHeight: '1.2' }}
      >
        {name}
      </span>
    </div>
  );
}

