// src/pages/FoodWasteTips.js
import React, { useState } from 'react';
import { FaAppleAlt, FaLeaf, FaRecycle, FaSnowflake, FaInfoCircle } from 'react-icons/fa';

const FoodWasteTips = () => {
  const [expandedTip, setExpandedTip] = useState(null);

  const tips = [
    { icon: <FaAppleAlt />, title: "Plan Your Meals", content: "Reduce waste by planning meals ahead, which helps avoid overbuying." },
    { icon: <FaLeaf />, title: "Store Food Properly", content: "Keep fruits and veggies fresh longer by storing them in separate sections based on temperature needs." },
    { icon: <FaRecycle />, title: "Use Leftovers Creatively", content: "Reinvent leftovers into new meals like soups, salads, or casseroles to avoid discarding them." },
    { icon: <FaSnowflake />, title: "Freeze Excess", content: "Freeze excess food to extend its shelf life, especially for perishable items like meats and veggies." },
    { icon: <FaInfoCircle />, title: "Understand Expiration Labels", content: "Best-by dates don’t always mean discard by, so check food before throwing it away." },
  ];

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(120deg, #f3f7f6, #e0f7fa)',
      padding: '20px',
      minHeight: '100vh',
      color: '#333',
    },
    banner: {
      backgroundColor: '#2d6a4f',
      color: '#fff',
      padding: '40px 20px',
      textAlign: 'center',
      borderRadius: '8px',
      marginBottom: '30px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      margin: 0,
    },
    description: {
      fontSize: '18px',
      marginTop: '10px',
      lineHeight: '1.4',
    },
    tipsSection: {
      marginTop: '30px',
      maxWidth: '600px',
      margin: 'auto',
    },
    tipHeader: {
      fontSize: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      padding: '15px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '10px',
      transition: 'transform 0.3s, background-color 0.3s',
    },
    icon: {
      marginRight: '10px',
      fontSize: '24px',
      color: '#2d6a4f',
    },
    tipContent: {
      padding: '15px 20px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '0 0 8px 8px',
      fontSize: '16px',
      color: '#333',
      lineHeight: '1.6',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      animation: 'fade-in 0.3s ease-in-out',
    },
  };

  const toggleTip = (index) => {
    setExpandedTip(expandedTip === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <h2 style={styles.title}>Food Waste Tips</h2>
        <p style={styles.description}>
          Discover practical ways to reduce food waste, store food efficiently, and make the most of leftovers.
        </p>
      </div>

      <div style={styles.tipsSection}>
        {tips.map((tip, index) => (
          <div key={index}>
            <div
              style={{
                ...styles.tipHeader,
                backgroundColor: expandedTip === index ? '#e3f2fd' : '#f9f9f9',
                transform: expandedTip === index ? 'scale(1.02)' : 'scale(1)',
              }}
              onClick={() => toggleTip(index)}
            >
              <div style={styles.icon}>{tip.icon}</div>
              {tip.title}
            </div>
            {expandedTip === index && <div style={styles.tipContent}>{tip.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodWasteTips;
