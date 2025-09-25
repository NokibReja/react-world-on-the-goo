import React, { useState } from 'react';
import './country.css'
const Country = ({ country ,  handVisitedCountries, handleVisitedFlag }) => {
    // console.log(country.name.common)
    // console.log(handVisitedCountries)
    const [visited, setVisited]= useState(false)
    const handleClicked =()=>{
        // ternary
        // setVisited(visited? false: true)
        // toggle
        setVisited(!visited)
        handVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <img src={country.flags?.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h3>Capital: {country.capital.capital[0]}</h3>
            <h3>Region: {country.region.region}</h3>
            <p>Population: {country.population.population}</p>
            <h3>Area: {country.area.area} -- {
                country.area.area > 500000 ? 'Big Country' : 'Small Country'
            }</h3>
            <button onClick={handleClicked}>
                {visited? 'Visited': 'Not Visited'}
            </button>
            <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>Add visited flag</button>
        </div>
    );
};

export default Country;