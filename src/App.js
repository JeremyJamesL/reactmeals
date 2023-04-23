import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from "./UI/Header";
import MealSummary from './Components/MealSummary';
import AvailableMeals from './Components/AvailableMeals'; 
import Modal from './UI/Modal';
import ReactDOM from 'react-dom'
import AppContext from './Context/app-context';


function App() {

  const [showModal, updateShowModal] =  useState(false);
  const [productCounter, updateProductCounter] = useState(0);

  return (
    <>  
      <AppContext.Provider value={{
        updateShowModal: updateShowModal,
        updateProductCounter: updateProductCounter,
        productCounter: productCounter
      }}>
        {showModal ? ReactDOM.createPortal(<Modal/>, document.getElementById("modal-root")) : ''}
        <Header/>
        <MealSummary/>
        <AvailableMeals/>
      </AppContext.Provider>
    </>
  );
}

export default App;
