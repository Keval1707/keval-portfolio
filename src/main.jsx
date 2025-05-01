import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style.css';


// Import Font Awesome for icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add all icons to the library
library.add(fas, fab, far);

// Import Devicon for technology icons
import 'devicon';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);