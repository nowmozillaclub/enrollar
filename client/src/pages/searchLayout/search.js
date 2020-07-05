import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import searchlogo from '../../assets/home/web_search_logo.svg';
import "./search.css";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input, Pagination, Tag } from 'antd';

const {Search} = Input;

var val=1;
var course= "";

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
    // onSearch = (str) => {
    //     val=1;
    //     course=str;
    //     //make an api call here to store the array of objects here in result
    // }


const showResult= (
    <div className="resultList">
        <p className="homeMainContentSubText" style={{color: "black", fontSize: "18px" }}>Your result for: {course}</p>
        <br/>
        {results.map(item => (
            <div className="container" style={{cursor:'pointer'}} >
                <div className="row p-3 mb-2 bg-light text-dark rounded">
                    <div class="col s7 push-s5">
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
                    </div>
                    </div>
                    <div class="col s5 pull-s7">
                        <div className="thumbnail">
                            <img src={item.img} class="responsive-img" style={{height: "100%"}}></img>
                        </div>
                        <div className='author flow-text'>
                            <p>By: {item.author}</p>
                        </div>
                    </div>

                </div>
            <hr/>
            </div>
        ))}
    </div>
);

const resultTable = (
    <div>
    {(val==1)? showResult: <div/>}
    </div>
);

const SearchPage = (props) => {
    useEffect(()=>{
        window.$(document).ready(function() {
            window.$('input#input_text, textarea#textarea2').characterCounter();
          });
    },[]);
    if(!localStorage.getItem('token')){
        props.history.push('/')
    }
return(
    <div style={{backgroundColor: "#ede7f6"}}>
        {/* <hr classNameName="sep"/> */}
        <Navbar props={props}/>
        <div >
            <div class="row" style={{backgroundColor: "#ffb74d", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px", borderBottomWidth:"15px"}}>
                <div class="col s6">
                    <div className="homeMainContentContainer">
                        <span className="homeMainContentSubText">Find your perfect course...</span>
                        <br/>
                        <Search
                          placeholder="input search text"
                          enterButton="Search"
                          size="large"
                          onSearch={value => console.log(value)}
                        />
                    </div>
                </div>
                <div class="col s6">
                    <div className="homeMainContentContainer">  
                        <img className="homeImg" src={searchlogo}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            {resultTable}   
        </div>
        <footer className="page-footer">
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Follow us for more...</h5>
                    <p className="grey-text text-lighten-4">
                      Check out the <span>
                        <a href="https://github.com/nowmozillaclub/Course-Place/graphs/contributors"
                          style={{color:"yellow"}}
                        >
                          contributors for the code here!
                        </a>
                        </span>
                    </p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Artworks by...</h5>
                    <ul>
                      <li><a style={{color:"yellow"}} href="https://freepik.com">
                        Freepik</a></li>
                      <li><a style={{color:"yellow"}} href="https://dribbble.com">
                        Dribbble</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2020 Copyright, enrollar
                <a className="grey-text text-lighten-4 right" href="https://github.com/nowmozillaclub">
                  Our Github
                </a>
                </div>
              </div>
            </footer>
    </div>
);
};

export default SearchPage;