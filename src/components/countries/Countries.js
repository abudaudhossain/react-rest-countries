import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div className="country">
            <h1>Hi I tall my won file 🧑🏼🧑🏼{countries.length}👨🏼👩🏼‍🎨!!</h1>
            <Country></Country>
        </div>
    );
};

export default Countries;