import styles from "./MealSummary.module.css"

function MealSummary() {
  return (
    <div className={styles.summary}>
        <h2>
            Delicious Food, Delivered To You
        </h2>
        <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch of dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just in-time and of course by our experienced chefs!</p>
    </div>
  )
  }

export default MealSummary;
