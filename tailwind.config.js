const defaultTheme = require('tailwindcss/defaultTheme');

function rem2rem(input, fontSize = 1.6) {
  if (input == null) {
    return input;
  }
  switch (typeof input) {
    case 'object':
      if (Array.isArray(input)) {
        return input.map((val) => rem2rem(val, fontSize));
      } else {
        const ret = {};
        for (const key in input) {
          ret[key] = rem2rem(input[key]);
        }
        return ret;
      }
    case 'string':
      return input.replace(
        /(\d*\.?\d+)rem$/,
        (_, val) => parseFloat(val) * fontSize + 'rem',
      );
    default:
      return input;
  }
}

module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  safelist: [
    'tw-top-[64px]',
    'tw-justify-center',
    'tw-justify-end',
    'tw-grid-cols-1',
    'tw-grid-cols-2',
    'tw-h-[640px]',
    'lg:tw-h-[800px]',
    'lg:tw-col-span-6',
    'lg:tw-min-h-[380px]',
    'lg:tw-min-h-[760px]',
    'lg:tw-w-1/2',
    'lg:tw-grid-cols-2',
    'lg:tw-grid-cols-3',
    'lg:tw-grid-cols-4',
    'lg:tw-pr-[8.33333%]',
    'lg:tw-pl-[8.33333%]',
  ],
  theme: {
    borderRadius: rem2rem(defaultTheme.borderRadius),
    columns: rem2rem(defaultTheme.columns),
    fontSize: rem2rem(defaultTheme.fontSize),
    lineHeight: rem2rem(defaultTheme.lineHeight),
    spacing: rem2rem(defaultTheme.spacing),
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '750px',
      lg: '990px',
      xl: '1280px',
      xxl: '1440px',
      pageMaxWidth: '1440px',
    },
    extend: {
      colors: {
        'bee-green': {
          100: '#74D948',
          200: '#40A828',
          300: '#428425',
        },
        'b-green': {
          100: '#74D948',
          200: '#40A828',
          300: '#428425',
        },
        'iron-gate': {
          300: '#31343A',
          200: '#4E5055',
          100: '#777981',
        },
      },
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
      height: {
        'screen-nav': 'calc( 100vh - 56px )',
      },
    },
    color: {
      black: '#000000',
      gray: {
        900: '#191A19',
        800: '#323333',
        700: '#4B4D4C',
        600: '#656666',
        500: '#7E807F',
        400: '#979998',
        300: '#BDBFBF',
        200: '#D7D9D8',
        100: '#F0F2F1',
      },
    },
  },
  plugins: [],
};
