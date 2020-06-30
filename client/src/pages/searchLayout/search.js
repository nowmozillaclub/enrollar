import React, { useEffect, useState } from 'react';
const SearchPage = () => {
return(
    <div className="s01">
        <form>
            <fieldset>
                <legend>Find your perfect course</legend>
            </fieldset>
            <div className="inner-form">
                <div className="input-field first-wrap">
                    <input id="search" type="text" placeholder="Search for anything" className="round" />
                </div>
                <div className="input-field third-wrap">
                    <button className="btn-search" type="button">Search</button>
                </div>
            </div>
        </form>
    </div>
);
};

export default SearchPage;