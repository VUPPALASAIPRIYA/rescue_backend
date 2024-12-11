// src/pages/ViewImpact.js
import React from 'react';

const ViewImpact = () => {
  const impactData = [
    { date: '2024-10-25', itemsDonated: '10 kg Vegetables', peopleHelped: 25, environmentalBenefit: 'Reduced waste by 5 kg CO₂' },
    { date: '2024-10-18', itemsDonated: '15 kg Rice', peopleHelped: 40, environmentalBenefit: 'Saved 10 liters of water' },
    { date: '2024-10-10', itemsDonated: '8 kg Fruits', peopleHelped: 20, environmentalBenefit: 'Reduced waste by 4 kg CO₂' },
  ];

  const styles = {
    container: { padding: '20px', maxWidth: '800px', margin: '0 auto' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '20px' },
    th: { backgroundColor: '#2d6a4f', color: 'white', padding: '10px', textAlign: 'left' },
    td: { padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' },
    title: { fontSize: '24px', fontWeight: '600', color: '#2d6a4f', marginBottom: '15px' },
    description: { fontSize: '16px', color: '#555', marginBottom: '10px' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>View Impact</h1>
      <p style={styles.description}>
        This page shows the impact report of your donations, including the number of people helped and environmental benefits.
      </p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Items Donated</th>
            <th style={styles.th}>People Helped</th>
            <th style={styles.th}>Environmental Benefit</th>
          </tr>
        </thead>
        <tbody>
          {impactData.map((item, index) => (
            <tr key={index}>
              <td style={styles.td}>{item.date}</td>
              <td style={styles.td}>{item.itemsDonated}</td>
              <td style={styles.td}>{item.peopleHelped}</td>
              <td style={styles.td}>{item.environmentalBenefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewImpact;
