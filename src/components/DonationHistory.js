import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:2003/api/donations/approved') // Fetch only approved donations
      .then((response) => {
        setDonations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching donations:', error);
        setError('Failed to load donation history. Please try again later.');
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#eef2f3',
      backgroundImage: 'linear-gradient(135deg, #cfd9df 25%, #e2ebf0 100%)',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#004d40',
      textAlign: 'center',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      color: '#4f6367',
      textAlign: 'center',
      marginBottom: '35px',
    },
    historyContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
      maxWidth: '700px',
      margin: '0 auto',
    },
    donationItem: {
      borderBottom: '1px solid #e0e0e0',
      padding: '15px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    donationDetails: {
      fontSize: '16px',
      color: '#4a4a4a',
    },
    itemName: {
      fontWeight: 'bold',
      color: '#00796b',
    },
    date: {
      fontSize: '14px',
      color: '#757575',
    },
  };

  if (loading) return <p>Loading donation history...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Donation History</h2>
      <p style={styles.description}>Review the list of all approved donations made to the organization.</p>
      <div style={styles.historyContainer}>
        {donations.map((donation) => (
          <div key={donation.id} style={styles.donationItem}>
            <div style={styles.donationDetails}>
              <span style={styles.itemName}>{donation.itemType}</span> - {donation.quantity}
            </div>
            <div style={styles.date}>{new Date(donation.pickupDate).toLocaleDateString()}</div>
          </div>
        ))}
        {donations.length === 0 && <p>No approved donations available to display.</p>}
      </div>
    </div>
  );
};

export default DonationHistory;
