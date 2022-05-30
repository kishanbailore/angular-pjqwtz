export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
export const products = [
  {
    id: 1,
    name: 'Phone Lite',
    price: 20000,
    description:
      'This is the lite phone. This the Cheaper phone in this module.',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 30000,
    description: 'This the Mini phone .',
  },
  {
    id: 3,
    name: 'Phone Medium',
    price: 40000,
    description: 'This Phone is the medium.',
  },
  {
    id: 4,
    name: 'Phone Pro',
    price: 50000,
    description: 'This is the Pro Phone',
  },
  {
    id: 5,
    name: 'Phone max',
    price: 60000,
    description: 'This is the Max phone',
  },
  {
    id: 6,
    name: 'Phone Large',
    price: 70000,
    description: 'This is the large phone.',
  },
];
