// src/pages/DonationInsights.js
import React from 'react';

const DonationInsights = () => {
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <h2 style={styles.title}>Donation Insights</h2>
        <p style={styles.description}>
          Analyze trends in your donation history, such as most frequently donated items, seasonal trends, and insights on donation impact.
        </p>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Navigation</h3>
          <ul style={styles.sidebarList}>
            <li style={styles.sidebarItem}>Overview</li>
            <li style={styles.sidebarItem}>My Donations</li>
            <li style={styles.sidebarItem}>Impact Reports</li>
            <li style={styles.sidebarItem}>Settings</li>
          </ul>
        </div>

        <div style={styles.mainContent}>
          <h3 style={styles.insightsTitle}>Insights Overview</h3>
          <p style={styles.insightText}>
            Here, you can explore various insights based on your donation history, including:
          </p>
          <ul style={styles.insightList}>
            <li style={styles.insightItem}>Most Frequently Donated Items</li>
            <li style={styles.insightItem}>Seasonal Trends</li>
            <li style={styles.insightItem}>Donation Impact Summary</li>
          </ul>
          <p style={styles.insightText}>
            Click on the items above to view detailed reports and visualizations.
          </p>
        </div>
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f7f6',
    padding: '20px',
    minHeight: '100vh',
  },
  banner: {
    backgroundColor: '#2d6a4f',
    color: '#fff',
    padding: '30px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: 0,
  },
  description: {
    fontSize: '18px',
    marginTop: '10px',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    marginRight: '20px',
  },
  sidebarTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: 0,
  },
  sidebarItem: {
    padding: '5px 0',
    cursor: 'pointer',
    color: '#2d6a4f',
    transition: 'color 0.2s',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  insightsTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  insightText: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#333',
  },
  insightList: {
    listStyleType: 'circle',
    paddingLeft: '20px',
  },
  insightItem: {
    marginBottom: '5px',
    color: '#2d6a4f',
  },
};

export default DonationInsights;
