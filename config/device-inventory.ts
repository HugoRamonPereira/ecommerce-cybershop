import { Image } from 'sanity';

interface DeviceInventoryProps {
  id: string
  name: string
  brand: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  storage: string[]
  ram: string[]
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<DeviceInventoryProps, 'images'> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const deviceInventory: DeviceInventoryProps[] = [
  {
    id: '2529e223-2875-4c10-ad02-7d05f8e5b4df',
    sku: 'apple_iphone_14_pro_max',
    name: 'Apple iPhone 14 Pro Max',
    brand: 'Apple',
    description: 'The iPhone 14 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. iPhone 14 Pro Max is powered by a hexa-core Apple A16 Bionic processor. The iPhone 14 Pro Max supports wireless charging, as well as proprietary fast charging.',
    price: 1100, // price in smallest currency unit (e.g. cent for USD)
    storage: ['128GB', '256GB', '1TB'],
    ram: ['6GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-4.jpg',
      'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_003.jpg',
      'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_004.jpg',
    ],
    sizes: ['one-size'],
    categories: ['phones'],
    colors: ['Space Black', 'Silver', 'Gold', 'Deep Purple'],
    currency: 'USD',
  },
  {
    id: 'ac8fcbe9-746c-4d5d-9568-7fcefe61a9e8',
    sku: 'apple_iphone_14_pro',
    name: 'Apple iPhone 14 Pro',
    brand: 'Apple',
    description: 'The iPhone 14 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. iPhone 14 Pro Max is powered by a hexa-core Apple A16 Bionic processor. The iPhone 14 Pro supports wireless charging, as well as proprietary fast charging.',
    price: 1000, // price in smallest currency unit (e.g. cent for USD)
    storage: ['128GB', '256GB', '1TB'],
    ram: ['6GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-4.jpg',
      'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_003.jpg',
      'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_004.jpg',
    ],
    sizes: ['one-size'],
    categories: ['phones'],
    colors: ['Space Black', 'Silver', 'Gold', 'Deep Purple'],
    currency: 'USD',
  },
  {
    id: 'd79afd8b-b63e-4842-88e6-b08af5467569',
    sku: 'apple_iphone_14_plus',
    name: 'Apple iPhone 14 Plus',
    brand: 'Apple',
    description: 'These handsome leather belts are guaranteed to pull together any outfit. They\'re made of vegetable-tanned Italian leather, which means they have natural highs and lows of color and will look even better over time.',
    price: 900,
    storage: ['128GB', '256GB', '512GB'],
    ram: ['6GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-plus-3.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-plus-4.jpg',
      'https://fdn2.gsmarena.com/vv/pics/apple/iphone-14-plus-yellow.jpg'
    ],
    sizes: ['6,7"'],
    categories: ['phones'],
    colors: ['Midnight', 'Purple', 'Starlight', 'Blue', 'Red', 'Yellow'],
    currency: 'USD',
  },
  {
    id: 'a375b15e-a9c6-4d06-ab05-5e890e99b601',
    sku: 'apple_ipad_pro_12.9',
    name: 'Apple iPad Pro 12.9',
    brand: 'Apple',
    description: 'The 12.9-inch iPad Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 12.9 inches diagonally (actual viewable area is less).',
    price: 1100,
    storage: ['128GB', '256GB', '2TB'],
    ram: ['8GB', '16GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-129-2022-1.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-129-2022-2.jpg',
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-2022.jpg'
    ],
    sizes: ['12.9"'],
    categories: ['tablets'],
    colors: ['Silver', 'Space Gray'],
    currency: 'USD',
  },
  {
    id: '19b4170e-d24e-44f6-a84b-3394745724a4',
    sku: 'apple_watch_ultra',
    name: 'Apple Watch Ultra',
    brand: 'Apple',
    description: 'The rugged 49mm titanium case comes with built-in GPS + Cellular connectivity and pairs with specialized, high-performance bands.',
    price: 799,
    storage: ['32GB'],
    ram: ['2GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-ultra-1.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-ultra-2.jpg',
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-ultra-3.jpg',
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-ultra-4.jpg',
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-ultra-5.jpg'
    ],
    sizes: ['49mm'],
    categories: ['smartwatches'],
    colors: ['Starlight', 'Green', 'Orange'],
    currency: 'USD',
  },
  {
    id: '1fd70b1d-09e9-4ac7-984f-03fcb187ba96',
    sku: 'samsung_s23_ultra',
    name: 'Samsung S23 Ultra',
    brand: 'Samsung',
    description: 'The Samsung Galaxy S23 Ultra is the headliner of the S23 series. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 2 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.',
    price: 1200,
    storage: ['256GB', '512GB', '1TB'],
    ram: ['8GB', '12GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-3.jpg',
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-4.jpg',
      'https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-s23-ultra/lifestyle/-1024w2/gsmarena_001.jpg'
    ],
    sizes: ['6.9"'],
    categories: ['phones'],
    colors: ['Phantom Black', 'Cream', 'Green', 'Lavender', 'Graphite'],
    currency: 'USD',
  },
  {
    id: '27147d11-4fd7-419f-80b4-9a2c494b0a0f',
    sku: 'samsung_galaxy_zfold5',
    name: 'Samsung Galaxy ZFold 5',
    brand: 'Samsung',
    description: 'Meet the phone with a big screen like a mobile movie theatre. The one that\'s both an exciting game console and a multi-screen, multitasking workhorse. And topped off with a powerful, pro-grade camera. All folded into your hands.',
    price: 1800,
    storage: ['256GB', '512GB', '1TB'],
    ram: ['12GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold5-5g-r1.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold5-5g-r2.jpg',
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold5-5g-r3.jpg',
      'https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-z-fold5/lifestyle/-1024w2/gsmarena_013.jpg'
    ],
    sizes: ['7.6"'],
    categories: ['phones'],
    colors: ['Icy Blue', 'Phantom Black', 'Cream', 'Gray', 'Blue'],
    currency: 'USD',
  },
  {
    id: 'fe58e207-2808-4b0f-9e57-415b722931c9',
    sku: 'samsung_galaxy_zflip5',
    name: 'Samsung Galaxy ZFlip 5',
    brand: 'Samsung',
    description: 'These are timeless sunglasses that are designed in California and handmade in Japan by master craftsmen. The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.',
    price: 1000,
    storage: ['256GB', '512GB'],
    ram: ['8GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip5-5g-r1.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip5-5g-r2.jpg',
      'https://fdn2.gsmarena.com/vv/pics/samsung/galaxy-zflip5-1.jpg',
      'https://fdn.gsmarena.com/imgroot/reviews/23/samsung-galaxy-z-flip5/lifestyle/-1024w2/gsmarena_001.jpg'
    ],
    sizes: ['6.7"'],
    categories: ['phones'],
    colors: ['Mint', 'Graphite', 'Cream', 'Lavender', 'Gray', 'Blue', 'Green', 'Yellow'],
    currency: 'USD',
  },
  {
    id: '5794e6ed-583d-44c8-a917-bab73152e183',
    sku: 'samsung_galaxy_tab_s9_ultra',
    name: 'Samsung Galaxy Tab S9 Ultra',
    brand: 'Samsung',
    description: 'Our latest collection of handcrafted sunglasses features details like UV-protective lenses in shades specifically chosen to complement each frame, and all at a price that won\'t break the bank. We made these sunglasses with vintage-inspired acetate frames and a keyhole bridge.',
    price: 1200,
    storage: ['128GB', '512GB', '1TB'],
    ram: ['12GB', '16GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/samsung/galaxy-tab-s9-ultra-1.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/samsung/galaxy-tab-s9-ultra-1.jpg',
    ],
    sizes: ['14.6"'],
    categories: ['tablets'],
    colors: ['Beige', 'Graphite'],
    currency: 'USD',
  },
  {
    id: '7a09f2f1-119f-4877-8698-b59245a5d08f',
    sku: 'samsung_galaxy_watch6',
    name: 'Samsung Galaxy Watch 6',
    brand: 'Samsung',
    description: 'Start your everyday wellness journey with personalized heart rate zone workouts and insights for better rest with Advanced Sleep Coaching. Work out to your full potential with automatic fitness tracking and personalized performance insights.',
    price: 320,
    storage: ['16GB'],
    ram: ['2GB'],
    image:
      'https://fdn2.gsmarena.com/vv/pics/samsung/galaxy-watch6-02.jpg',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/samsung/galaxy-watch6-02.jpg',
      'https://fdn2.gsmarena.com/vv/pics/samsung/galaxy-watch6-01.jpg'
    ],
    sizes: ['44mm'],
    categories: ['smartwatches'],
    colors: ['Graphite', 'Silver', 'Gold'],
    currency: 'USD',
  }
];
