import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router,Routes, Route, Link,useNavigate } from 'react-router-dom';
import { AuthProvider } from "./AuthProvider";

ReactDOM.render(
  <AuthProvider>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </AuthProvider>,
  document.getElementById('root')
);
