import styles from "./Header.module.css"
import headerImg from "../../Assets/meals.jpeg"
import HeaderCartButton from "./HeaderCartButton"

function Header() {
  return (
    <>
    <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
    </header>
    <div className={styles["main-image"]}>
        <img src={headerImg} alt="ReactMeals" />
    </div>
    </>
  )
}
export default Header