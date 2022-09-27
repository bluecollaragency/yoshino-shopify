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
  theme: {
    borderRadius: rem2rem(defaultTheme.borderRadius),
    columns: rem2rem(defaultTheme.columns),
    fontSize: rem2rem(defaultTheme.fontSize),
    lineHeight: rem2rem(defaultTheme.lineHeight),
    spacing: rem2rem(defaultTheme.spacing),
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        lg: '1.6rem',
      },
    },
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xl: '1440px',
      xxl: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
    color: {
      black: '#000000',
    },
  },
  plugins: [],
};
