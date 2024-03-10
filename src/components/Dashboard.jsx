import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the ERP Dashboard!</p>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/products">Products Management</Link></li>
          <li><Link to="/orders">Orders Management</Link></li>
          <li><Link to="/calendar">Orders Calendar View</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;


