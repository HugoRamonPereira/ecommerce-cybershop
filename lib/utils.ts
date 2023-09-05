import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProductStorage(value: string) {
  switch (value) {
    case '4GB':
      return '4GB';
    case '8GB':
      return '8GB';
    case '12GB':
      return '12GB';
    case '16GB':
      return '16GB';
    case '32GB':
      return '32GB';
    case '64GB':
      return '64GB';
    case '128GB':
      return '128GB';
    case '256GB':
      return '256GB';
    case '512GB':
      return '512GB';
    case '1TB':
      return '1TB';
  }
}
