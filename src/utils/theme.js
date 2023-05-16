export const theme = {
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
    xxl: '128px',
    xxxl: '256px',
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  colors: {
    bgPrimary: '#29E3EC', // Bright cyan
    bgLight: '#E7FEFF', // Very pale (mostly white) cyan
    bgButton: '#00bcd5', // Strong cyan

    textLight: '#b1b9c2', // Grayish blue
    textPrimary: 'black',
    textSecondary: 'white',

    btnLight: '#f2f2f2', // Very light gray

    blue: '#3a7999', // Dark moderate blue
    orangered: '#ffa500', // Pure (or mostly pure) orange

    good: 'green',
    neutral: 'blue',
    bad: 'red',
  },

  sizes: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
    xxl: '128px',
    xxxl: '256px',
    xxxxl: '512 px',
  },

  borders: {
    primary: `1px solid #e5eaf1`,
  },

  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },

  shadows: {
    primary: '9px 3px 25px -4px rgba(24, 94, 186, 0.5)',
    secondary: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    btn: 'inset 0 0 0 3px #3a7999',
  },
  transform: {
    scale: 'scale(1.05)',
  },
  transition: {
    transition: 'all 500ms ease', 
  }
};
