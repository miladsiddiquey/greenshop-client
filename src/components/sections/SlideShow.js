import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';
import '../../style/SlideShow.css';

const SlideShow = () => {
    const banner = [
        {
            "id":1,
            "img": "https://i.ibb.co/xjqkrcZ/banner2-removebg-preview.png",
            "title":<>let's make a better <span style={{color:'#4FA35F'}}>planet</span></>,
           
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur sit amet consectetur adipisicing dolor adipisicing"
        },
        {
            "id":2,
            "img": "https://i.ibb.co/dG8LFfW/banner1-removebg-preview-1.png",
            "title":<>let's make a better <span style={{color:'#4FA35F'}}>planet</span></>,
            
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur sit amet consectetur adipisicing dolor adipisicing"
        },
        {
            "id":3,
            "img": "https://i.ibb.co/M9nBQyp/English-Ivy-Air-Purifying-Plant-removebg-preview-1.png",
            "title":<>let's make a better <span style={{color:'#4FA35F'}}>planet</span></>,
            
            "subTitle": "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur sit amet consectetur adipisicing dolor adipisicing"
        },
    ]
    
    const [index, setIndex] = useState(0);
   
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    
    return (
         <div className="container">
        <div style={{backgroundColor:'#F5F5F5',padding:'30px 50px'}}>
           

                <Carousel fade activeIndex={index} onSelect={handleSelect} interval={4000}>
                    {
                        banner.map((item) => (
                            <Carousel.Item key={item.id}>
                                <div className="row align-items-center carousel-sec ">

                                    <div className="col-md-7 "style={{paddingRight:'90px'}} >
                                        <h6 className="text-uppercase">welcome to greenshop</h6>
                                        <h1 style={{color:'#5E5D5D',textTransform:'uppercase',fontWeight:'900',fontSize:'60px'}}>{item.title}</h1>
                                        <p style={{color:'#747577'}}>{item.subTitle}</p>
                                        <div className="d-flex align-items-center">
                                       
                                        <button type="button" class="btn  shop_now  me-5">Shop Now</button>
                                       
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img
                                            className=" img-fluid"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                    }

                </Carousel>

            </div>
        </div>
    );
};

export default SlideShow;