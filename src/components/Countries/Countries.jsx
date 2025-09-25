import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    
    const handVisitedCountries = (country) => {
        // console.log('count visited countries', country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlag = (flag) =>{
        // console.log('flag button clicked', flag)
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total visited Country: {visitedCountries.length}</h3>
            <h3>Total visited Flag: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flag-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handVisitedCountries={handVisitedCountries}
                        handleVisitedFlag ={handleVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;