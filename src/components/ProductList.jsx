import React from 'react'
import Product from './Product'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'

export default function ProductList() {
    return (
        <div className="d-flex flex-wrap">
            <Product name="Product 1" desc="Description1" img={product1}></Product>
            <Product name="Product 2" desc="Description2" img={product2}></Product>
            <Product name="Product 3" desc="Description3" img={product3}></Product>
            <Product name="Product 4" desc="Description4" img={product1}></Product>
            <Product name="Product 5" desc="Description5" img={product2}></Product>
            <Product name="Product 6" desc="Description6" img={product3}></Product>
            <Product name="Product 7" desc="Description7" img={product1}></Product>
            <Product name="Product 8" desc="Description8" img={product2}></Product>
        </div>
    )
}
