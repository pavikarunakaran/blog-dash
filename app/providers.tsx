'use client';

import { Provider } from 'react-redux';
import { store } from './lib/store';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './lib/theme';
import CssBaseline from '@mui/material/CssBaseline';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}