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
