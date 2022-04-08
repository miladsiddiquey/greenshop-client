import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePlantImg from '../../images/homePlant.jpg';

const HomePlants = () => {
    const homePlants = [
        {
            "title": "auctor sem",
            "price": 124,
            "img": 'https://i.ibb.co/jZWtKSw/as1-removebg-preview.pngg'
        },
        {
            "title": "auctor sem",
            "price": 58,
            "img": 'https://i.ibb.co/TTNYxFV/as2-removebg-preview.png'
        },
        {
            "title": "auctor sem",
            "price": 73,
            "img": 'https://i.ibb.co/frX94X8/as3-removebg-preview.png'
        },
        {
            "title": "auctor sem",
            "price": 187,
            "img": 'https://i.ibb.co/rc8xcyp/as4-removebg-preview.png'
        },
        {
            "title": "auctor sem",
            "price": 145,
            "img": 'https://i.ibb.co/YbY4rzR/as5-removebg-preview.png'
        },
        {
            "title": "auctor sem",
            "price": 48,
            "img": 'https://i.ibb.co/4ZJCLWz/as6-removebg-preview.png '
        }
    ]

    const [plant, setPlant] = useState([])
    useEffect(() => {
        setPlant(homePlants);
    }, [])

    return (
        <div className="container">
            <div className="row mt-5 align-items-center">
                <h1 className="text-center mt-5">Home plants</h1>
                <div className="col-md-6 mt-3">
                    <div className="row row-cols-md-3 row-cols-lg-3">
                        {
                            plant.map((item, index) => {
                                return (
                                    <div key={index} className="col-6 mt-3">
                                        <Link to="#" className="nav-link text-dark text-capitalize" >
                                            <div className="text-center">
                                                <img src={item.img} alt="" className="img-fluid bg-pearl-light p-2" style={{width:'150px', height:'150px'}} />
                                                <h6 className="mt-2">{item.title}</h6>
                                                <h6 className="mt-2 color-fruit">${item.price}</h6>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <img src={HomePlantImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HomePlants;