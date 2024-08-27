import logoimg from "../public/backgroundImg.jpg";
import "./FoodContent.css";

function FoodContent({ foodItems, BASE_URL }) {
    console.log("Received props:", { foodItems, BASE_URL });
  return (
    <>
      <div className="cartitem">
        <div className="mask">
          <img src={logoimg} alt="Logo" className="img" />
        </div>
        <div className="AllFoodItems">
          {foodItems?.map((item, index) => (
            <div key={index} className="items">
              <img src={BASE_URL + item.image} className="foodimage" />
              <div className="column">
                <h3>{item.name}</h3>
                <p className="itemtext">{item.text}</p>
                <p className="price">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodContent;
