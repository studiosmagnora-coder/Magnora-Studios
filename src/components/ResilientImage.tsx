import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EDF4FC] via-[#DCE9F8] to-[#C8DDF5] text-[#073568] p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-lg bg-[#073568]/10 flex items-center justify-center mb-3">
          <Building2 className="w-6 h-6 text-[#073568]" aria-hidden="true" />
        </div>
        <span className="font-display font-semibold text-sm text-[#05294F]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
