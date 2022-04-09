import React from 'react';
import '../../style/Fetcher.css';
import fetcherOne from '../../images/fs1.png';
import fetcherTwo from '../../images/fs2.png';

const Fetcher = () => {
    const fetcher = [
        {
            "title":<>summer cactus <br/>& succulents</>,
            "subTitle":'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ',
            "img":fetcherOne,
        },
        {
            "title":<>summer cactus <br/>& succulents</>,
            "subTitle":'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ',
            "img":fetcherTwo,
        }
    ]
    return (
        <div className="container">
            <div className="row mt-5 mb-3">
            {
                fetcher.map((item, index)=>{
                    return(
                        <div key={index} className="col-md-6 mt-5 ">
                           <div className="d-flex align-items-center bg-pearl-light fetcher_main ">
                               <img src={item.img} alt="" className="img-fluid fetcher_img" style={{marginTop:'-60px'}} />
                               <div className="text-end pe-4 ">
                                   <h5 className=" fetcher_title">{item.title}</h5>
                                   <p className="fetcher_subTitle">{item.subTitle}</p>
                                   <button className="btn btn-fruit">find more</button>
                               </div>
                           </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default Fetcher;