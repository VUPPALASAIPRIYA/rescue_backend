import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css'; // Ensure this file exists and has styles for the dashboard

const Admin = () => {
  const [activeSection, setActiveSection] = useState('Overview');
  const [user, setUser] = useState(null); // Store user details
  const [loading, setLoading] = useState(true); // Manage loading state

  // Mock data for Analytics text summaries
  const donationSummary = "Monthly Food Donations Summary: January - 65, February - 59, March - 80, April - 81, May - 56, June - 55";
  const recipientSummary = "Recipient Distribution: Local Charities - 30%, Food Banks - 20%, NGOs - 25%, Community Centers - 25%";

  // Fetch user details from the server
  const fetchUserDetails = async () => {
    try {
      const email = localStorage.getItem('userEmail'); // Assuming you stored the email in localStorage
      const response = await axios.get(`/api/users/${email}`);
      setUser(response.data); // Set user details from response
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchUserDetails(); // Fetch user details on component mount
  }, []);

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul className="sidebar-menu">
          <li onClick={() => setActiveSection('Overview')}>Overview</li>
          <li onClick={() => setActiveSection('Manage Users')}>Manage Users</li>
          <li onClick={() => setActiveSection('Analytics')}>Analytics</li>
          <li onClick={() => setActiveSection('Profile')}>Profile</li>
        </ul>
      </aside>
      <main className="main-content">
        {activeSection === 'Overview' && (
          <section className="overview-section">
            <h2 className="section-title">Overview</h2>
            <div className="overview-grid">
              <div className="overview-item">
                <h3>Food Donations</h3>
                <p>Total: 123</p>
                <button className="button">View Details</button>
              </div>
              <div className="overview-item">
                <h3>Recipient Organizations</h3>
                <p>Total: 45</p>
                <button className="button">Manage Recipients</button>
              </div>
              <div className="overview-item">
                <h3>Data Analytics</h3>
                <p>Reports: 12</p>
                <button className="button">View Analytics</button>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'Manage Users' && (
          <section className="manage-users-section">
            <h2 className="section-title">Manage Users</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admins</td>
                  <td>Active: 3</td>
                  <td><button className="button">Manage</button></td>
                </tr>
                <tr>
                  <td>Food Donors</td>
                  <td>Registered: 78</td>
                  <td><button className="button">View</button></td>
                </tr>
                <tr>
                  <td>Recipient Organizations</td>
                  <td>Active: 30</td>
                  <td><button className="button">Manage</button></td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
        {activeSection === 'Analytics' && (
          <section className="analytics-section">
            <h2 className="section-title">Analytics</h2>
            <div className="text-summary">
              <h3>Monthly Food Donations</h3>
              <p>{donationSummary}</p>
            </div>
            <div className="text-summary">
              <h3>Recipient Distribution</h3>
              <p>{recipientSummary}</p>
            </div>
          </section>
        )}
        {activeSection === 'Profile' && (
          <section className="profile-section">
            <h2 className="section-title">Admin Profile</h2>
            {loading ? (
              <p>Loading...</p> // Show loading state
            ) : (
              <div className="profile-info">
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Role:</strong> {user?.role}</p>
                <button className="button">Edit Profile</button>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default Admin;
