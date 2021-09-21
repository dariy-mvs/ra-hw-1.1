import React from 'react';
import './css/main.css';
import PropTypes from 'prop-types';
import ItemClass from './ItemClass';

export default function ShopItemFunc(props) {
  const itemInfo = props.item;
  const {brand, title, description, descriptionFull, price, currency } = itemInfo;
  console.log(itemInfo);
  return (
    <div>
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="description">{descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{currency}, {price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </div>
  )
}

ShopItemFunc.propTypes={
  item:PropTypes.instanceOf(ItemClass).isRequired
}