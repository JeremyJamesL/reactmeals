import React from 'react';
import { useState, useReducer } from 'react';
import './App.css';
import Header from "./Components/Layout/Header";
import MealSummary from './Components/Meals/MealSummary';
import AvailableMeals from './Components/Meals/AvailableMeals'; 
import Modal from './Components/UI/Modal';
import ReactDOM from 'react-dom'
import AppContext from './Context/app-context';

const mealData = []

const mealReducer = (meals, action) => {
      switch(action.type) {
        
        case "addMeal" : {
          return [
            ...meals, 
            action.newItem
          ]
        }

        case "incrementMeal": {
          return meals.map((meal) => meal.id === action.mealID ? {...meal, amount: meal.amount + 1} : meal)
        }

        case "decrementMeal": {
          return meals.map((meal) => meal.id === action.mealID ? {...meal, amount: meal.amount - 1} : meal)
        }
      }
}

function App() {

  const [showModal, updateShowModal] =  useState(false);
  const [meals, dispatch] = useReducer(mealReducer, mealData);
  const [pulseBtn, updatePulseBtn] = useState(false);

  const handleMealAdd = (meal) => {
    dispatch({
      type: 'addMeal', 
      newItem: meal
    })
  }

  const handleMealInc = (mealID) => {
    dispatch({
      type: "incrementMeal",
      mealID: mealID
    })
  }

    const handleMealDec = (mealID) => {
      dispatch({
        type: "decrementMeal",
        mealID: mealID
      })
    }

  return (
    <>  
      <AppContext.Provider value={{
        updateShowModal: updateShowModal,
        currentMealList: meals,
        handleMealAdd: handleMealAdd,
        handleMealInc: handleMealInc,
        handleMealDec: handleMealDec
      }}>
        {showModal ? ReactDOM.createPortal(<Modal mealsInCart={meals}/>, document.getElementById("modal-root")) : ''}
        <Header pulseBtn={pulseBtn}/>
        <MealSummary/>
        <AvailableMeals updatePulseBtn={updatePulseBtn}/>
      </AppContext.Provider>
    </>
  );
}

export default App;
