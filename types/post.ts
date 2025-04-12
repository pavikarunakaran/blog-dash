export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    date?: string; // Add optional date field
    author?: string;
  }
  
  export interface PostFormData {
    title: string;
    body: string;
    userId: number;
  }