import React from 'react';

const ContactSupport = () => {
  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#00796b',
      textAlign: 'center',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      color: '#4f6367',
      textAlign: 'center',
      marginBottom: '30px',
    },
    supportOptions: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    optionCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      textAlign: 'center',
    },
    optionTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#34495e',
      marginBottom: '10px',
    },
    optionDescription: {
      fontSize: '16px',
      color: '#7f8c8d',
      marginBottom: '15px',
    },
    linkButton: {
      textDecoration: 'none',
      color: '#ffffff',
      backgroundColor: '#00796b',
      padding: '10px 15px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Support</h2>
      <p style={styles.description}>We are here to help! Choose one of the following options to get assistance:</p>
      <div style={styles.supportOptions}>
        <div
          style={styles.optionCard}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3 style={styles.optionTitle}>Live Chat</h3>
          <p style={styles.optionDescription}>Chat with a support agent for immediate assistance.</p>
          <a href="/live-chat" style={styles.linkButton}>Start Chat</a>
        </div>
        <div
          style={styles.optionCard}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3 style={styles.optionTitle}>Email Support</h3>
          <p style={styles.optionDescription}>Send us an email, and we'll get back to you within 24 hours.</p>
          <a href="mailto:support@example.com" style={styles.linkButton}>Send Email</a>
        </div>
        <div
          style={styles.optionCard}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3 style={styles.optionTitle}>Phone Support</h3>
          <p style={styles.optionDescription}>Speak directly with our support team during business hours.</p>
          <a href="tel:+1234567890" style={styles.linkButton}>Call Now</a>
        </div>
        <div
          style={styles.optionCard}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3 style={styles.optionTitle}>FAQs</h3>
          <p style={styles.optionDescription}>Find answers to frequently asked questions in our Help Center.</p>
          <a href="/faqs" style={styles.linkButton}>Visit FAQs</a>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
