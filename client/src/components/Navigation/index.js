import React from 'react'
import styled from "styled-components";

function Navigation() {
    return (
        <StyledNavigation>
        <div>
            <nav>
                <img src="" alt="Recipe" />
                <ul>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Quick & Easy</a></li>
                    <li><a href="Videos">Videos</a></li>
                    <li><a href="#">About</a></li>
                </ul>

                <ul>
                    <li><a href="">Saved Recipes</a></li>
                    <li><a href="">Donate</a></li>
                    <li> <a href="">Account</a> </li>
                </ul>
            </nav>
        </div>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.section`
 nav {
     background-color: yellow;
     padding-bottom: 0px
 }
`

export default Navigation
