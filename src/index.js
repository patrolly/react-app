import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* 
    <div className='posts'>
    <LikeCounter color="lightblue" title="Pierwszy post" description="Opis naszego artykułu" count="5" author="autor 1"></LikeCounter>
    <LikeCounter color="lightgreen" title="2. post" description="Opis naszego artykułu" count="16" author="autor 2"></LikeCounter>
    <LikeCounter color="lightblue" title="3. post" description="Opis naszego artykułu" count="3" author="autor 3"></LikeCounter>
    </div>
*/}
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

