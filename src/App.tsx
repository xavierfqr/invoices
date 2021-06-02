import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import './app.css';

const App = () => {
  return (
    <div className="container">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
