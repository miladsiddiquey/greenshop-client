import React from 'react';
import CactusImg from '../../images/cactus (2).png';

const CactusSection = () => {
    return (
        <div className="container">
            <div className="row align-items-center d-flex justify-content-center bg-pearl-light p-4 mt-8">
                <div className="col-md-7 ps-5">
                    <h2>Cactus tree</h2>
                    <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam molestiae sunt cumque, et iusto magni eaque corrupti fugiat corporis aut recusandae iste quam magnam rerum eligendi saepe aperiam rem quaerat dolore? Quibusdam harum in quod, vero quo nobis veniam iste.</p>
                    <h6 className="mt-4">CATEGORY: <span className="text-muted mt-3">Table tree</span></h6>
                    <h6>WEIGHT: <span className="text-muted mt-3">4.6kg/set</span></h6>
                </div>
                <div className="col-md-5">
                    <img src={CactusImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default CactusSection;