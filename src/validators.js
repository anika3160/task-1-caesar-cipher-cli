export const isValidShiftValue = (shift) => (shift && typeof shift === JS_DATA_TYPES.number && (shift ^ 0) === shift);

export const isValidActionValue = (action) => action && (action === 'encode' || action === 'decode');
