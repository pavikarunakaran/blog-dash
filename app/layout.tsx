import { Inter } from 'next/font/google';
import { Providers } from './providers';
import type { Metadata } from 'next';
import './globals.css';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bloggle - Medium-like Blog',
  description: 'A beautiful Medium-inspired blog platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppBar 
            position="static" 
            elevation={0}
            sx={{ 
              backgroundColor: 'white',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              py: 1
            }}
          >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography component={Link} href="/" variant="h6">
                Bloggle
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button component={Link} href="/posts" sx={{ mr: 2 }}>
                Browse
              </Button>
              <Typography 
                variant="h6" 
                component={Link} 
                href="/"
                sx={{ 
                  fontWeight: 700,
                  color: 'black',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' }
                }}
              >

              </Typography>
              <Box>
                <Button 
                  component={Link}
                  href="/add-post"
                  variant="contained"
                  disableElevation
                  sx={{
                    borderRadius: 20,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 600
                  }}
                >
                  Write
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          {children}
        </Providers>
      </body>
    </html>
  );
}