import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:2003/api/reports');
        setReports(response.data);
      } catch (err) {
        console.error('Error fetching reports:', err);
        setError('Failed to load reports.');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <p>Loading reports...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Donation Reports</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <strong>{report.date}:</strong> {report.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;
