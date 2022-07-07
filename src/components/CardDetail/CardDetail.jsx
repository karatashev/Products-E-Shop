import "./CardDetail.css";
import { useParams } from "react-router-dom";
import products from "../../library.js";
import Banner from "../Banner/Banner";

const CardDetail = () => {
  const params = useParams();
  const singleProduct = products.find(
    (product) => product.id === parseInt(params.ProductId)
  );
  return (
    <>
    <Banner title={singleProduct.title}/>
      <div className="CardDetail">
        <div className="container">
          <div>
            <img src={`/img/${singleProduct.id}.jpg`} alt="" />
          </div>
          <div className="info-cont">
            <h2 className="price">{singleProduct.price}</h2>
            <h2 className="title">{singleProduct.title}</h2>

            {Array.from(Array(singleProduct.stars).keys()).map((item) => (
              <i className="fa fa-star" style={{ color: "#f95e6d" }}></i>
            ))}

            <p>{singleProduct.desc}</p>
            <button className="button">Add to card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
