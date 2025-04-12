'use client';
import { Container, Typography } from '@mui/material';
import PostForm from '../components/PostForm';

export default function AddPostPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Create New Post
      </Typography>
      <PostForm />
    </Container>
  );
}