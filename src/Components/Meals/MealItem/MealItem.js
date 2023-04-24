import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";

function MealItem(props) {

  const currMealObj = {
    name: props.mealName,
    id: props.mealID,
    price: props.mealPrice
  }

  return (
    <li className={classes.meal} id={props.mealID}>
        <div>
             <h3>{props.mealName}</h3>
             <div className={classes.description}>{props.mealDescription}</div>
             <div className={classes.price}>${props.mealPrice}</div>
        </div>
        <MealItemForm mealObj={currMealObj} />
    </li>
  )
  }

export default MealItem;
