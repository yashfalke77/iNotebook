import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif",
    ].join(','),
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
