import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import cover from '../../assets/sidenavCover.png'

const Navbar= (props) => {
    useEffect(()=>{
        window.$(document).ready(function(){
            window.$('.sidenav').sidenav();
          });
    },[])
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo enrollar">enrollar</Link>
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        {
                            localStorage.getItem('token') ? (
                                <li>
                                    <Link onClick={()=>{
                                        localStorage.clear()
                                        props.props.history.push('/')
                                    }}>
                                        <i className="material-icons right">directions_run</i>
                                        LOG OUT
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/sign-in">
                                            <i className="material-icons left">person_pin</i>
                                            SIGN IN
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sign-up">
                                            <i className="material-icons right">person_add</i>
                                            SIGN UP
                                        </Link>
                                    </li>
                                </>
                            )
                        }  
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={ cover } alt="Narvbar-cover"/>
                        </div>
                        <Link to="/"><span style={{fontSize:"2rem"}} className="purple-text enrollar">enrollar</span></Link>
                    </div>
                </li>
                {
                    localStorage.getItem('token') ? (
                        <li><Link onClick={()=>{
                            localStorage.clear()
                            console.log(props)
                            props.props.history.push('/')
                        }}><i className="material-icons">directions_run</i>Log Out</Link></li>
                    ) : (
                        <>
                            <li><Link to="/sign-in"><i className="material-icons">person_pin</i>Sign In</Link></li>
                            <li><div className="divider"></div></li>
                            <li><Link to="/sign-up"><i className="material-icons">person_add</i>Sign Up</Link></li>
                        </>
                    )
                }
            </ul>
        </>
    )
}

export default Navbar
