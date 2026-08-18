import { Layout } from '@/components/Layout'
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from './components/ui/sonner'
import type React from 'react'
import { useAuthStore } from './stores/auth'
import { Login } from './components/pages/auth/Login'
import { SignUp } from './components/pages/auth/Signup'
import { IdeasPage } from './components/pages/ideias'
import { Members } from './components/pages/members'

function ProtectdRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()

  return isAuthenticated ? <>{ children }</> : <Navigate to='/' replace/>
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()

  return !isAuthenticated ? <>{ children }</> : <Navigate to='/' replace/>
}

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path='/signup'
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />

          <Route
            path='/'
            element={
              <ProtectdRoute>
                <IdeasPage />
              </ProtectdRoute>
            }
          />
          <Route
            path='/members'
            element={
              <ProtectdRoute>
                <Members />
              </ProtectdRoute>
            }
          />
        </Routes>
      </Layout>

      <Toaster/>
    </>
  
  )
}

export default App
