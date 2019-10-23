import { createMuiTheme } from '@material-ui/core/styles';
import colors from '../scss/base/variables/colors.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
});

export default theme;