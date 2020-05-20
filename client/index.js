import React from 'react';
import ReactDOM from 'react-dom';
const app = document.querySelector('#app');

const Home = () => {
  return (
    <div>
      <h1>welcome to Mount Readmoore 🏔</h1>
      <h2>where you reach the summit of becoming an avid reader</h2>
    </div>
  );
};

ReactDOM.render(<Home />, app);
