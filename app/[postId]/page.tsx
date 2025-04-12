'use client';

import { useGetPostByIdQuery } from '../lib/api/posts';
import { useParams } from 'next/navigation';
import { Typography, CircularProgress, Alert, Button } from '@mui/material';
import Link from 'next/link';

export default function PostDetail() {
  const { postId } = useParams();
  const { data: post, isLoading, isError } = useGetPostByIdQuery(Number(postId));

  return (
    <>
      {isLoading && <CircularProgress />}
      {isError && <Alert severity="error">Error loading post</Alert>}
      {post && (
        <>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            By User {post.userId}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.body}
          </Typography>
          <Link href="/posts" passHref>
            <Button variant="contained" color="primary">
              Back to Posts
            </Button>
          </Link>
        </>
      )}
    </>
  );
}