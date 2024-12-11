import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageDonation = () => {
  const [donation, setDonation] = useState({
    itemType: '',
    quantity: '',
    pickupDate: '',
    recipientOrganization: '',
  });

  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch recipient organizations from the backend
    axios
      .get('http://localhost:2003/api/organizations')
      .then((response) => {
        setOrganizations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching organizations:', error);
        setLoading(false);
        setMessage('Failed to load recipient organizations. Please try again later.');
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonation((prevDonation) => ({
      ...prevDonation,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input
    if (!donation.itemType || !donation.quantity || !donation.pickupDate || !donation.recipientOrganization) {
      setMessage('All fields are required. Please fill out the form completely.');
      return;
    }

    // Post donation data to backend
    axios
      .post('http://localhost:2003/api/donations', donation)
      .then(() => {
        setMessage('Donation successfully added!');
        setDonation({ itemType: '', quantity: '', pickupDate: '', recipientOrganization: '' });
      })
      .catch((error) => {
        console.error('Error adding donation:', error);
        setMessage('An error occurred while adding the donation.');
      });
  };

  const styles = {
    container: { padding: '20px', maxWidth: '600px', margin: '0 auto' },
    formGroup: { marginBottom: '15px' },
    label: { fontSize: '16px', fontWeight: '500', marginBottom: '5px', display: 'block' },
    input: { width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' },
    select: { width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '10px 15px', backgroundColor: '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' },
    message: { textAlign: 'center', marginBottom: '15px', fontWeight: 'bold', color: message.includes('success') ? 'green' : 'red' },
  };

  return (
    <div style={styles.container}>
      <h1>Donate Food</h1>
      <p>Use this form to donate food items to recipient organizations.</p>

      {message && <div style={styles.message}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="itemType" style={styles.label}>Item Type</label>
          <input
            type="text"
            id="itemType"
            name="itemType"
            value={donation.itemType}
            onChange={handleInputChange}
            placeholder="E.g., Rice, Vegetables"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="quantity" style={styles.label}>Quantity (kg)</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={donation.quantity}
            onChange={handleInputChange}
            placeholder="E.g., 10"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="pickupDate" style={styles.label}>Pickup Date</label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            value={donation.pickupDate}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="recipientOrganization" style={styles.label}>Recipient Organization</label>
          {loading ? (
            <p>Loading organizations...</p>
          ) : organizations.length > 0 ? (
            <select
              id="recipientOrganization"
              name="recipientOrganization"
              value={donation.recipientOrganization}
              onChange={handleInputChange}
              style={styles.select}
              required
            >
              <option value="" disabled>Select an organization</option>
              {organizations.map((org) => (
                <option key={org.id} value={org.name}>{org.name}</option>
              ))}
            </select>
          ) : (
            <p style={{ color: 'red', textAlign: 'center' }}>No recipient organizations available.</p>
          )}
        </div>

        <button type="submit" style={styles.button}>Donate</button>
      </form>
    </div>
  );
};

export default ManageDonation;
