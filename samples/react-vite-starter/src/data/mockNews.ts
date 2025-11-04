import type { NewsItem } from '../types/widget';

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'React 19 Released with New Features',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    content: 'The React team has announced the release of React 19, featuring improved performance, new hooks, and better developer experience.',
  },
  {
    id: '2',
    title: 'TypeScript 5.9 Brings Performance Improvements',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    content: 'Microsoft releases TypeScript 5.9 with significant performance improvements and new type system features for better code quality.',
  },
  {
    id: '3',
    title: 'Vite 7.0 Launches with Faster Build Times',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    content: 'Vite 7.0 is now available, offering even faster build times and improved hot module replacement for modern web development.',
  },
  {
    id: '4',
    title: 'Web Performance Best Practices for 2025',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    content: 'Learn about the latest web performance optimisation techniques to make your websites faster and more efficient in 2025.',
  },
  {
    id: '5',
    title: 'CSS Container Queries Now Widely Supported',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    content: 'Container queries are now supported across all major browsers, enabling more powerful responsive design patterns.',
  },
];
