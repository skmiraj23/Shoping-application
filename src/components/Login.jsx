import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const Login = () => {
  const [data, setData] = useState({
    username: '',
    pass: ''
  });

  const [showUsername, setShowUsername] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', data.username);
    localStorage.setItem('pass', data.pass);
    setShowUsername(true);

    // Optional: Navigate after 2 seconds
    setTimeout(() => {
      navigate("/products");
    }, 2000);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      {!showUsername ? (
        <form className="login-form shadow p-4 rounded-4" onSubmit={handlesubmit}>
          <h2 className="text-center mb-4">Login</h2>

          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter Username"
              onChange={handleChange}
              value={data.username}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="pass"
              className="form-control"
              placeholder="Enter Password"
              onChange={handleChange}
              value={data.pass}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">Submit</button>
        </form>
      ) : (
        <div className="welcome-message text-center shadow p-4 rounded-4">
          <h2>Welcome, <span className="username-highlight">{data.username}</span>!</h2>
          <p>Redirecting to products...</p>
        </div>
      )}
    </div>
  );
};

export default Login;
