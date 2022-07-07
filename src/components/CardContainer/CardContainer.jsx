import "./CardContainer.css";
import products from "../../library.js";
import Card from "../Card/Card";


const CardContainer = () => {
  return (
    <div className="cardContainer">
      <h2>Products</h2>
      <div className="container">

        {/* we destructure what we need here */}
        {products.map(({ title, id, price, stars }) => (
          <Card key={id} title={title} price={price} stars={stars} id={id}/>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
