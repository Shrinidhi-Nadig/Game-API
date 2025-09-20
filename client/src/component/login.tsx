import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState ('');
    const navigate = useNavigate();

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        if(username === 'admin' && password === 'password'){
            alert('Login successful!');
            navigate('/admindashboard');
        } else {
            if(username === 'customer' && password === 'password'){
                alert('Login successful!');
                navigate('/customerdashboard');
            } else {
            alert('Invalid credentials, please try again.');
        }
    }

    }  
    return (
    //  <div className="login-container">
    <main>
      <h1> Game Club </h1>
      <div className="login-form-box">
        <h2>Login To Start with your Game!!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="blacktext">don't have any account?<Link className="bluetext" to="/signup"> SignUp</Link> </p>
      </div>
    </main>

    );
}

export default Login
