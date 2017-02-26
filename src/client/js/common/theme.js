const primaryColor = '#FA023C';

export default {
  primaryColor,
  primaryColorDark: '#FA023C',
  accentColor: '#88C100',
  backgroundDark: '#666666',
  dividerColor: '#E0E0E0',
  darkTextColor: '#2E2E2E',
  lightestTextColor: '#FFF',
  smallFontSize: '0.85rem',
  mediumFontSize: '1rem',
  largeFontSize: '1.3rem',
  titleFontSize: '2.5rem',
  h2FontSize: '1.5rem',
  boldFontWeight: '600',
  normalFontWeight: '400',
  lightFontWeight: '100',
  circleImage: size => ({
    width: `${size}px`,
    height: size,
    objectFit: 'cover',
    overflow: 'hidden',
    border: `thin solid ${primaryColor}`,
    borderRadius: '50%',
    '@media only screen and (max-width: 768px)': {
      width: `${size * 0.75}px`,
      height: `${size * 0.75}px`
    }
  }),
  marginResponsive: {
    margin: '4%',
    '@media only screen and (min-width: 480px)': {
      margin: '0 7%'
    },

    '@media only screen and (min-width: 768px)': {
      margin: '0 10%'
    },

    '@media only screen and (min-width: 992px)': {
      margin: '0 13%'
    },

    '@media only screen and (min-width: 1200px)': {
      margin: '0 15%'
    }
  }
};
