// src/pages/ViewDonations.js
import React from 'react';

const ViewDonations = () => {
  const donations = [
    { date: '2024-10-28', items: 'Canned Beans', quantity: '10 cans' },
    { date: '2024-10-15', items: 'Rice', quantity: '20 kg' },
    { date: '2024-10-01', items: 'Vegetables', quantity: '5 kg' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Donation History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Items</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donation.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donation.items}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{donation.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDonations;
