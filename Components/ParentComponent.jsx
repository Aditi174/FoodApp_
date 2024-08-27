import { useEffect, useState } from "react";
import AllFoodpage from "../pages/AllFoodPages";
// import {FoodContent} from "./FoodContentItems";

export const BASE_URL = "http://localhost:9000";

export default function ParentsComponent() {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function onfoodfetch() {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      console.log(data);
      setFoodItems(data);
      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    onfoodfetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AllFoodpage foodItems={foodItems} BASE_URL={BASE_URL} />
    </>
  );
}
