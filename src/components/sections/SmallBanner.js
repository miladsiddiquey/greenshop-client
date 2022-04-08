import React from 'react';
import '../../style/SmallBanner.css';

const SmallBanner = () => {
    return (
        <div className="container">
            <div className="row smallBannerRow">
                <div className="text-center smallBanner p-3">
                   <div>
                   <h1 className="mt-3">Living Thing Grows</h1>
                    <h6 className="mt-3">You have on car & Are you <br/> ready to grow? come & shop whith us!</h6>
                    <h4 className="mt-3">Price from: <span className="color-fruit fs-22">$18</span></h4>
                   </div>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                    <button className="btn btn-fruit me-3">SHOP NOW</button>
                    <button className="btn btn-fruit me-3">VIEW NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallBanner;