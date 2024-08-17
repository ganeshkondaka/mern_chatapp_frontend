import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Landingpage from './components/Landingpage.jsx'
import Chatpage_component from './components/Chatpage_component.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
      <Route index element={<Landingpage></Landingpage>}></Route>
      <Route path="signup" element={<Signup></Signup>}></Route>
      <Route path="login"  element={<Login></Login>}></Route>
      <Route path="chatpage"  element={<Chatpage_component></Chatpage_component>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
