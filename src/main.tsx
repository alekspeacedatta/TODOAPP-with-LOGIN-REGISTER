import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import User from './User'
import Register from './Register-Login/Register/Register'
import Login from './Register-Login/Login/Login'
import UserToDo from './UserTodo'
import AddTodo from './AddTodo'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <User/>
      <div className="login-register">
        <Register/>
        <Login/>
      </div>
      <div>
        <UserToDo/>
        <AddTodo/>
      </div>
    </QueryClientProvider>
  </StrictMode>,
)
