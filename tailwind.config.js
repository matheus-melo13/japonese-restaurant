/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'support-00': '#FBFBFB',
        'darkk-10': '#292929',
        'darkk-20': '#616161',
        'darkk-30': '#F3F3F3',
        'darkk-40': '#FFFFFF',
        'support-01': '#2962FF',
        'support-02': '#0BB07B',
        'support-03': '#FFCE52',
        'support-04': '#F03D3D',
        'support-05': '#E0E0E0',
        'support-06': '#DA2535',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'inter': ['Inter'],
    }
  },
  plugins: [],
}
