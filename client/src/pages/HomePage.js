import React, { useEffect, useState } from 'react';

import Header from "./header";
import Footer from "./footer";
import './styles.css';
const HomePage = () => {
return(



<div class="mask rgba-gradient align-items-center">
    <div class="container">
        <div class="row">
            <div class="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                <h1 class="subheading mb-xl-4 pb-xl-0 mb-md-3 pb-md-3 mb-4"><strong>Course Place </strong></h1>
                <h6 class="mb-4"  >This site helps you by finding the best course suited for you so you can do more of the learning and spend less time searching for the course!</h6>
            </div>
            <div class="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" >
                <img src="https://mdbootstrap.com/img/illustrations/graphics(3).png"  class="img-fluid" alt="Responsive image" />
            </div>

        </div>

    </div>

</div>


);
};

export default HomePage;