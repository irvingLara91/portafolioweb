import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0ea5ea', // Cyan accent
    },
    secondary: {
      main: '#B388FF', // Purple accent
    },
    background: {
      default: '#0a0f1a',
      paper: 'rgba(11, 15, 26, 0.8)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b8c4',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Fira Code, monospace',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Fira Code, monospace',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Fira Code, monospace',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Fira Code, monospace',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});