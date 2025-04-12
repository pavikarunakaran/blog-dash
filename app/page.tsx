'use client';
import { Box, Button, Container, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

export default function Home() {
  return (
    <Container maxWidth="lg">
      <HeroSection>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              color: 'primary.main',
              mb: 3
            }}
          >
            Share Your Thoughts With The World
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              color: 'text.secondary'
            }}
          >
            A beautiful space to express yourself and discover amazing stories
          </Typography>
          <Link href="/posts" passHref>
            <Button 
              variant="contained" 
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 50,
                textTransform: 'none',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              }}
            >
              Start Reading
            </Button>
          </Link>
        </Box>
      </HeroSection>

      <Box sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            fontWeight: 700,
            mb: 6,
            color: 'text.primary'
          }}
        >
          Why Choose Our Platform?
        </Typography>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4}
          justifyContent="center"
        >
          {[
            {
              title: 'Beautiful Writing',
              desc: 'Our editor makes writing a pleasure',
              color: '#4A00E0'
            },
            {
              title: 'Engage Readers',
              desc: 'Connect with an active community',
              color: '#8E2DE2'
            },
            {
              title: 'Easy Sharing',
              desc: 'Share your stories with one click',
              color: '#00B4DB'
            }
          ].map((feature, index) => (
            <FeatureCard key={index} sx={{ borderTop: `4px solid ${feature.color}` }}>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  color: feature.color
                }}
              >
                {feature.title}
              </Typography>
              <Typography variant="body1">
                {feature.desc}
              </Typography>
            </FeatureCard>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}