import img1 from "../assets/images/perfume1.jpg"
import img2 from "../assets/images/perfume2.jpg"
import img3 from "../assets/images/perfume3.jpg"
import img4 from "../assets/images/perfume4.jpg"
function Product(){
    return (
      <div className="product" id="product">
        <div className="product__one">
          <img src={img1} alt="" />
          <p>Woody Perfume Made in India for Men 100ML</p>
          <p>&#8377; 3,000.00</p>
          <button>ADD TO CART</button>
        </div>
        <div className="product__one">
          <img src={img2} alt="" />
          <p>Floral Perfume Made in Dubai for Women 75ML</p>
          <p>&#8377; 4,000.00</p>
          <button>ADD TO CART</button>
        </div>
        <div className="product__one">
          <img src={img3} alt="" />
          <p> Citrus Perfume Made in Dubai for Unisex 75ML</p>
          <p>&#8377; 9,999.00</p>
          <button>ADD TO CART</button>
        </div>
        <div className="product__one">
          <img src={img4} alt="" />
          <p> Citrus Perfume Made in Dubai for Unisex 75ML</p>
          <p>&#8377; 9,999.00</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    )
  }

  export default Product