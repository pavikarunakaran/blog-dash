'use client';
import { Card, CardContent, Typography, Button, Avatar, Box, Stack } from '@mui/material';
import Link from 'next/link';
import { Post } from '../../types/post';
import { CalendarToday, AccessTime } from '@mui/icons-material';

export default function PostListItem({ post }: { post: Post }) {
  const excerpt = post.body.length > 100 
    ? `${post.body.substring(0, 100)}...` 
    : post.body;

  return (
    <Card elevation={0} sx={{ 
      mb: 3, 
      borderBottom: '1px solid #eee',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
      }
    }}>
      <CardContent>
        {/* Author and Date */}
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
              <AccessTime sx={{ fontSize: 14, color: 'text.secondary', ml: 1 }} />
              <Typography variant="caption" color="text.secondary">
                {Math.ceil(post.body.length / 200)} min read
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Post Title */}
        <Typography 
          variant="h6" 
          component={Link}
          href={`/posts/${post.id}`}
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

        {/* Post Excerpt */}
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {excerpt}
        </Typography>

        {/* Read More Button */}
        <Button
          component={Link}
          href={`/posts/${post.id}`}
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
      </CardContent>
    </Card>
  );
}
