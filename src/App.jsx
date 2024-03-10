// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <nav>
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/orders">Orders</a></li>
              <li><a href="/calendar">Calendar</a></li>
            </ul>
          </nav>
        </header>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
            <Route path="/calendar" element={<OrdersCalendarView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



