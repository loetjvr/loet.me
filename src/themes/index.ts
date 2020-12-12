import { createMuiTheme } from '@material-ui/core';
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    }
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});

export { colors, theme };
