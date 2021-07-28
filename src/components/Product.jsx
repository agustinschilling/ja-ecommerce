import React from 'react'

const Product = (props) => {
    return (
        <div className="card mt-4 ms-4" style={{width: 300 }}>
            <img src={props.img} class="card-img-top" alt="...">
            </img>
            <div class="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-success">Add to cart</a>
            </div>
        </div>
    )
}

export default Product
