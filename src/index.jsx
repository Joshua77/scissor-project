import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'

// const rootElement = document.getElementById('root');
const root = createRoot(document.getElementById('root'));
console.log(root);
root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import AuthContextProvider from "./contexts/Authcontext";
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';

// const rootElement = document.getElementById('root');

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <Router>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>  
//     </Router>
//   </React.StrictMode>,
// );
