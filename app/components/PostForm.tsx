'use client';
import { useForm } from 'react-hook-form';
import { useAddPostMutation } from '../lib/api/posts'; // Updated import
import { useRouter } from 'next/navigation';
import { Button, TextField, Alert, CircularProgress, Stack } from '@mui/material';

interface PostFormData {
  title: string;
  body: string;
  userId: number;
}

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>();
  
  // Use the correct hook name
  const [addPost, { isLoading, isError }] = useAddPostMutation();
  const router = useRouter();

  const onSubmit = async (data: PostFormData) => {
    try {
      await addPost({
        ...data,
        userId: 1, // Default user ID
      }).unwrap();
      router.push('/posts');
    } catch (err) {
      console.error('Failed to save post:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {isError && (
          <Alert severity="error">
            Failed to create post. Please try again.
          </Alert>
        )}

        <TextField
          label="Title"
          fullWidth
          {...register('title', { required: 'Title is required' })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Content"
          multiline
          rows={6}
          fullWidth
          {...register('body', { required: 'Content is required' })}
          error={!!errors.body}
          helperText={errors.body?.message}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          startIcon={isLoading && <CircularProgress size={20} />}
        >
          {isLoading ? 'Publishing...' : 'Publish Post'}
        </Button>
      </Stack>
    </form>
  );
}