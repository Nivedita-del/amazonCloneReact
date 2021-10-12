import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71tQ1cT3UqL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Up to 40% off | Mobiles & accessories"
            price={11.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Pranjal/MSO/update/DesktopGateway_CategoryCard_379X304._SY304_CB639966368_.jpg"
          />
          <Product
            id="12321342"
            title="Up to 70% off | Electronics & accessories"
            price={11.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Jupiter/GW/P1/D28587006_IN_CEPC_Electronics_GW_graphics_Jupiter_P1_rush_758X6081x_1._SY304_CB639926897_.jpg"
          />
          <Product
            id="12321343"
            title="Festive latest launches | Redmi TV 40% off"
            price={11.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/V5/DesktopGateway_CategoryCard_758X608_1X_NEW._SY304_CB641603938_.jpg"
          />
          <Product
            id="12321344"
            title="Prime exclusive offers | Upto 80% off"
            price={11.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter21/GW/PC_CC_new_379X304._SY304_CB639914216_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="12321345"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="23445830"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354845"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829132"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;