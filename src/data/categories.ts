import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'smart-home-essentials',
    name: 'Smart Home Essentials',
    description: 'Devices that help automate and secure basic home functions.',
    icon: 'Home',
    products: ['smart-camera-pro', 'smart-door-lock-elite', 'smart-plug-mini', 'smart-switch-pro']
  },
  {
    id: 'energy-lighting',
    name: 'Energy & Lighting',
    description: 'For control and automation of power and light.',
    icon: 'Lightbulb',
    products: ['smart-plug-mini', 'smart-switch-pro']
  },
  {
    id: 'home-security',
    name: 'Home Security',
    description: 'Focused on surveillance and safe entry access.',
    icon: 'Shield',
    products: ['smart-camera-pro', 'smart-door-lock-elite']
  },
  {
    id: 'app-controlled',
    name: 'App-Controlled Devices',
    description: 'All devices that can be controlled remotely via CRONLUX App.',
    icon: 'Smartphone',
    products: ['smart-plug-mini', 'smart-switch-pro', 'smart-door-lock-elite', 'smart-camera-pro']
  }
];