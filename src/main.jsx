import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import AuProvider from './Authentication/AuProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
      <AuProvider>

        <RouterProvider router={router}></RouterProvider>
        
      </AuProvider>

    </div>
  </React.StrictMode>,
)
