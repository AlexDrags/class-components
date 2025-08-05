import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout.tsx';
import App from './App.tsx';
import AboutPage from './pages/about.tsx';
import NotFound from './pages/404.tsx';
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// import {
//   useQuery,
//   useMutation,
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query';

// const queryClient = new QueryClient();

createRoot(rootElement).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </QueryClientProvider> */}
  </StrictMode>
);
