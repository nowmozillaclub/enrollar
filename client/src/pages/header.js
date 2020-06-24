import React from "react";

function Header() {
return(
<header>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <nav class="navbar navbar-expand-lg navbar transparent navbar-inverse navbar-fixed-top">
                <a class="navbar-brand " href="#">CoursePlace</a>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">SIGN UP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">LOGIN</a>
                    </li>
                </ul>
            </nav>
</header>

);
};

export default Header;