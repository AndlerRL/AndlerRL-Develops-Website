import { yellow, lightBlue, blueGrey } from '@material-ui/core/colors'

const breakpoints = ['40em', '52em', '64em'];

const colors = {
  primary: {
    50: yellow[50],
    100: yellow[100],
    200: yellow[200],
    300: yellow[300],
    400: yellow[400],
    500: yellow[500],
    600: yellow[600],
    700: yellow[700],
    800: yellow[800],
    900: yellow[900],
    A100: yellow.A100,
    A200: yellow.A200,
    A400: yellow.A400,
    A700: yellow.A700
  },
  secondary: {
    50: lightBlue[50],
    100: lightBlue[100],
    200: lightBlue[200],
    300: lightBlue[300],
    400: lightBlue[400],
    500: lightBlue[500],
    600: lightBlue[600],
    700: lightBlue[700],
    800: lightBlue[800],
    900: lightBlue[900],
    A100: lightBlue.A100,
    A200: lightBlue.A200,
    A400: lightBlue.A400,
    A700: lightBlue.A700,
  },
  secondaryAlt: {
    50: blueGrey[50],
    100: blueGrey[100],
    200: blueGrey[200],
    300: blueGrey[300],
    400: blueGrey[400],
    500: blueGrey[500],
    600: blueGrey[600],
    700: blueGrey[700],
    800: blueGrey[800],
    900: blueGrey[900],
  },
  blackDepth: {
    100: '#414141',
    200: '#303030',
    300: '#232323',
    400: '#121212',
    500: '#010101'
  },
  error: {
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
  },
  warning: {
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
  },
  success: {
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
};

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

/**
 * Typographic scale
 */
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

const lineHeights = [1, 1.125, 1.25, 1.5];

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
};

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
};

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16];

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii
};
