import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Ipin from './Ipin/Ipin';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import * as serviceWorker from './serviceWorker';
import LoginTab from './PassCodeVerification/PassCodeVerification';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "10px",
        padding: "10px"
      }
    }
  }
  });

//const theme = createMuiTheme({  palette: {    primary: {      light: orange[200] ,      main: '#FB8C00',      dark: '#EF6C00',      contrastText: 'rgb(0,0,0)'    }  }})
ReactDOM.render(<MuiThemeProvider theme={theme}>  
  <LoginTab/>  </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
