import { QueryClient } from '@tanstack/react-query'

// Create a shared QueryClient instance for the app
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute (adjust as needed)
    },
  },
})