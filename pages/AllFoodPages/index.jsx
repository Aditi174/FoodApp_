import React from "react";
import styles from "./index.module.css"
import Navbar from "../../Components/Navbar";
import {FoodContent} from "../../Components/FoodContentItems";


function AllFoodpage({ foodItems, BASE_URL }) {
  return (
    <div className={styles.mainBox}>
      <Navbar />
      <FoodContent foodItems={foodItems} BASE_URL={BASE_URL}  />
    </div>
  );
}
export default AllFoodpage;
