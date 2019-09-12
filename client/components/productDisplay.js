import React from 'react';

const ProductDisplay = props => {
  let style;
  if (props.type === props.selectedItem) {
    style = {
      backgroundColor: 'lightBlue'
    }
  } else {
    style = {
      backgroundColor: '#E6E6E6'
    }
  }
  const handleClick = e => {
    props.selectItemClickHandler(e);
  };
  return (
    <div className="products" onClick={handleClick} style={style} id={props.type}>
      <img src={props.image}></img>
      <ul>
        <li className="productList"> {props.type} </li>
        <li className="productList"> {props.description} </li>
        <li className="productList"> {props.price} </li>
        <li className="productListLast"> {props.inStock === true ? 'Available' : 'Out of Stock'} </li>
      </ul>
    </div>
  );
};

export default ProductDisplay;