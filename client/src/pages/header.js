import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
return (
<header>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <div class="wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">CoursePlace</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="home">HOME <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="login">LOGIN</a>
                    <a class="nav-item nav-link active" href="sign up">SIGN UP</a>
                </div>
            </div>
        </nav>

    </div>
</header>

);
};
export default Header;