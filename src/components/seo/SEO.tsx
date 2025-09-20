import React from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const SITE_NAME = 'Cronlux';

const SEO: React.FC<Props> = ({ title, description, image, url }) => {
  const fullTitle = title ? `${title} • ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      {fullTitle && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {fullTitle && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {fullTitle && <meta name="twitter:title" content={fullTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;