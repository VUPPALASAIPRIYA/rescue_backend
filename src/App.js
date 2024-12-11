import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Signup from './components/Signup';
import FoodDonor from './components/FoodDonor';
import Navbar from './components/Navbar';
import DataAnalyst from './components/DataAnalyst';
import RecipientOrganization from './components/RecipientOrganization';
import Home from './components/Home';
import ViewDonations from './components/ViewDonations';
import ManageDonation from './components/ManageDonations';
import ViewImpact from './components/ViewImpact';
import ImpactSummary from './components/ImpactSummary';
import DonationInsights from './components/DonationInsights';
import VolunteerOpportunities from './components/VolunteerOpportunities';
import FoodWasteTips from './components/FoodWasteTips';
import AccountSettings from './components/AccountSettings';
import RecepProfile from './components/RecepProfile';
import FoodRequests from './components/FoodRequests';
import DonationHistory from './components/DonationHistory';
import ContactSupport from './components/ContactSupport';
import ReportsPage from './components/ReportsPage'
import PendingDonationsPage from './components/PendingDonations';



function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const ProtectedRoute = ({ element, allowedRole }) => {
    return user && user.role === allowedRole ? element : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      <header className="App-header">Food Rescue</header>
      <div className="App-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<ProtectedRoute element={<Admin />} allowedRole="Admin" />} />
          <Route path="/dataanalyst" element={<ProtectedRoute element={<DataAnalyst />} allowedRole="DataAnalyst" />} />
          <Route path="/fooddonor" element={<ProtectedRoute element={<FoodDonor />} allowedRole="FoodDonor" />} />
          <Route path="/recipientorganization" element={<ProtectedRoute element={<RecipientOrganization />} allowedRole="RecipientOrganization" />} />
          <Route path="/view-donations" element={<ViewDonations />} />
          <Route path="/manage-donation" element={<ManageDonation />} />
          <Route path="/view-impact" element={<ViewImpact />} />
          <Route path="/impact-summary" element={<ImpactSummary />} />
          <Route path="/DonationInsights" element={<DonationInsights />} />
          <Route path="/VolunteerOpportunities" element={<VolunteerOpportunities />} />
          <Route path="/FoodWasteTips" element={<FoodWasteTips />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/FoodRequests" element={<FoodRequests />} />
          <Route path="/DonationHistory" element={<DonationHistory />} />
          <Route path="/recep-profile" element={<RecepProfile />} />
          <Route path="/ContactSupport" element={<ContactSupport />} />
          <Route path="/ReportsPage" element={<ReportsPage />} />
          <Route path="/PendingDonationsPage" element={<PendingDonationsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
