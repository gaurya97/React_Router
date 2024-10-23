import "../styles.css";
const Card = ({id,name,cuisines,avgRatingString,areaName,cloudinaryImageId}) => {

    return (

   
        <section className="section-meals">
  <div className="container grid grid--3-cols margin-right-md">
    <div className="meal">
      <img
  
           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
           className="meal-img"
           alt="Japanese Gyozas"
           />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vegetarian">{areaName}</span>
        </div>
        <p className="meal-title">{name}</p>
        <ul className="meal-attributes">
        <li className="meal-attribute">
            <ion-icon className="meal-icon" name="flame-outline"></ion-icon
              ><span>{cuisines}</span>
          </li> 
          {/* <li className="meal-attribute">
            <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon
              ><span>NutriScore &reg; <strong>74</strong></span>
          </li> */}
          <li className="meal-attribute">
            <ion-icon className="meal-icon" name="star-outline"></ion-icon
              ><span>{avgRatingString}</span>
          </li> 
        </ul>
      </div>
    </div>
  </div>
</section>

      
    )
  }
  export default Card;
  




