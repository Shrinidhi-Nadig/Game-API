import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './signup.css'

function signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState ('');    
    const navigate = useNavigate();

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);  
        
        if(username === '') {
            alert('Username cannot be empty!');
            return;
        }else if(password === '') {
            alert('Password cannot be empty!');
            return;
        }
        else if(password !== confirmPassword) {
            alert('Password and Confirm Password do not match!');
            return;
        }
        else if(email === '') {
            alert('Email cannot be empty!');
            return;
        }else{
            alert('Registration Successful!');
             navigate('/login');
        }   
    }  
   return (
  <main>
    <h1> Game Club </h1>
      <div className="login-form-box">
        <h2>Sign Up to Begin your Game journey</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Re-enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>
        <p className="blacktext">Already have an account?<Link className="bluetext" to="/"> Login</Link> </p>
      </div>
    </main>
);
}   
export default signup