import React from 'react';
import { useState, useReducer } from 'react';
import './App.css';
import Header from "./Components/Layout/Header";
import MealSummary from './Components/Meals/MealSummary';
import AvailableMeals from './Components/Meals/AvailableMeals'; 
import Modal from './Components/UI/Modal';
import ReactDOM from 'react-dom'
import AppContext from './Context/app-context';

const mealData = [
  {
    id: 'm0',
    name: 'Hothog',
    description: 'Finest dirty water hotdog',
    price: 5.99,
    amount: 0
  }
]

const mealReducer = (meals, action) => {
      switch(action.type) {
        case "addMeal" : {
          return [
            ...meals, 
            action.newItem
          ]
        }
      }
}

function App() {

  const [showModal, updateShowModal] =  useState(false);
  const [productCounter, updateProductCounter] = useState(0);
  const [meals, dispatch] = useReducer(mealReducer, mealData);

  const handleMealAdd = (meal) => {
    dispatch({
      type: 'addMeal', 
      newItem: meal
    })
  }

  return (
    <>  
      <AppContext.Provider value={{
        updateShowModal: updateShowModal,
        updateProductCounter: updateProductCounter,
        productCounter: productCounter,
        currentMealList: meals,
        handleMealAdd: handleMealAdd
      }}>
        {showModal ? ReactDOM.createPortal(<Modal mealsInCart={meals}/>, document.getElementById("modal-root")) : ''}
        <Header/>
        {meals.name}{meals.amount}
        <MealSummary/>
        <AvailableMeals/>
      </AppContext.Provider>
    </>
  );
}

export default App;
