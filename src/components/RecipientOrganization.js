import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipientOrganization = () => {
  const navigate = useNavigate();

  const [organizationName, setOrganizationName] = useState('');
  const [message, setMessage] = useState('');

  const styles = {
    container: { display: 'flex', height: '100vh', backgroundColor: '#f0f4f8', fontFamily: 'Arial, sans-serif' },
    sidebar: { width: '220px', backgroundColor: '#212529', padding: '20px', color: 'white', display: 'flex', flexDirection: 'column', position: 'sticky', top: '0' },
    sidebarItem: { marginBottom: '15px', color: 'white', textDecoration: 'none', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '10px 15px', borderRadius: '5px' },
    mainContent: { flex: '1', padding: '30px', overflowY: 'auto', backgroundColor: '#ffffff' },
    header: { backgroundColor: '#e2e6ea', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', marginBottom: '30px', textAlign: 'center' },
    headerTitle: { fontSize: '32px', fontWeight: 'bold', color: '#343a40', marginBottom: '10px' },
    sectionTitle: { fontSize: '24px', fontWeight: 'bold', color: '#343a40', marginBottom: '20px' },
    form: { marginBottom: '20px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' },
    input: { width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px' },
    button: { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s', fontSize: '16px' },
    message: { marginTop: '10px', color: 'green' },
    error: { marginTop: '10px', color: 'red' },
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!organizationName) {
      setMessage('Organization name is required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:2003/api/organizations', { name: organizationName });
      console.log('Data sent to database:', response.data); // Log the response data
      setMessage(response.data.message || 'Organization registered successfully!');
      setOrganizationName('');
    } catch (error) {
      console.error('Error registering organization:', error);
      setMessage('Failed to register organization');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <button onClick={() => navigate('/RecipientOrganization')} style={styles.sidebarItem}>Dashboard</button>
        <button onClick={() => navigate('/FoodRequests')} style={styles.sidebarItem}>Food Requests</button>
        <button onClick={() => navigate('/DonationHistory')} style={styles.sidebarItem}>Donation History</button>
        <button onClick={() => navigate('/RecepProfile')} style={styles.sidebarItem}>Profile Settings</button>
        <button onClick={() => navigate('/ContactSupport')} style={styles.sidebarItem}>Contact Support</button>
      </div>
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Recipient Organization Dashboard</h2>
        </div>
        <div style={styles.sectionTitle}>Register Your Organization</div>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Organization Name"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
        {message && <div style={message.includes('successfully') ? styles.message : styles.error}>{message}</div>}
      </div>
    </div>
  );
};

export default RecipientOrganization;
