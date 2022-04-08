import React from 'react';
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
                           <div className="d-flex align-items-center bg-pearl-light p-2 h-6">
                               <img src={item.img} alt="" className="img-fluid" style={{marginTop:'-60px'}} />
                               <div className="text-end  pe-4">
                                   <h5 className="fw-bold text-uppercase">{item.title}</h5>
                                   <p>{item.subTitle}</p>
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