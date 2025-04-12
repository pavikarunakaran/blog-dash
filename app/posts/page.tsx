'use client';
import { useGetPostsQuery } from '../lib/api/posts';
import {
  Container,
  CircularProgress,
  Alert,
  Stack,
  Pagination,
  Box
} from '@mui/material';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar
} from '@mui/material';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { CalendarToday, AccessTime } from '@mui/icons-material';
import React, { Suspense } from 'react';

const POSTS_PER_PAGE = 10;

function PostListItem({ post }: { post: any }) {
  const excerpt =
    post.body.length > 100
      ? `${post.body.substring(0, 100)}...`
      : post.body;

  return (
    <Card elevation={0} sx={{ mb: 3, borderBottom: '1px solid #eee' }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Avatar sx={{ width: 32, height: 32 }}>
            {post.author?.charAt(0) || 'U'}
          </Avatar>
          <Box>
            <Typography variant="subtitle2" fontWeight={500}>
              {post.author || `User ${post.userId}`}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarToday sx={{ fontSize: 14, color: 'text.secondary' }} />
              <Typography variant="caption" color="text.secondary">
                {post.date || 'Unknown date'}
              </Typography>
              <AccessTime
                sx={{ fontSize: 14, color: 'text.secondary', ml: 1 }}
              />
              <Typography variant="caption" color="text.secondary">
                {Math.ceil(post.body.length / 200)} min read
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Link href={`/${post.id}`} passHref>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1,
              display: 'block',
              textDecoration: 'none',
              color: 'text.primary',
              '&:hover': { color: 'primary.main' }
            }}
          >
            {post.title}
          </Typography>
        </Link>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {excerpt}
        </Typography>

        <Link href={`/${post.id}`} passHref>
          <Button
            size="small"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              px: 0,
              color: 'primary.main'
            }}
          >
            Read more
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

const PostsPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;

  const { data, error, isLoading } = useGetPostsQuery({
    page: currentPage,
    limit: POSTS_PER_PAGE
  });

  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  const handlePageChange = (_: any, value: number) => {
    router.push(`/posts?page=${value}`);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        {isLoading ? (
          <CircularProgress sx={{ display: 'block', mx: 'auto' }} />
        ) : error ? (
          <Alert severity="error">Error loading posts</Alert>
        ) : (
          data?.posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))
        )}

        {/* Pagination */}
        {!isLoading && !error && totalPages > 1 && (
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
            />
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default function PostsPage() {
  return (
    <Suspense fallback={<CircularProgress sx={{ display: 'block', mx: 'auto' }} />}>
      <PostsPageContent />
    </Suspense>
  );
}
