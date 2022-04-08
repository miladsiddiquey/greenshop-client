
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        const reviewData = {
          name: data.name,
          identity: data.identity,
          comment: data.comment,
          imageURL: imageURL, 
          
                         
        }
        alert('Review added');
        reset();
    
        const url = `https://quiet-everglades-43613.herokuapp.com/addReview`
        console.log(reviewData)
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(reviewData)
        })
          .then(res => console.log('admin added', res))
      };

      //image upload
  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '18aa31c052aa8ecc232f80604caa2d68');
    imageData.append('image', event.target.files[0])


    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    return (
    <div className="admin-section">
        <div className="  p-3">
                    <h2 className="text-center mb-4">Add Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Full Name"
                                        name="name"
                                        {...register("name")}
                                        required
                                    />
                                </div>                                                              
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Identity</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="ex. customer"
                                        name="identity"
                                        {...register("identity")}
                                        required
                                    />
                                </div>
                              
                            </div>
                        </div>
                                        
                        <div className="form-group mt-3">
                            <label> Image</label>
                            <input
                                type="file"
                                className="form-control form-control-lg"
                                placeholder="Import Your  Image"
                                onChange={handleImageUpload}
                               required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Comment</label>
                            <textarea
                                row="4"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="write your comment"
                                name="comment"
                                 {...register("comment")}
                                 required
                            />
                        </div>
                        <button type="submit" className="btn btn-fruit  mt-3">Submit</button>
                    </form>
                </div>
    </div>
    );
};

export default Review;