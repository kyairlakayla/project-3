import React from 'react'

function Hero() {
    return (
        <section className="hero">
            <h2>Find a Recipe</h2>
            <div>
                <label htmlFor="food-search"> Search</label>
                <input type="text" name="" id="food-search" placeholder= "Search our database" />
            </div>
        </section>
    )
}

export default Hero
