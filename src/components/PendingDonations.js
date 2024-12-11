import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PendingDonationsPage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:2003/api/donations/pending');
        setDonations(response.data);
      } catch (err) {
        console.error('Error fetching donations:', err);
        setError('Failed to load pending donations.');
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  const approveDonation = async (id) => {
    try {
      await axios.post(`http://localhost:2003/api/donations/approve/${id}`);
      alert('Donation approved successfully!');
      setDonations(donations.filter(donation => donation.id !== id));
    } catch (err) {
      console.error('Error approving donation:', err);
      alert('Failed to approve donation.');
    }
  };

  if (loading) return <p>Loading pending donations...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Pending Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <strong>{donation.name}</strong> - {donation.details}{' '}
            <button onClick={() => approveDonation(donation.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingDonationsPage;
