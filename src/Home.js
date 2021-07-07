import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Apple I-Phone"
            price={100.0}
            image="http://pngimg.com/uploads/iphone_11/small/iphone_11_PNG38.png"
            rating={5}
          />
          <Product
            id="49538094"
            title="Series 6"
            price={150.0}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAU2_VW_PF+watch-40-alum-blue-cell-6s_VW_PF_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1599014444000,1601920123000"
          />
          <Product
            id="4903850"
            title="AirPods"
            price={450.0}
            rating={5}
            image="https://www.apple.com/v/airpods-max/c/images/overview/hero__gnfk5g59t0qe_medium.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="AirPods"
            price={670.0}
            rating={5}
            image="https://www.apple.com/v/airpods-max/c/images/overview/hero__gnfk5g59t0qe_medium.png"
          />
          <Product
            id="23445930"
            title="AirPods bt"
            price={90.0}
            rating={5}
            image="https://www.freepnglogos.com/uploads/airpods-png/airpods-pro-airpods-what-the-difference-and-10.png"
          />
          <Product
            id="3254354345"
            title="Ipad"
            price={440.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="PS5"
            price={450.0}
            rating={5}
            image="https://atlas-content-cdn.pixelsquid.com/stock-images/sony-ps5-digital-edition-game-console-MxByNvC-600.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
