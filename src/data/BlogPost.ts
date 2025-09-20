export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'Innovation' | 'Trends' | 'Stories' | 'Tips';
  author: string;
  publishedAt: string; // ISO date string
  readTime: string; // e.g., "5 min read"
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Smart Home Security: AI-Powered Protection',
    slug: 'future-smart-home-security-ai-powered-protection',
    excerpt:
      'Discover how artificial intelligence is transforming home security and delivering peace of mind with proactive protection.',
    content:
      'From motion classification to facial recognition at the edge, AI is enabling smarter alerts and faster response times. In this piece, we explore on-device processing, privacy considerations, and how Cronlux products balance intelligence with user control...',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    category: 'Innovation',
    author: 'Sarah Chen',
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    tags: ['AI', 'Security', 'Smart Home'],
  },
  {
    id: '2',
    title: '10 Smart Home Trends That Will Define 2024',
    slug: '10-smart-home-trends-2024',
    excerpt:
      'From adaptive lighting to energy orchestration, here are the trends shaping the next generation of smart homes.',
    content:
      '2024 is the year smart homes become context-aware. Expect multi-protocol hubs, Matter adoption, energy intelligence, and hybrid-cloud architectures. We break down what matters for homeowners and how Cronlux devices fit into the ecosystem...',
    image: 'https://images.pexels.com/photos/1843267/pexels-photo-1843267.jpeg',
    category: 'Trends',
    author: 'Michael Rodriguez',
    publishedAt: '2024-01-10',
    readTime: '7 min read',
    tags: ['Trends', 'Technology', 'Home Automation'],
  },
  {
    id: '3',
    title: 'Customer Story: How the Johnson Family Transformed Their Home',
    slug: 'johnson-family-smart-home-transformation',
    excerpt:
      'See how a growing family used Cronlux to simplify routines, boost security, and save on energy.',
    content:
      'With a newborn and a busy schedule, the Johnsons leaned on automations for lighting, entry access, and monitoring. Timers, scenes, and shared access controls helped reduce complexity and gave them more time back each day...',
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
    category: 'Stories',
    author: 'Emma Thompson',
    publishedAt: '2024-01-08',
    readTime: '4 min read',
    tags: ['Customer Story', 'Case Study', 'Lifestyle'],
  },
  {
    id: '4',
    title: 'Energy Savings Made Simple: Smart Plugs and Efficiency',
    slug: 'energy-savings-smart-plugs-efficiency',
    excerpt:
      'Cut your utility bill with usage insights and automations powered by Cronlux Smart Plugs.',
    content:
      'Smart Plugs can help identify vampire loads, automate off-peak usage, and provide granular insights into device-level consumption. Learn practical recipes to start saving today...',
    image:
      'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg',
    category: 'Tips',
    author: 'Liam Patel',
    publishedAt: '2024-02-02',
    readTime: '6 min read',
    tags: ['Energy', 'Efficiency', 'Smart Plug'],
  },
  {
    id: '5',
    title: 'Designing For Privacy: Local Processing In Smart Cameras',
    slug: 'designing-for-privacy-local-processing-smart-cameras',
    excerpt:
      'Privacy by design starts with edge intelligence. Here’s how local processing protects your data.',
    content:
      'Cronlux cameras prioritize on-device inference so sensitive footage and metadata stay in your home. In this article we discuss model optimization, secure enclaves, and when to use the cloud for value—not surveillance...',
    image: 'https://images.pexels.com/photos/258696/pexels-photo-258696.jpeg',
    category: 'Innovation',
    author: 'Noah Williams',
    publishedAt: '2024-02-12',
    readTime: '5 min read',
    tags: ['Privacy', 'AI', 'Edge Computing'],
  },
  {
    id: '6',
    title: 'Matter, Thread, and Wi‑Fi: Choosing the Right Protocol Mix',
    slug: 'matter-thread-wifi-choosing-right-protocol-mix',
    excerpt:
      'Interoperability is here, but which protocols should you prioritize in your smart home?',
    content:
      'We break down Matter, Thread, Wi‑Fi 6, and Bluetooth LE—where they shine, where they fall short, and how Cronlux devices leverage the best of each to deliver a seamless experience...',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-connection-159304.jpeg',
    category: 'Trends',
    author: 'Ava Martins',
    publishedAt: '2024-03-05',
    readTime: '8 min read',
    tags: ['Matter', 'Thread', 'Networking'],
  },
  {
    id: '7',
    title: 'From Routine to Scene: Automations That Feel Human',
    slug: 'from-routine-to-scene-automations-that-feel-human',
    excerpt:
      'Move beyond schedules. Build context-aware scenes that adapt to you, not the other way around.',
    content:
      'With presence detection, sunrise/sunset offsets, and occupancy modeling, your home can respond fluidly to daily life. We share starter scenes and advanced tips for pros...',
    image: 'https://images.pexels.com/photos/177707/pexels-photo-177707.jpeg',
    category: 'Tips',
    author: 'Grace Kim',
    publishedAt: '2024-03-22',
    readTime: '6 min read',
    tags: ['Automations', 'Scenes', 'How-To'],
  },
  {
    id: '8',
    title: 'Why Access Control Is The Heart of a Secure Smart Home',
    slug: 'why-access-control-is-the-heart-of-a-secure-smart-home',
    excerpt:
      'Locks, permissions, and event trails—how modern access systems protect what matters most.',
    content:
      'From temporary guest codes to biometric factors and tamper alerts, smart locks redefine what a front door can do. Learn how Cronlux brings enterprise-grade concepts to residential living...',
    image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg',
    category: 'Stories',
    author: 'Daniel Ortega',
    publishedAt: '2024-04-01',
    readTime: '5 min read',
    tags: ['Security', 'Access Control', 'Best Practices'],
  },
];