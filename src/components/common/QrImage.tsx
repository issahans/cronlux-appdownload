import React from 'react';

type Props = {
  url: string;
  size?: number; // pixels, default 240
  className?: string;
  alt?: string;
};

const QrImage: React.FC<Props> = ({ url, size = 240, className, alt }) => {
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    url
  )}`;
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt ?? `QR code for ${url}`}
      className={className}
      loading="lazy"
    />
  );
};

export default QrImage;