import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import AddChocolate from './components/AddChocolate.jsx';
import UpdateChocolate from './components/UpdateChocolate.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/chocolates')
      },
      {
        path: "/add",
        element: <AddChocolate />
      },
      {
        path: '/update/:id',
        element: <UpdateChocolate />,
        loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
