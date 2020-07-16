import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


const colorscheme = createMuiTheme({
  palette: {
    common: { black: '#0D948E', white: '#0D948E' },
    primary: { main: '#0D948E', dark: '#0D948E', light: '#0D948E' },
    text: { primary: '#0D948E', secondary: '#0D948E' }
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid #0D948E`
        }
      }
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={colorscheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
