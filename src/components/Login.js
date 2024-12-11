import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Check for empty fields
    if (!email || !password || !userRole) {
      setErrors({ form: 'Please fill in all fields.' });
      return;
    }

    try {
      const response = await fetch("http://localhost:2003/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userRole })
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({ form: errorData.message || "Invalid credentials." });
        return;
      }

      const data = await response.json();
      alert(`Welcome back, ${data.role}!`);
      onLogin(data);

      // Navigate based on role
      switch (data.role) {
        case 'Admin':
          navigate('/admin');
          break;
        case 'DataAnalyst':
          navigate('/dataanalyst');
          break;
        case 'FoodDonor':
          navigate('/fooddonor');
          break;
        case 'RecipientOrganization':
          navigate('/recipientorganization');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      setErrors({ form: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <div>
          <label>Role:</label>
          <select 
            value={userRole} 
            onChange={(e) => setUserRole(e.target.value)} 
            className={errors.userRole ? 'error' : ''}
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="DataAnalyst">Data Analyst</option>
            <option value="FoodDonor">Food Donor</option>
            <option value="RecipientOrganization">Recipient Organization</option>
          </select>
          {errors.userRole && <div className="error-message">{errors.userRole}</div>}
        </div>
        <button type="submit">Login</button>
        {errors.form && <div className="form-error">{errors.form}</div>}
      </form>

      <style>
        {`
          .login-container {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          form div {
            margin-bottom: 15px;
          }

          label {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 14px;
            color: #333;
          }

          input, select {
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
            transition: border-color 0.3s ease;
          }

          input:focus, select:focus {
            outline: none;
            border-color: #007bff;
          }

          button {
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 10px;
          }

          button:hover {
            background-color: #0056b3;
          }

          button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .error {
            border-color: red;
          }

          .error-message {
            color: red;
            font-size: 12px;
            margin-top: 5px;
          }

          .form-error {
            color: red;
            font-size: 14px;
            margin-top: 15px;
            font-weight: bold;
          }

          /* Responsive Design */
          @media (max-width: 600px) {
            .login-container {
              width: 90%;
              padding: 15px;
            }

            input, select, button {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
