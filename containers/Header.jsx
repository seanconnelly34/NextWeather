import React from "react";
import CitySelectMenu from "../components/CitySelectMenu";

const Header = () => {
  return (
    <div className='md:container md:mx-auto rounded-md shadow border p-8 m-10 flex justify-between'>
      <h1>Select City. Find Weather!</h1>
      <CitySelectMenu />
    </div>
  );
};

export default Header;
