import React from 'react';
import ReactDOM from 'react-dom/client';
import BusinessCard from './BusinessCard';
import './index.css';

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BusinessCard/>
    </React.StrictMode>
);