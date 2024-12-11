import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataAnalyst = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      backgroundColor: '#3f51b5',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
      fontSize: '24px',
      width: '100%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '20px 0',
      textAlign: 'center',
      color: '#3f51b5',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
    },
    card: {
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#3f51b5',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s',
    },
    dashboardStats: {
      fontSize: '16px',
      color: '#333',
      marginBottom: '10px',
    },
  };

  const [reports, setReports] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const reportResponse = await axios.get('http://localhost:2003/api/insights/reports');
        const taskResponse = await axios.get('http://localhost:2003/api/insights/tasks');

        setReports(reportResponse.data);
        setTasks(taskResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handlers for button actions
  const handleViewReports = () => {
    alert('Redirecting to detailed reports page...');
    // Example navigation to reports page
    window.location.href = '/Reports';
  };

  const handleApproveNow = async () => {
    try {
      await axios.post('http://localhost:2003/api/approvals/process');
      alert('Pending approvals processed successfully!');
    } catch (error) {
      console.error('Error processing approvals:', error);
      alert('Failed to process approvals. Please try again.');
    }
  };

  const handleReviewTasks = async () => {
    alert('Fetching pending donations for review...');
    // Example fetch or navigation for review tasks
    window.location.href = '/pending-donations';
  };

  const handleStartAnalysis = () => {
    alert('Starting donor trend analysis...');
    // Example: Navigate to analysis page
    window.location.href = '/analysis';
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>Data Analyst Dashboard</div>
      <div style={styles.sectionTitle}>Analytics Overview</div>
      <div style={styles.cardContainer}>
        {reports.map((report, index) => (
          <div key={index} style={styles.card}>
            <h3>{report.title}</h3>
            <p style={styles.dashboardStats}>Total: {report.total}</p>
            <button
              style={styles.button}
              onClick={() =>
                report.title === 'Total Donations'
                  ? handleViewReports()
                  : handleApproveNow()
              }
            >
              {report.action}
            </button>
          </div>
        ))}
      </div>
      <div style={styles.sectionTitle}>Tasks</div>
      <div style={styles.cardContainer}>
        {tasks.map((task, index) => (
          <div key={index} style={styles.card}>
            <h3>{task.title}</h3>
            <p style={styles.dashboardStats}>
              {task.pending !== undefined
                ? `Pending Tasks: ${task.pending}`
                : `Models Created: ${task.created}`}
            </p>
            <button
              style={styles.button}
              onClick={() =>
                task.title === 'Review Pending Donations'
                  ? handleReviewTasks()
                  : handleStartAnalysis()
              }
            >
              {task.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataAnalyst;
