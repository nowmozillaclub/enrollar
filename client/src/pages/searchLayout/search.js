import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar'

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
    description: 'This course promises to help you to learn all the foundational technologies required for web development. The introductory classNamees will introduce you to the basics of various languages such as HTML, CSS, JS, Node, MongoDB and more.',
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

    }];

const SearchPage = (props) => {
    useEffect(()=>{
        window.$(document).ready(function() {
            window.$('input#input_text, textarea#textarea2').characterCounter();
          });
    },[])
return(
    <div>
        {/* <hr classNameName="sep"/> */}
        <Navbar />
        <div className="s01">
            <div className='row'>
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text searchbar">
                            <span className="card-title left flow-text seachTag">Find your perfect course...</span>
                            <div className="input-field">
                                <input id="search" type="text" className="validate" />
                                <label htmlFor="search">Search any course...</label>
                            </div>
                        </div>
                        <div className="card-action col s12">
                            <a className="waves-effect waves-light btn">Search</a>
                        </div>
                    </div>
                </div>
            
                
                <div className="results col s10 offset-s1">
                    <div className="container">
                        <h4>Results for Web Dev:</h4>
                    </div>
                    <ul>
                        {results.map(item => (
                            <div className="container" style={{cursor:'pointer'}} >
                                <div className="row p-3 mb-2 bg-light text-dark rounded">
                                    <div className="thumbnail rounded m-2">
                                        <img src={item.img} className="fluid-img"></img>
                                    </div>
                                    <div className="col-md">
                                        <div className='title'>
                                            <h5><strong>{item.title}</strong></h5>

                                        </div>
                                        <div className="text-secondary">
                                            <p>{item.description}</p>

                                        </div>
                                        <div className='price flow-text'>
                                            <p><strong>₹{item.price}</strong></p>

                                        </div>
                                        <div className='author flow-text'>
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
    </div>
);
};

export default SearchPage;