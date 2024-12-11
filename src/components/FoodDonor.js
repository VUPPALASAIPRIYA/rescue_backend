// src/pages/FoodDonor.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const FoodDonor = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#f9f9fb',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '220px',
      backgroundColor: '#2d6a4f',
      padding: '20px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'sticky',
      top: '0',
    },
    sidebarItem: {
      marginBottom: '15px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      padding: '8px 0',
      cursor: 'pointer',
    },
    mainContent: {
      flex: '1',
      padding: '30px',
    },
    header: {
      backgroundColor: '#ffffff',
      padding: '15px 20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      textAlign: 'center',
      fontSize: '28px',
      fontWeight: '600',
      color: '#2d6a4f',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '20px 0',
      color: '#333',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#2d6a4f',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <Link to="/FoodDonor" style={styles.sidebarItem}>Impact Summary</Link>
        <Link to="/DonationInsights" style={styles.sidebarItem}>Donation Insights</Link>
        <Link to="/VolunteerOpportunities" style={styles.sidebarItem}>Volunteer Opportunities</Link>
        <Link to="/FoodWasteTips" style={styles.sidebarItem}>Food Waste Tips</Link>
        <Link to="/AccountSettings" style={styles.sidebarItem}>Account Settings</Link>
      </div>
      <div style={styles.mainContent}>
        <div style={styles.header}>
          Food Donor Dashboard
        </div>
        <div style={styles.sectionTitle}>Your Contributions</div>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Total Donations</h3>
            <p>25 Donations</p>
            <button style={styles.button} onClick={() => navigate('/view-donations')}>View Donations</button>
          </div>
          <div style={styles.card}>
            <h3>Upcoming Donations</h3>
            <p>5 kg of vegetables</p>
            <button style={styles.button} onClick={() => navigate('/manage-donation')}>Manage Donation</button>
          </div>
          <div style={styles.card}>
            <h3>Impact Report</h3>
            <p>People Helped: 100</p>
            <button style={styles.button} onClick={() => navigate('/view-impact')}>View Impact</button>
          </div>
          <div style={styles.card}>
            <h3>Donation History</h3>
            <p>Check your past contributions</p>
            <button style={styles.button} onClick={() => navigate('/donation-history')}>View History</button>
          </div>
          <div style={styles.card}>
            <h3>Nearby Events</h3>
            <p>Participate in donation drives</p>
            <button style={styles.button} onClick={() => navigate('/nearby-events')}>Explore Events</button>
          </div>
          <div style={styles.card}>
            <h3>Food Safety Guidelines</h3>
            <p>Learn how to safely donate food</p>
            <button style={styles.button} onClick={() => navigate('/food-safety')}>View Guidelines</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDonor;
