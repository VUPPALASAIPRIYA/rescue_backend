// src/pages/VolunteerOpportunities.js
import React from 'react';

const VolunteerOpportunities = () => {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f9',
      minHeight: '100vh',
    },
    header: {
      color: '#2d6a4f',
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
    },
    description: {
      color: '#555',
      fontSize: '18px',
      textAlign: 'center',
      marginBottom: '40px',
    },
    searchBox: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px',
    },
    input: {
      width: '60%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      outline: 'none',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    cardDescription: {
      color: '#555',
      fontSize: '16px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#2d6a4f',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#225c3d',
    },
  };

  const volunteerOpportunities = [
    { id: 1, title: 'Food Bank Assistant', description: 'Help sort and distribute food donations at the local food bank.' },
    { id: 2, title: 'Meal Delivery Driver', description: 'Deliver meals to those in need within your community.' },
    { id: 3, title: 'Community Garden Volunteer', description: 'Assist in growing and harvesting food for donation.' },
    { id: 4, title: 'Fundraising Organizer', description: 'Organize fundraising events to support food distribution efforts.' },
    { id: 5, title: 'Educational Workshop Leader', description: 'Teach others about food waste reduction and sustainability.' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Volunteer Opportunities</h2>
      <p style={styles.description}>Discover opportunities to volunteer within your community and help distribute donated food to those in need.</p>
      
      <div style={styles.searchBox}>
        <input type="text" style={styles.input} placeholder="Search opportunities..." />
      </div>

      <div style={styles.cardContainer}>
        {volunteerOpportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            style={styles.card}
          >
            <h3 style={styles.cardTitle}>{opportunity.title}</h3>
            <p style={styles.cardDescription}>{opportunity.description}</p>
            <button
              style={styles.button}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
