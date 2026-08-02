import type { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Noise-Canceling Headphones',
    price: 199.99,
    description: 'Immersive sound quality with active noise cancellation and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
    category: 'Audio'
  },
  {
    id: 2,
    name: 'Minimalist Smart Watch',
    price: 149.50,
    description: 'Sleek design with heart rate monitoring, fitness tracking, and a bright AMOLED screen.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    category: 'Wearables'
  },
  {
    id: 3,
    name: 'Ergonomic Mechanical Keyboard',
    price: 89.99,
    description: 'Tactile switches with customizable RGB backlighting and durable PBT keycaps.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    price: 59.99,
    description: 'Waterproof IPX7 speaker with deep bass and up to 12 hours of continuous playtime.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600',
    category: 'Audio'
  }
];