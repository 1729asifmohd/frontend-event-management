// import { createMuiTheme } from '@material-ui/core';
import { createTheme,responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

// import overrides from './overrides';

const baseTheme = {
  palette
};

const muitheme = createTheme(baseTheme);

const theme=responsiveFontSizes(muitheme);

export default theme;
