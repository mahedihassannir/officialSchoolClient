import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import AuProvider from './Authentication/AuProvider'

// tanstack import globaly 
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
      <AuProvider>
        {/* starts query */}
        <QueryClientProvider client={queryClient}>

          <RouterProvider router={router}></RouterProvider>

        </QueryClientProvider>
        {/* query ends  */}

      </AuProvider>

    </div>
  </React.StrictMode>,
)
