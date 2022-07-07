import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, price, stars, id }) => {
  return (
    <Link className="Card" to={`/products/${id}`}>
        <div>
        <img src={`/img/${id}.jpg`} alt="" />
        <h3>{title}</h3>
        <p className="price">{price}</p>

        {Array.from(Array(stars).keys()).map((item) => (
          <i className="fa fa-star" style={{ color: "#f95e6d" }}></i>
        ))}

        {/* another way for stars
        {new Array(product.stars - 1).fill(null).map(() => (
          <i class="fa fa-star" />
        ))} */}
    </div>
    </Link>

  );
};

export default Card;
