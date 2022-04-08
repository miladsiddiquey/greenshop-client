import React from 'react';
import FeaturedImg from '../../images/fp.PNG';

const FeaturedProduct = () => {
    return (
        <div className="container">
            <div className="row mt-5 align-items-center">
                <div className="text-center mt-5 mb-3">
                    <h1>Featured product</h1>
                    <p className="fst-italic color-fruit">The best products from Spring</p>
                </div>
                <div className="col-md-6 pe-4 mt-3">
                    <img src={FeaturedImg} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 ps-4 mt-3">
                    <h2>Tree in the bottle</h2>
                    <p className="fs-13 text-muted mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam molestiae sunt cumque, et iusto magni eaque corrupti fugiat corporis aut recusandae iste quam magnam rerum eligendi saepe aperiam rem quaerat dolore? Quibusdam harum in quod, vero quo nobis veniam iste.</p>
                    <h6>CATEGORY: <span className="text-muted mt-3">Table tree</span></h6>
                    <h6>WEIGHT: <span className="text-muted mt-3">4.6kg/set</span></h6>
                    <button className="btn btn-fruit mt-3">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;