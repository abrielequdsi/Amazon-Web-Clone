import React from "react";
import Product from "./Product.js";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="
        https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
        "
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        <Product
          id="12321341"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Ring Fit Adventure - Nintendo Switch"
          price={114.91}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51ZIQxjxTxL._AC_US436_FMwebp_QL65_.jpg"
        />
        <Product
          id="12321341"
          title="Oculus Rift S PC-Powered VR Gaming Headset"
          price={399}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ueGFutGgL._AC_UY218_.jpg"
        />

        <Product
          id="12321341"
          title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
          price={26.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SY344_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="amsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
