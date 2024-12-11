import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
const Navbar = ({user}) => {
  return (
    <div>
        <AppBar position="static" style={{ backgroundColor: '#E4B1F0' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* You can add an icon here if desired */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Food Waste Management
        </Typography>
        
        <Button color="inherit" component={Link} to="/">Home</Button>
        
        {!user && (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            <Button color="inherit" component={Link} to="/admin">Admin</Button>
            <Button color="inherit" component={Link} to="/dataanalyst">DataAnalyst</Button>
            <Button color="inherit" component={Link} to="/fooddonor">FoodDonor</Button>
            <Button color="inherit" component={Link} to="/recipientorganization">RecipientOrganization</Button>
          </>
        )}
        
       {user && (
          <>
            {user.role === 'ADMIN' && <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>}
            {user.role === 'FOOD_DONOR' && <Button color="inherit" component={Link} to="/donor">Food Donor Dashboard</Button>}
            {user.role === 'RECIPIENT' && <Button color="inherit" component={Link} to="/recipient">Recipient Dashboard</Button>}
            {user.role === 'DATA_ANALYST' && <Button color="inherit" component={Link} to="/analyst">Data Analyst Dashboard</Button>}
            <Button color="inherit" component={Link} to="/logout">Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar
