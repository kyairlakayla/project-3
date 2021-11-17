import React from 'react'

function Navigation() {
    return (
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
    )
}

export default Navigation
