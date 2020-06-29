import React, { useEffect, useState } from 'react';
import Footer from "./footer";
import Header from "./header";
import './styles.css';
const HomePage = () => {
return(

<body>
    <div class="mask rgba-gradient align-items-center">
        <Header />
        <div class="row">
            <div class="col-md-6 text-center">
                <div class="text-center">
                    <h1 class="subheading mb-xl-4 pb-xl-0 mb-md-3 pb-md-3 mb-4 text-white"><strong>Course Place </strong></h1>
                    <h6 class="mb-4 text-white ">This site helps you by finding the best course suited for you so you can do more of the learning and spend less time searching for the course!</h6>
                </div>
            </div>
            <div class="col-md-6 col-xl-5 mt-xl-5 text-white wow fadeInRight">
                <img src="https://mdbootstrap.com/img/illustrations/graphics(3).png" class="responsive" alt="Responsive image" />
            </div>
        </div>
        <Footer/>
    </div>
</body>
);
};

export default HomePage;