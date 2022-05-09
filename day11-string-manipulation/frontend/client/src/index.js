import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createRoot} from "react-dom/client";
const root = createRoot(document.getElementById('content'));
root.render(<App />);
