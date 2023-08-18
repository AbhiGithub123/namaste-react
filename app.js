import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className='res-logo'
        src='https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg'
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard
          resName='Meghana foods'
          cuisine='Biryani, South India , Asian'
        />
        <RestaurantCard
          resName='Balaji foods'
          cuisine='Dosa, North India , Asian'
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
