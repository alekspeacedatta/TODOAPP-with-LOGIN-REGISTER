import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import User from './components/User'
import Register from './components/Register'
import Login from './components/Login'
import UserToDo from './components/UserToDo'
import AddTodo from './components/AddTodo'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <User/>
      <div className="login-register">
        <Register/>
        <Login/>
        <AddTodo/>
        <UserToDo/>
      </div>
      <div>
      </div>
    </QueryClientProvider>
  </StrictMode>,
)
