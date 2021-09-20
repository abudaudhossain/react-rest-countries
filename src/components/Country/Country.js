import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props)

    const {name, flag, capital, population, region} = props.country;
    return (
        <div className = "country">
            <h2>Hi👋🏼 this is {name}</h2>
            <img src={flag} alt="" style = {{width: "100%"}} />
            <p><small>Region: {region}</small></p>            
            <p>Capital: {capital} Population: {population}</p>
        </div>
    );
};

export default Country;