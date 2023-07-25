import React from "react";
import {ShoppingCartOutlined, SearchRounded, FavoriteBorderSharp} from '@mui/icons-material'

const Product = ({item}) => {
  return (
<div className="product">
    <img src={item.img} />
    <div className="info">
        <div>
            <ShoppingCartOutlined />
        </div>
        <div>
            <SearchRounded />
        </div>
        <div>
            <FavoriteBorderSharp />
        </div>

    </div>
  </div>
  )
};

export default Product;
