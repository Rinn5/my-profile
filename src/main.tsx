import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Top from './top/Top'
import './index.css'

const router = createBrowserRouter([
  { path: "/", Component: Top }
], {
  basename: '/my-profile/'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
