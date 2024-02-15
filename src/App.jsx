import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './assets/components/About'
import Home from './assets/components/Home'
import Footer from './assets/components/shared/Footer'
import Navbar from './assets/components/shared/Navbar'
import Login from './assets/components/Login'
import Admin from './assets/components/admin/Admin'
import Locations from './assets/components/Locations'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/locations' element={ <Locations /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/admin' element={ <Admin /> } />
        </Routes>
      <Footer />
    </>
  )
}

export default App
