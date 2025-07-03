import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Sahifalar
import {EnterPage,Home } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
        <MainLayout />
    ),
    children: [
      {
        index: true, 
        element: <EnterPage />
      },
      {
        path: "/home", 
        element: <Home />
      },
      
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
