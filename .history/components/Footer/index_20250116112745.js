import React from 'react';
import './App.css'; // Make sure your styles are properly imported
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="main-content">
      <Banner />
      {/* other components */}
      <Footer />
    </div>
  );
}

export default App;
