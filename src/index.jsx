import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App/App'
import './index.scss'
import './styles/typography.scss'
import './styles/variables.scss'

// This is for React 18, which introduces a new root API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
