

// Get environment variables with fallbacks
// Base URL for GitHub Pages deployment
export const BASE_URL = import.meta.env.BASE_URL || '/';
export const FLUCTUATION_RANGE = parseFloat(import.meta.env.VITE_FLUCTUATION_RANGE || '0.1');
export const MAX_PERCENT_DIFFERENCE = parseFloat(import.meta.env.VITE_MAX_PERCENT_DIFFERENCE || '2');
export const UPDATE_INTERVAL = parseInt(import.meta.env.VITE_UPDATE_INTERVAL || '3000', 10);
export const POLLING_INTERVAL = UPDATE_INTERVAL; 