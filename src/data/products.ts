import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'CRONLUX Smart Camera Pro',
    slug: 'smart-camera-pro',
    category: 'security',
    subcategory: 'surveillance',
    price: 299,
    originalPrice: 349,
    rating: 4.8,
    reviewCount: 1247,
    availability: 'in-stock',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
      'https://images.pexels.com/photos/371906/pexels-photo-371906.jpeg'
    ],
    description: 'Advanced 4K smart camera with AI-powered motion detection and night vision capabilities.',
    highlights: [
      '4K Ultra HD recording',
      'AI motion detection',
      'Night vision up to 30ft',
      'Two-way audio communication',
      'Weather-resistant design'
    ],
    specifications: {
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Field of View': '130° diagonal',
      'Night Vision': 'Up to 30 feet',
      'Storage': 'Local & Cloud options',
      'Connectivity': 'WiFi 6, Bluetooth 5.0',
      'Power': 'Rechargeable battery / Wired'
    },
    faqs: [
      {
        question: 'How long does the battery last?',
        answer: 'Up to 6 months with typical usage, depending on recording frequency and settings.'
      },
      {
        question: 'Is cloud storage required?',
        answer: 'No, the camera supports local storage via microSD card up to 256GB.'
      }
    ],
    whatsInBox: [
      'CRONLUX Smart Camera Pro',
      'Magnetic mounting base',
      'USB-C charging cable',
      'Quick start guide',
      'Mounting screws and anchors'
    ]
  },
  {
    id: '2',
    name: 'CRONLUX Smart Door Lock Elite',
    slug: 'smart-door-lock-elite',
    category: 'security',
    subcategory: 'access-control',
    price: 399,
    rating: 4.9,
    reviewCount: 892,
    availability: 'in-stock',
    images: [
      'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg',
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
    ],
    description: 'Premium smart lock with fingerprint, keypad, and smartphone access.',
    highlights: [
      'Multiple access methods',
      'Advanced fingerprint scanner',
      'Auto-lock functionality',
      'Tamper alerts',
      'Easy installation'
    ],
    specifications: {
      'Access Methods': 'Fingerprint, Keypad, Smartphone, Physical Key',
      'Fingerprint Capacity': 'Up to 100 users',
      'Battery Life': '8-12 months',
      'Material': 'Aircraft-grade aluminum',
      'Weather Rating': 'IP65',
      'Compatibility': 'Standard deadbolt holes'
    },
    faqs: [
      {
        question: 'Will this work with my existing door?',
        answer: 'Yes, it fits standard deadbolt holes and works with doors 1.5" to 2" thick.'
      },
      {
        question: 'What happens if the battery dies?',
        answer: 'You can use the physical key or connect a 9V battery to the external terminals for emergency power.'
      }
    ],
    whatsInBox: [
      'CRONLUX Smart Door Lock Elite',
      'Interior assembly',
      'Exterior assembly',
      'Installation template',
      'All mounting hardware',
      'Physical backup keys (2)',
      'Installation guide'
    ]
  },
  {
    id: '3',
    name: 'CRONLUX Smart Plug Mini',
    slug: 'smart-plug-mini',
    category: 'energy',
    subcategory: 'power-control',
    price: 29,
    rating: 4.6,
    reviewCount: 2156,
    availability: 'in-stock',
    images: [
      'https://images.pexels.com/photos/4792505/pexels-photo-4792505.jpeg',
      'https://images.pexels.com/photos/159398/electrical-outlet-power-electricity-159398.jpeg'
    ],
    description: 'Compact smart plug with energy monitoring and voice control compatibility.',
    highlights: [
      'Compact design',
      'Energy monitoring',
      'Voice control ready',
      'Schedule & timer functions',
      'Remote control anywhere'
    ],
    specifications: {
      'Max Load': '15A, 1800W',
      'Connectivity': 'WiFi 2.4GHz',
      'Dimensions': '2.4" x 1.5" x 1.2"',
      'Voice Control': 'Alexa, Google Assistant compatible',
      'App Control': 'iOS & Android',
      'Certification': 'FCC, UL Listed'
    },
    faqs: [
      {
        question: 'Does it work with high-power appliances?',
        answer: 'Yes, it supports up to 15A/1800W, suitable for most household appliances.'
      },
      {
        question: 'Can I control it when away from home?',
        answer: 'Yes, you can control it remotely via the CRONLUX app from anywhere with internet.'
      }
    ],
    whatsInBox: [
      'CRONLUX Smart Plug Mini',
      'Quick setup guide'
    ]
  },
  {
    id: '4',
    name: 'CRONLUX Smart Switch Pro',
    slug: 'smart-switch-pro',
    category: 'energy',
    subcategory: 'lighting-control',
    price: 79,
    rating: 4.7,
    reviewCount: 1533,
    availability: 'in-stock',
    images: [
      'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg',
      'https://images.pexels.com/photos/8092/pexels-photo.jpg'
    ],
    description: 'Smart wall switch with dimming capability and elegant touch controls.',
    highlights: [
      'Touch-sensitive controls',
      'Dimming functionality',
      'No hub required',
      'Easy installation',
      'Modern glass design'
    ],
    specifications: {
      'Switch Type': 'Single pole/3-way compatible',
      'Load Capacity': '600W LED, 1200W Incandescent',
      'Connectivity': 'WiFi 2.4GHz',
      'Installation': 'Standard wall box',
      'Material': 'Tempered glass face',
      'Voltage': '120V AC'
    },
    faqs: [
      {
        question: 'Do I need a neutral wire?',
        answer: 'Yes, a neutral wire is required for proper installation and operation.'
      },
      {
        question: 'Can it work with LED bulbs?',
        answer: 'Yes, it\'s specifically designed to work with LED bulbs and provides smooth dimming.'
      }
    ],
    whatsInBox: [
      'CRONLUX Smart Switch Pro',
      'Wall plate',
      'Wire nuts',
      'Installation screws',
      'Installation guide'
    ]
  }
];