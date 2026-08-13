import { Layout } from '@/components/Layout'
import { Routes, Route } from "react-router-dom"
import { Login } from '@/components/pages/Login'
import { SignUp } from './components/pages/SignUp'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={ <SignUp/>} />
      </Routes>
    </Layout>
  )
}

export default App
