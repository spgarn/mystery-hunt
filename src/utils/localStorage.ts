
// Check if code has been used before
export const isCodeUsed = (codeId: string): boolean => {
  const usedCodes = getUsedCodes();
  return usedCodes.includes(codeId);
};

// Mark code as used
export const markCodeAsUsed = (codeId: string): void => {
  const usedCodes = getUsedCodes();
  if (!usedCodes.includes(codeId)) {
    usedCodes.push(codeId);
    localStorage.setItem('usedCodes', JSON.stringify(usedCodes));
  }
};

// Get all used codes
export const getUsedCodes = (): string[] => {
  const storedCodes = localStorage.getItem('usedCodes');
  return storedCodes ? JSON.parse(storedCodes) : [];
};

// Reset all used codes (for testing purposes)
export const resetUsedCodes = (): void => {
  localStorage.removeItem('usedCodes');
};
