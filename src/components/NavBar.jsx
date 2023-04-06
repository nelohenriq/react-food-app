import React from "react";

// icons
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="max-w-[1640px] mx-auto justify-between flex items-center p-4">
      {/* left side */}
      <div>
        <div>
          <AiOutlineMenu size={30} />
        </div>
        <h1>
          Best <span>Eats</span>
        </h1>
        <div>
          <p>Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
