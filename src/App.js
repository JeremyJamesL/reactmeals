import './App.css';
import Header from "./UI/Header";
import MealSummary from './Components/MealSummary';
import AvailableMeals from './Components/AvailableMeals'; 
import Modal from './UI/Modal';
import ReactDOM from 'react-dom'

function App() {
  return (
    <>  
      {ReactDOM.createPortal(<Modal/>, document.getElementById("modal-root"))}
      <Header/>
      <MealSummary/>
      <AvailableMeals/>
    </>
  );
}

export default App;
