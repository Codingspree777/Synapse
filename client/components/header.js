import React from 'react';

const headerStyle = {
  color: "brown"
};

const Header = () => {
  return (
    <div>
      <h1 style={headerStyle} className="header">
        {" "}
        Simple Banking{" "}
      </h1>
    </div>
  );
};

export default Header;
