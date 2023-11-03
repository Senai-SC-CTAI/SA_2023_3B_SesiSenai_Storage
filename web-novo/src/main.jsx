import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.jsx'
import { Home } from './screens/Home'
import { Password } from './screens/ForgetPassword'
import { Register } from './screens/Register'
import { Product } from './screens/Product'
import { Profile } from './screens/Profile'
import { Environments } from './screens/Environments'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/password',
      element: <Password />
    },
    {
      path: '/product',
      element: <Product />
    },
    {
      path: '/environments',
      element: <Environments />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
