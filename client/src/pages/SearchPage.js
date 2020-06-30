import React, { useEffect, useState } from 'react';
import './css/styles.css';

const results = [
{
title: 'Web Design for Web Developers: Build Beautiful Websites!',
description: 'Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included',
author: 'Colt Steele',
price: 399,
img:"https://img-a.udemycdn.com/course/480x270/629302_8a2d_2.jpg",

},

{
title: 'Best Udemy Course for Python: Complete Python Bootcamp',
description: 'It is safe to say that Python is one of the most popular languages to program and develop on. So even if you are completely new to the programming scene this Bootcamp will be there to guide you every step of the way.',
author: 'Colt Steele',
price: 420,
img:"https://img-a.udemycdn.com/course/480x270/692188_9da7_13.jpg",

},

{
title: 'Web Design for Web Developers: Build Beautiful Websites!',
description: 'Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included',
author: 'Colt Steele',
price: 799,
img:"https://img-a.udemycdn.com/course/480x270/903378_f32d_5.jpg",

},
{
title: 'Best Udemy Course for Web Development: Web Developer Bootcamp',
description: 'This course promises to help you to learn all the foundational technologies required for web development. The introductory classes will introduce you to the basics of various languages such as HTML, CSS, JS, Node, MongoDB and more.',
author: 'Colt Steele',
price: 399,
img:"https://img-a.udemycdn.com/course/480x270/666914_6c60_3.jpg",

},
{
title: 'Best Udemy Course for Machine Learning: Hands-On Python & R In Data Science',
description: 'Designed by two professional data scientists, this program will help you to go through the concepts of machine learning one by one.',
author: 'Colt Steele',
price: 499,
img:"https://img-a.udemycdn.com/course/480x270/1035472_23ce_5.jpg",

}
];
const SearchPage = () => {
return(
<html>

<head>
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link href="css/styles.css" rel="stylesheet" />
</head>

<body>
    <div class="s01">
        <div class='row'>
            <form>
                <fieldset>
                    <legend>Find your perfect course</legend>
                </fieldset>
                <div class="inner-form">
                    <div class="input-field first-wrap">
                        <input id="search" type="text" placeholder="Search for anything" class="round" />
                    </div>
                    <div class="input-field third-wrap">
                        <button class="btn-search" type="button">Search</button>
                    </div>
                </div>
            </form>
            <div class="results">
                <ul>
                    {results.map(item => (
                        <div class="container">
                            <div class="row p-3 mb-2 bg-light text-dark rounded-lg">
                                <div class="thumbnail rounded m-2">
                                    <img src={item.img}></img>
                                </div>
                                <div class="col-md">
                                    <div class='title'>
                                        <h4><strong>{item.title}</strong></h4>

                                    </div>
                                    <div class="text-secondary">
                                        <p>{item.description}</p>

                                    </div>
									 <div class='price'>
                                        <p><strong>₹{item.price}</strong></p>

                                    </div>
									 <div class='author'>
                                        <p>{item.author}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </ul>
            </div>


        </div>
    </div>
</body>

</html>
);
};

export default SearchPage;