import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import './index.css';
import StudentProfile from './pages/UpdateProfile/StudentProfile';
import StudentDashboard from './pages/Dasboard/Student';
import Jobs from './pages/Dasboard/Student/Jobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/student/create-profile",
    element: <StudentProfile />
  },
  {
    path: "/student/dashboard",
    element: <StudentDashboard />
  },
  {
    path: "/student/jobs",
    element: <Jobs />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals