# Bloggle - A Blog Dashboard

<img width="1419" alt="Screenshot 2025-04-12 at 4 07 44 PM" src="https://github.com/user-attachments/assets/b18dbcea-3900-4c24-b2c4-6e00db73724b" />

<img width="1427" alt="Screenshot 2025-04-12 at 4 08 46 PM" src="https://github.com/user-attachments/assets/0f9ef74c-96be-4d02-a36b-82ada8f79de5" />



## Table of Contents
- [Features]
- [Technologies]
- [Installation]
- [Development]
- [ProjectStructure]
- [APIEndpoints]


## Features

**Modern UI** with Material-UI components  
**Create, Read** blog posts with rich content  
**Real-time updates** with RTK Query  
**Fully responsive** design  
**Reading time** estimates  
**Post dates** and author information  
**Pagination** for easy browsing  
**Type-safe** with TypeScript  

## Technologies

### Frontend
- Next.js 14 (App Router)
- React 18
- Material-UI (MUI v5)
- Redux Toolkit (RTK Query)
- TypeScript
- react-hook-form

### Build Tools & Quality
- Vite
- ESLint
- Prettier
- Husky (Git hooks)
- Mock Service Worker (MSW) for API mocking in development
- Faker.js for generating mock data

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bloggle.git
   cd bloggle
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.


## Mock API Setup (mockapi.io)

This app uses mockapi.io for simulating backend APIs.

To set it up:

1. Go to https://mockapi.io and sign in with GitHub or Google.

2. Click "Create New Project" – name it Bloggle or similar.

3. Create a resource called posts with fields:
    - title (string)

    - content (text)

    - author (string)

    - createdAt (date)

    - readingTime (number)

4. Copy your Base URL from the top (e.g., https://yourproject.mockapi.io/api/v1).

5. Update your frontend code to use this URL for API requests.
   

## Development

- Code style is enforced with **Prettier** and **ESLint**
- Git hooks are configured using **Husky**
- API mocking is handled using **MSW**

## Project Structure

```
blog-dash/
├── app/
│   ├── [postId]/           # Dynamic post pages
│   ├── add-post/           # New blog post page
│   ├── posts/              # Posts listing
│   ├── components/         # Reusable components
│   ├── lib/                # API and state management
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── types/                  # TypeScript types
├── .eslintrc.json          # ESLint config
├── .prettierrc             # Prettier config
└── README.md               # This file
```

## API Endpoints

All endpoints use **mockapi.io**, and data is generated using **faker.js**.

| Endpoint        | Method | Description           |
|----------------|--------|-----------------------|
| `/posts`       | GET    | Get all posts         |
| `/posts/:id`   | GET    | Get single post       |
| `/add-post`    | POST   | Create new blog post  |

## Challenges Faced

While I’ve always been more confident working on the backend, this project gave me a great opportunity to dive deeper into frontend development and refine my skills. I’ve worked with frontend frameworks before, but building a complete UI with Next.js 14, TypeScript, and Material-UI me a lot about building clean, intuitive UIs and structuring frontend code using modern tools.

Initially, I started developing the blog dashboard using JSONPlaceholder just to get things rolling. It was great for quick prototyping, but I soon realized that it doesn’t persist new data or allow editing/deleting, which made the development experience limited and unrealistic for CRUD operations. So I decided to remodel the entire backend layer using MockAPI.io. That brought in more flexibility and helped me simulate a real-world API with full CRUD support and even relational data.

Another interesting challenge I faced was around hydration errors in Next.js. It happened mainly due to mismatches between server-rendered content and client-side rendering, especially when working with dynamic content and Material-UI components. It was frustrating at first, but digging deeper into how SSR and CSR work together in Next.js taught me a lot about the rendering lifecycle. It was both challenging and exciting to debug and resolve these kinds of issues.

Despite the learning curve, I actually enjoyed the process. I got to stretch my creative side with UI/UX and learned how to integrate frontend best practices into my development workflow.

## Imporvements

Potential improvements:

1. Authentication – Implement login with OAuth or supabase for secuirty.

2. Search & Filters – Add a search bar and tag-based filtering for blog search by name.

3. Image Uploads – Support for uploading blog cover images via S3.

4. Unit & Integration Tests – Right now I have added test case for only one file (api/posts.ts), need to add proper test coverage for other files as well.
