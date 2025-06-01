module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
