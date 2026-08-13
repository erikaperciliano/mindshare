import { Layout } from '@/components/Layout'
import { Routes, Route } from "react-router-dom"
import { Login } from '@/components/pages/Login'
import { Toaster } from './components/ui/sonner'
import { SignUp } from './components/pages/Signup'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={ <SignUp/>} />
        </Routes>
      </Layout>

      <Toaster/>
    </>
  
  )
}

export default App
