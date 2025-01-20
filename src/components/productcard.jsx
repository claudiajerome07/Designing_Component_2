// write product card here

import React from "react";
import ButtonCard from "./button";

function ProductCard() {
    const productImage ='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ-lscUaxB5AXIXng2ePbNmjSW2IuxUleyQsYl7xat_VAv4EYVtoyqish94kiNbPjZ444lbVThOJKWXhNXOr0TFYwYENYhv2KmXTPJ9DBGh'
    const productName='Coat'
    const productPrice='$199'

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-sm text-center">
            <img src={productImage} alt="Product" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <div className="text-gray-700">
                <h2 className="text-lg font-semibold mb-2">{productName}</h2>
                <p className="text-md font-medium text-green-600 mb-4">{productPrice}</p>
                <ButtonCard />
            </div>
        </div>
    );

}
export default ProductCard;
