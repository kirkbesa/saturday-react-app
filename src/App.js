import './App.css';
import { useState } from 'react';
import Home from './pages/Home.js';

export default function App() {
  {/* MIDTERMS */}
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  const users = [
    { username: "john", password: "123456" },
    { username: "mary", password: "456" }
  ];

  const validate = (e) => {
    e.preventDefault();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      setValid(true);
      alert("Login Success");
    } else {
      alert("Login Failed");
    }
  }
  
  return (
      <div>

        {valid ? <Home /> : 

          <div className="login-parent-container">
            <div className="login-container"> 

              <h1>Login</h1>

              <form onSubmit={validate}>
                  <input required type='string' placeholder='Username' value={username} onChange= {(e) => setUsername(e.target.value)}></input>
                  <input required type='password' placeholder='Password' value={password} onChange= {(e) => setPassword(e.target.value)}></input>

                  <br />

                  <button type="submit" className="login-button">Login</button>

                  <hr/>

                  <button className="createacc-button">Create Account</button>
              </form>

            </div>
          </div>

        }

      </div>
  );
}