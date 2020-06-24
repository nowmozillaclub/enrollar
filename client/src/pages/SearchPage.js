import React, { useEffect, useState } from 'react';
import Footer from "./footer";
import Header from "./header";
import './css/styles.css';
const SearchPage = () => {
return(
<html>

<head>
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
    <link href="css/styles.css" rel="stylesheet" />
</head>

<body>
    <div class="s01">
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
    </div>
    <Footer/>
</body>

</html>
);
};

export default SearchPage;