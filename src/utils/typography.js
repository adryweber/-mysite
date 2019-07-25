import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"
import altonTheme from "typography-theme-alton"


altonTheme.baseFontSize = '18px';
altonTheme.headerFontFamily = ['Montserrat', 'Helvetica', 'sans-serif'];
altonTheme.bodyFontFamily = ['Montserrat', 'Helvetica', 'sans-serif'];

altonTheme.headerColor = '#383840';
altonTheme.bodyColor = '#383840';

altonTheme.googleFonts = [
    {
      name: 'Montserrat',
      styles: [
        '500',
        '700',
      ],
    }
];

const typography = new Typography(altonTheme) // fairyGateTheme


export const { scale, rhythm, options } = typography
export default typography
