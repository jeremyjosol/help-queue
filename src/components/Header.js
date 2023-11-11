import React from "react";
import ticketsImage from "./../img/tickets.jpg";


function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;