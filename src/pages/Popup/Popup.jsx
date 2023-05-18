import React from 'react';
import logo from '../../assets/img/logo.svg';
import CaptureButton from '../../components/CaptureButton';

import './Popup.css';
import CapturedList from '../../components/CapturedList';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CaptureButton /> 
        <CapturedList />
      </header>
    </div>
  );
};

export default Popup;