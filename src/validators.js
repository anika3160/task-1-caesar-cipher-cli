import { JS_DATA_TYPES } from './constants.js';

export const isInteger = (num) => (num && typeof num === JS_DATA_TYPES.number && (num ^ 0) === num);

export const isValidActionValue = (action) => action && (action === 'encode' || action === 'decode');
