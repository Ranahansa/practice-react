import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Button from './components/Button';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Button />
      <Bottom />
    </div>
  );
}

export default App;
