import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/login.tsx'  
import Admindashboard from './component/admin_dashboard.tsx'
import Customerdashboard from './component/member_dashboard.tsx'
import Home from './component/home.tsx'
import Signup from './component/signup.tsx'

function App() {
  return (
      <div> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/customerdashboard" element={<Customerdashboard />} />
        </Routes>  
      </div>       
  )
}
export default App
