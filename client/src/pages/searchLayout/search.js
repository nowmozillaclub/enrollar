import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import searchlogo from '../../assets/home/web_search_logo.svg';
import "./search.css";
// import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import LoadingScreen from '../../assets/loader.gif'
import M from 'materialize-css';

const {Search} = Input;

const SearchPage = (props) => {
    var val=1;
    const [course, setCourse] = useState('')
    const [results, setResults] = useState([]);
    useEffect(()=>{
        window.$(document).ready(function() {
            window.$('input#input_text, textarea#textarea2').characterCounter();
          });
    },[]);
    if(!localStorage.getItem('token')){
        props.history.push('/')
    }
    const onSearch = (str) => {
        val=1;
        setResults(null)
        setCourse(str)
        M.toast({html: 'Working, give us a minute...', classes: 'rounded'});
        M.toast({html: 'It might be a little more than we expected. Have patience!', classes: 'rounded'});
        console.log(str)
        fetch('/search',{
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                query: str
            })
        }).then(res=>res.json()).then(result=>{
            if(result.error){
                M.toast({html: result.error, classes: 'rounded'});
                return
            }
            M.toast({html: "The processing of the courses depends on your machine and your internet connectivity!"})
            console.log(result)
            setResults(result)
        })
    }
    const showResult= (
        <div className="resultList">
            <p className="homeMainContentSubText" style={{color: "black", fontSize: "18px" }}>Your result for: {course}</p>
            <br/>
            {results ? ( results.map(item => (
                <a href={item.link} target="__blank" className="container" style={{cursor:'pointer'}} key={Math.random()} >
                    <div className="row">
                        <div className="col m12 l5">
                            <div className="thumbnail">
                                <img src={item.image} alt="course-cover" className="responsive-img" style={{height: "100%"}}></img>
                            </div>
                            <div className='author flow-text'>
                                <p>By: {item.by}</p>
                        </div>
                        </div>
                        <div className="col m12 l7">
                        <div className="col-md">
                            <div className='title'>
                                <h5><strong>{item.title}</strong></h5>
    
                            </div>
                            <div className="text-secondary">
                                <p>{item.body}</p>
    
                            </div>
                            
                        </div>
                        </div>
                        
    
                    </div>
                <hr/>
                </a>
            ))) : (
                <div className="loading">
                    <img src={LoadingScreen} className="responsive-img" alt="loading..." />
                </div>
            )
            }
        </div>
    );
    const resultTable = (
        <div>
        {(val===1)? showResult: <div/>}
        </div>
    );
return(
    <div style={{backgroundColor: "#ede7f6"}}>
        {/* <hr classNameName="sep"/> */}
        <Navbar props={props}/>
        <div >
            <div className="row" style={{backgroundColor: "#ffb74d", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px", borderBottomWidth:"15px"}}>
                <div className="col s12 m6 push-m6">
                    <div className="homeMainContentContainer">  
                        <img alt="logo cover" className="homeImg" src={searchlogo}/>
                    </div>
                </div>
                <div className="col s12 m6 pull-m6">
                    <div className="homeMainContentContainer">
                        <span className="homeMainContentSubText">Find your perfect course...</span>
                        <br/>
                        <Search
                          placeholder="input search text"
                          enterButton="Search"
                          size="large"
                          onSearch={value => onSearch(value)}
                        />
                    </div>
                </div>
                
            </div>
        </div>
        <div className="row">
            {
                results ? (
                    resultTable
                ) : (
                    <div className="loading">
                        <img src={LoadingScreen} className="responsive-img" alt="loading..." />
                    </div>
                )
            }   
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