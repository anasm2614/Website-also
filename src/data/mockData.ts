export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East';
  image: string;
  images: string[];
  description: string;
  highlights: string[];
  attractions: Attraction[];
  bestTimeToVisit: string;
  travelTips: string[];
  averagePrice: number;
  rating: number;
  travelType: ('Beach' | 'Mountain' | 'City' | 'Historical' | 'Adventure' | 'Culture' | 'Nature')[];
  thingsToDo: string[];
  currency: string;
  language: string;
}

export interface Attraction {
  name: string;
  description: string;
  image: string;
}

export interface Tour {
  id: string;
  destinationId: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  image: string;
  included: string[];
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80',
    ],
    description: 'The City of Light captivates with its iconic landmarks, world-class museums, and romantic ambiance. From the Eiffel Tower to charming cafés, Paris offers an unforgettable blend of history, art, and cuisine.',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées', 'Montmartre'],
    attractions: [
      { name: 'Eiffel Tower', description: 'Iconic iron lattice tower and symbol of Paris', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=600&q=80' },
      { name: 'Louvre Museum', description: 'World\'s largest art museum, home to Mona Lisa', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80' },
      { name: 'Arc de Triomphe', description: 'Triumphal arch honoring French soldiers', image: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=600&q=80' },
    ],
    bestTimeToVisit: 'April to June, September to November',
    travelTips: ['Learn basic French phrases', 'Book museum tickets in advance', 'Use the Metro for efficient travel'],
    averagePrice: 150,
    rating: 4.8,
    travelType: ['City', 'Culture', 'Historical'],
    thingsToDo: ['Visit the Louvre', 'Cruise on the Seine', 'Explore Montmartre', 'Taste French pastries'],
    currency: 'Euro (€)',
    language: 'French',
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80',
    ],
    description: 'A mesmerizing blend of ultramodern and traditional, Tokyo dazzles with neon-lit skyscrapers, ancient temples, cutting-edge technology, and world-renowned cuisine.',
    highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Tokyo Skytree', 'Harajuku', 'Tsukiji Market'],
    attractions: [
      { name: 'Senso-ji Temple', description: 'Ancient Buddhist temple in Asakusa', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80' },
      { name: 'Tokyo Skytree', description: 'Tallest tower in Japan with panoramic views', image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80' },
      { name: 'Meiji Shrine', description: 'Serene Shinto shrine in a forested park', image: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=600&q=80' },
    ],
    bestTimeToVisit: 'March to May, September to November',
    travelTips: ['Get a JR Pass for train travel', 'Carry cash as many places don\'t accept cards', 'Respect local customs'],
    averagePrice: 180,
    rating: 4.9,
    travelType: ['City', 'Culture', 'Adventure'],
    thingsToDo: ['Explore Akihabara', 'Visit teamLab exhibitions', 'Try authentic ramen', 'See cherry blossoms'],
    currency: 'Japanese Yen (¥)',
    language: 'Japanese',
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    ],
    description: 'The Island of the Gods offers pristine beaches, lush rice terraces, ancient temples, and a vibrant spiritual culture that draws travelers seeking both adventure and tranquility.',
    highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach', 'Mount Batur', 'Uluwatu Temple'],
    attractions: [
      { name: 'Tegallalang Rice Terraces', description: 'Stunning terraced rice paddies in Ubud', image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80' },
      { name: 'Tanah Lot Temple', description: 'Iconic sea temple perched on a rock', image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80' },
      { name: 'Sacred Monkey Forest', description: 'Nature reserve and Hindu temple complex', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80' },
    ],
    bestTimeToVisit: 'April to October',
    travelTips: ['Rent a scooter for flexibility', 'Dress modestly at temples', 'Bargain at local markets'],
    averagePrice: 80,
    rating: 4.7,
    travelType: ['Beach', 'Culture', 'Nature', 'Adventure'],
    thingsToDo: ['Sunrise at Mount Batur', 'Surf at Kuta', 'Yoga retreat in Ubud', 'Visit water temples'],
    currency: 'Indonesian Rupiah (IDR)',
    language: 'Indonesian',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80',
    ],
    description: 'A tropical paradise of crystal-clear waters, overwater bungalows, and vibrant coral reefs. The Maldives is the ultimate destination for luxury beach getaways and underwater adventures.',
    highlights: ['Overwater Villas', 'Coral Reefs', 'Private Islands', 'Bioluminescent Beach', 'Underwater Restaurant'],
    attractions: [
      { name: 'Male Fish Market', description: 'Bustling local fish market in the capital', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&q=80' },
      { name: 'Banana Reef', description: 'Famous diving spot with diverse marine life', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80' },
      { name: 'Vaadhoo Island', description: 'Famous for bioluminescent plankton at night', image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80' },
    ],
    bestTimeToVisit: 'November to April',
    travelTips: ['Book resort seaplane transfers in advance', 'Bring reef-safe sunscreen', 'Respect local Islamic customs'],
    averagePrice: 350,
    rating: 4.9,
    travelType: ['Beach', 'Nature', 'Adventure'],
    thingsToDo: ['Snorkeling with manta rays', 'Sunset dolphin cruise', 'Spa treatments', 'Island hopping'],
    currency: 'Maldivian Rufiyaa (MVR)',
    language: 'Dhivehi',
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80',
    ],
    description: 'The Eternal City where ancient history meets vibrant modern life. Walk through millennia of history, from the Colosseum to the Vatican, while savoring world-famous Italian cuisine.',
    highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum', 'Pantheon'],
    attractions: [
      { name: 'Colosseum', description: 'Ancient amphitheater and symbol of Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80' },
      { name: 'Vatican Museums', description: 'World-class art collection including Sistine Chapel', image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&q=80' },
      { name: 'Trevi Fountain', description: 'Baroque masterpiece and iconic landmark', image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80' },
    ],
    bestTimeToVisit: 'April to June, September to October',
    travelTips: ['Book Vatican tickets online', 'Wear comfortable walking shoes', 'Try gelato from artisan shops'],
    averagePrice: 140,
    rating: 4.8,
    travelType: ['City', 'Historical', 'Culture'],
    thingsToDo: ['Throw a coin in Trevi Fountain', 'Explore Trastevere', 'Visit the Sistine Chapel', 'Enjoy aperitivo'],
    currency: 'Euro (€)',
    language: 'Italian',
  },
  {
    id: 'new-york',
    name: 'New York City',
    country: 'United States',
    region: 'Americas',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80',
    ],
    description: 'The city that never sleeps offers iconic skylines, world-class entertainment, diverse neighborhoods, and endless cultural experiences in the heart of America.',
    highlights: ['Statue of Liberty', 'Central Park', 'Times Square', 'Brooklyn Bridge', 'Empire State Building'],
    attractions: [
      { name: 'Statue of Liberty', description: 'Symbol of freedom and American icon', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80' },
      { name: 'Central Park', description: 'Massive urban park in Manhattan', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80' },
      { name: 'Empire State Building', description: 'Art Deco skyscraper with observation deck', image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&q=80' },
    ],
    bestTimeToVisit: 'April to June, September to November',
    travelTips: ['Get a MetroCard for subway travel', 'Book Broadway shows in advance', 'Walk the High Line'],
    averagePrice: 200,
    rating: 4.7,
    travelType: ['City', 'Culture', 'Adventure'],
    thingsToDo: ['See a Broadway show', 'Walk across Brooklyn Bridge', 'Visit museums', 'Explore food markets'],
    currency: 'US Dollar ($)',
    language: 'English',
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      'https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=800&q=80',
    ],
    description: 'A stunning Greek island famous for whitewashed buildings, blue-domed churches, dramatic cliffs, and breathtaking sunsets over the Aegean Sea.',
    highlights: ['Oia Sunset', 'Blue Domed Churches', 'Caldera Views', 'Black Sand Beaches', 'Ancient Akrotiri'],
    attractions: [
      { name: 'Oia Village', description: 'Picturesque village famous for sunsets', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80' },
      { name: 'Red Beach', description: 'Unique beach with red volcanic cliffs', image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&q=80' },
      { name: 'Fira Town', description: 'Capital town with stunning caldera views', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80' },
    ],
    bestTimeToVisit: 'April to October',
    travelTips: ['Book accommodations early in summer', 'Rent an ATV to explore', 'Watch sunset from Oia'],
    averagePrice: 180,
    rating: 4.9,
    travelType: ['Beach', 'Historical', 'Culture'],
    thingsToDo: ['Wine tasting', 'Caldera boat tour', 'Visit ancient ruins', 'Photography walks'],
    currency: 'Euro (€)',
    language: 'Greek',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80',
    ],
    description: 'A futuristic metropolis rising from the desert, Dubai dazzles with record-breaking architecture, luxury shopping, golden beaches, and thrilling desert adventures.',
    highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall', 'Desert Safari', 'Gold Souk'],
    attractions: [
      { name: 'Burj Khalifa', description: 'World\'s tallest building with observation decks', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
      { name: 'Palm Jumeirah', description: 'Iconic man-made island', image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80' },
      { name: 'Dubai Frame', description: 'Architectural landmark with city views', image: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=600&q=80' },
    ],
    bestTimeToVisit: 'November to March',
    travelTips: ['Dress modestly outside resorts', 'Use the Metro for transport', 'Book desert safari in advance'],
    averagePrice: 220,
    rating: 4.6,
    travelType: ['City', 'Beach', 'Adventure'],
    thingsToDo: ['Desert dune bashing', 'Visit Atlantis', 'Shop at souks', 'Fountain show at Dubai Mall'],
    currency: 'UAE Dirham (AED)',
    language: 'Arabic',
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    region: 'Americas',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80',
    ],
    description: 'The legendary Lost City of the Incas perched high in the Andes. This UNESCO World Heritage site offers breathtaking mountain scenery and fascinating ancient history.',
    highlights: ['Inca Citadel', 'Huayna Picchu', 'Inca Trail', 'Sun Gate', 'Temple of the Sun'],
    attractions: [
      { name: 'Temple of the Sun', description: 'Sacred Inca astronomical observatory', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80' },
      { name: 'Huayna Picchu', description: 'Steep peak with panoramic views', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80' },
      { name: 'Intihuatana Stone', description: 'Ancient Inca ritual stone', image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=600&q=80' },
    ],
    bestTimeToVisit: 'April to October',
    travelTips: ['Acclimatize in Cusco first', 'Book Huayna Picchu months ahead', 'Hire a guide for history'],
    averagePrice: 120,
    rating: 4.9,
    travelType: ['Historical', 'Adventure', 'Mountain', 'Nature'],
    thingsToDo: ['Hike the Inca Trail', 'Explore Sacred Valley', 'Visit Cusco', 'Try Peruvian cuisine'],
    currency: 'Peruvian Sol (PEN)',
    language: 'Spanish',
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Africa',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
      'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?w=800&q=80',
      'https://images.unsplash.com/photo-1591378603223-e15b45a81640?w=800&q=80',
    ],
    description: 'Where mountains meet the ocean, Cape Town offers stunning natural beauty, vibrant culture, world-class wine regions, and incredible wildlife experiences.',
    highlights: ['Table Mountain', 'Cape of Good Hope', 'V&A Waterfront', 'Robben Island', 'Stellenbosch Wine Region'],
    attractions: [
      { name: 'Table Mountain', description: 'Iconic flat-topped mountain with cable car', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80' },
      { name: 'Cape of Good Hope', description: 'Dramatic coastal scenery at Africa\'s tip', image: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?w=600&q=80' },
      { name: 'Boulders Beach', description: 'Beach famous for African penguins', image: 'https://images.unsplash.com/photo-1591378603223-e15b45a81640?w=600&q=80' },
    ],
    bestTimeToVisit: 'October to April',
    travelTips: ['Check cable car availability for weather', 'Visit wineries in Stellenbosch', 'Be aware of safety in certain areas'],
    averagePrice: 100,
    rating: 4.7,
    travelType: ['Nature', 'Beach', 'Adventure', 'Culture'],
    thingsToDo: ['Hike Table Mountain', 'Safari experience', 'Wine tasting', 'Visit penguins at Boulders'],
    currency: 'South African Rand (ZAR)',
    language: 'English',
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    region: 'Oceania',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
      'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=800&q=80',
    ],
    description: 'Australia\'s vibrant harbor city combines stunning beaches, iconic architecture, diverse cuisine, and a laid-back lifestyle with urban sophistication.',
    highlights: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach', 'Blue Mountains', 'Darling Harbour'],
    attractions: [
      { name: 'Sydney Opera House', description: 'UNESCO-listed architectural masterpiece', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80' },
      { name: 'Bondi Beach', description: 'Famous surf beach with coastal walks', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80' },
      { name: 'Sydney Harbour Bridge', description: 'Iconic bridge with climb experiences', image: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=600&q=80' },
    ],
    bestTimeToVisit: 'September to November, March to May',
    travelTips: ['Get an Opal card for transport', 'Walk the Bondi to Coogee coastal trail', 'Book Opera House tour'],
    averagePrice: 170,
    rating: 4.8,
    travelType: ['City', 'Beach', 'Nature', 'Culture'],
    thingsToDo: ['Climb Sydney Harbour Bridge', 'Surf at Bondi', 'Day trip to Blue Mountains', 'Ferry to Manly'],
    currency: 'Australian Dollar (AUD)',
    language: 'English',
  },
];

export const tours: Tour[] = [
  {
    id: 'paris-highlights',
    destinationId: 'paris',
    name: 'Paris Highlights Tour',
    description: 'Experience the best of Paris with skip-the-line access to major attractions.',
    duration: '3 days',
    price: 599,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    included: ['Hotel accommodation', 'Eiffel Tower tickets', 'Louvre entry', 'Seine cruise', 'Airport transfers'],
    highlights: ['Skip-the-line Louvre tour', 'Eiffel Tower summit access', 'Guided Montmartre walk'],
  },
  {
    id: 'tokyo-cultural',
    destinationId: 'tokyo',
    name: 'Tokyo Cultural Immersion',
    description: 'Dive deep into Japanese culture with traditional experiences and modern marvels.',
    duration: '5 days',
    price: 1299,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    included: ['Hotel stay', 'JR Pass', 'Tea ceremony', 'Sumo tournament tickets', 'Food tour'],
    highlights: ['Traditional tea ceremony', 'Day trip to Mount Fuji', 'Tsukiji market tour'],
  },
  {
    id: 'bali-adventure',
    destinationId: 'bali',
    name: 'Bali Adventure & Wellness',
    description: 'Combine adventure activities with spiritual wellness in tropical paradise.',
    duration: '7 days',
    price: 899,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    included: ['Villa accommodation', 'Yoga sessions', 'Temple tours', 'White water rafting', 'Cooking class'],
    highlights: ['Sunrise at Mount Batur', 'Ubud spa day', 'Rice terrace trekking'],
  },
];

export const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania', 'Middle East'] as const;
export const travelTypes = ['Beach', 'Mountain', 'City', 'Historical', 'Adventure', 'Culture', 'Nature'] as const;
