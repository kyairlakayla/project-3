import React from 'react'
import styled from "styled-components";

function Hero() {
    return (
        <StyledHero>
        <section className="hero">
            <h2>Find a Recipe</h2>
            <div>
                <label htmlFor="food-search"> Search</label>
                <input type="text" name="" id="food-search" placeholder= "Search our database" />
            </div>
        </section>
        </StyledHero>
    )
}

const StyledHero = styled.section`
 .hero {
     background-color: yellow;
 }
`

export default Hero
