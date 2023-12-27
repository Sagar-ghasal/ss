import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Button from '@mui/material/Button';
import Learn from './components/Learn';
import { ColorModeContext, useMode } from './theme';
import { BrowserRouter, Routes } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';
import { ThemeRoute } from './Routes';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2196F3', // Custom primary color
//     },
//     secondary: {
//       main: '#FF4081', // Custom secondary color
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, Arial, sans-serif', // Custom font family
//   },
// });

function App() {
  const [colorMode, theme] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      {/* <Learn/> */}

        <BrowserRouter>
        <ThemeRoute/>
        </BrowserRouter>

    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
