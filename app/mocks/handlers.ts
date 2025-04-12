// mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('https://67fa1ab8094de2fe6ea32dab.mockapi.io/api/v1/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Test Post',
          body: 'This is a test post',
          userId: 1,
          author: 'Test User',
          date: '2023-05-01'
        }
      ])
    );
  }),
  // Add other handlers as needed...
];
