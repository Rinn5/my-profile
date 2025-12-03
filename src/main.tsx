import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Top from './top/Top'
import Profile from './profile/Profile';
import Project from './projects/Project';
import Publication from './publications/Publication';
import Contact from './contact/Contact';
import RootLayout from './RootLayout';

import './index.css'

const router = createBrowserRouter([
  { 
    element: <RootLayout />,
    children: [
      { path: "/", element: <Top /> },
      { path: "/profile", element: <Profile /> },
      { path: "/projects", element: <Project /> },
      { path: "/publication", element: <Publication /> },
      { path: "/contact", element: <Contact /> }
    ]
  }
], {
  basename: '/my-profile'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
