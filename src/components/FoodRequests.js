import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:2003/api/donations')
      .then((response) => {
        setRequests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching donations:', error);
        setLoading(false);
        setMessage('Failed to load donations. Please try again later.');
      });
  }, []);

  const updateDonationStatus = (id, status) => {
    axios
      .put(`http://localhost:2003/api/donations/${id}`, { status })
      .then(() => {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === id ? { ...request, status } : request
          )
        );
        setMessage(`Donation ${status.toLowerCase()} successfully!`);
      })
      .catch((error) => {
        console.error('Error updating donation status:', error);
        setMessage('Failed to update status. Please try again later.');
      });
  };

  const handleStatusUpdate = (id, status) => (event) => {
    event.preventDefault();
    updateDonationStatus(id, status);
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      padding: '15px',
      border: '1px solid #ccc',
      marginBottom: '10px',
      borderRadius: '5px',
    },
    button: {
      margin: '5px',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    approveButton: {
      backgroundColor: '#4caf50',
      color: 'white',
    },
    rejectButton: {
      backgroundColor: '#f44336',
      color: 'white',
    },
  };

  if (loading) return <p>Loading food requests...</p>;

  return (
    <div style={styles.container}>
      <h2>Food Requests</h2>
      {message && <p>{message}</p>}
      {requests.map((request) => (
        <div key={request.id} style={styles.card}>
          <p><strong>{request.itemType}</strong></p>
          <p>Quantity: {request.quantity}</p>
          <p>Status: {request.status}</p>
          <p>Pickup Date: {request.pickupDate}</p>
          {request.status === 'Pending' && (
            <div>
              <button
                style={{ ...styles.button, ...styles.approveButton }}
                onClick={handleStatusUpdate(request.id, 'Approved')}
              >
                Approve
              </button>
              <button
                style={{ ...styles.button, ...styles.rejectButton }}
                onClick={handleStatusUpdate(request.id, 'Rejected')}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FoodRequests;
