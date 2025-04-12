import 'cross-fetch/polyfill';

import { setupServer } from 'msw/node';
import { handlers } from '../../../mocks/handlers';
import { postsApi } from '../posts';
import { configureStore } from '@reduxjs/toolkit';

// Set up MSW server
const server = setupServer(...handlers);

// Initialize Redux store with postsApi
const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

// MSW lifecycle hooks
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('postsApi', () => {
  it('should fetch posts', async () => {
    const result = await store.dispatch(
      postsApi.endpoints.getPosts.initiate({ page: 1, limit: 1 })
    );

    expect(result.data?.posts).toEqual([
        {
          id: "1",
          title: "Customizable clear-thinking moratorium",
          author: "Author Joseph Jerde",
          body: "Cohaero balbus decens verbera confido acquiro varietas earum appono...",
          date: expect.any(String),
          userId: 83,
        },
        {
          id: "2",
          title: "Universal contextually-based collaboration",
          author: "Author Ms. Claire Mayer DVM",
          body: "Theologus sumptus voluptatem terminatio pectus vespillo...",
          date: "Dec 18, 2024",
          userId: 67,
        },
      ]);
  });
});
