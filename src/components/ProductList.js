import React from 'react';
import LikeButton from "./LikeButton";

const ProductList = (props) => {
    return (
        <ul>
            {itemList(props.items)}
        </ul>
    );
};

const itemList = (items) => {
    return items.map((item, index) => {
        return (
            <li key={index}>
                <p>{item.name}</p>
                <LikeButton url={item.url}
                            label="상품상세" />
            </li>
        )
    })
}

export default ProductList;