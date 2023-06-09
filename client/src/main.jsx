import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider} from 'react-router-dom'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'
import router from './router/index'
import { Container } from '@mui/material'
import './firebase/config.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{textAlign:'center', marginTop:'50px'}} >
      <RouterProvider router={router}/>
    </Container>

    
  </React.StrictMode>,
)
