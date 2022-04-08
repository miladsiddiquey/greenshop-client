import React from 'react';
import '../pages/Task.css';

const Task = () => {
    return (
        <main>
            <div className="container">
                <div className="row mt-5 align-items-start ">
                    <div className="col-md-8 d-flex justify-content-center">
                        <div>
                        <h1>Dairy book + alarm</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aspernatur, tempora ex voluptas deserunt <br /><br /> sed fugiat facere voluptatem assumenda, ipsum inventore corporis culpa perferendis tenetur similique cumque? Libero necessitatibus ut earum exercitationem aperiam dicta, explicabo quibusdam odio et. Deleniti optio magni molestiae<br /><br /> rem perspiciatis quasi possimus beatae asperiores, accusantium, odit fugiat porro libero inventore ipsum earum debitis. Deserunt quisquam hic odit, suscipit obcaecati maxime aspernatur repellendus vel. Perspiciatis, quos recusandae.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="sideInput">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="this is text field" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text btn btn-info text-white" id="basic-addon2">Yearly</span>
                            </div>
                            <div class="input-group mb-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>the dropdown is select category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>                             
                            </select>
                                <span class="input-group-text btn btn-info text-white" id="basic-addon2">45 days</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Task;