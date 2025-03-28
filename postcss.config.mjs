import cssnano from 'cssnano';

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    cssnano: { preset: 'default' },
  }
}