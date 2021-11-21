import React from 'react';
import styled from "styled-components";
import choppingBoard from "../../img/choppingBoard.jpg";

function Navigation() {
    return (
        <StyledNavigation>
        <div className="nav-header row">
            <nav className="row">
                <img className="recipe" src="" alt="Recipe" />
                <ul className="left-nav">
                    {/* eslint-disable-next-line */}
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="#">Quick & Easy</a></li>
                    <li><a href="Videos">Videos</a></li>
                    <li><a href="#">About</a></li>
                </ul>

                <ul className="right-nav">
                    <li><a href="#saved">Saved Recipes</a></li>
                    <li><a href="">Donate</a></li>
                    <li> <a href="">Account</a> </li>
                </ul>
            </nav>
        </div>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.section`
 li, a {
     
     list-style-type: none;
     text-decoration: none;
     color: black;
}

a:hover {
    text-decoration: underline;
}

.left-nav {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 15px;
    align-self: flex-start;
    float: left;
}

.right-nav {
   display: flex;
   justify-content: flex-end;
   align-content: flex-end;
   gap: 15px;
   float: right;
   padding-right: 15px;
}
 
`

export default Navigation
