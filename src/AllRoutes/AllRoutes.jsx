import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from "../Pages/Home"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const AllRoutes = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AllRoutes