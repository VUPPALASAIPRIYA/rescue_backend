import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    role: '',
  });
  const [expandedSection, setExpandedSection] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      console.error('No token found');
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get('http://localhost:2003/api/auth/user/{email}', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      if (error.response && error.response.status === 401) {
        // Handle unauthorized error, e.g., redirect to login or refresh token
        navigate('/login');
      } else {
        // Handle other errors
        // ...
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Account Settings</h2>
      <div style={styles.section}>
        <div style={styles.header} onClick={() => toggleSection('personal')}>
          Personal Information
        </div>
        {expandedSection === 'personal' && (
          <div style={styles.content}>
            <div style={styles.field}>
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={userData.fullName}
                readOnly
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                readOnly
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={userData.role}
                readOnly
                style={styles.input}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  header: {
    padding: '10px',
    backgroundColor: '#f7f7f7',
    cursor: 'pointer',
  },
  content: {
    padding: '10px',
  },
  field: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '4px',
    color: '#555',
    pointerEvents: 'none',
  },
};

export default AccountSettings;
