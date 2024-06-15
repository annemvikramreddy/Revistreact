import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import Context from './Context/Context.jsx'



const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY
ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <Context>
    <App/>
    </Context>
  </ClerkProvider>
)
