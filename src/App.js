import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counteries></Counteries>
    </div>
  );
}


function Counteries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Trivel in World without Tikits </h1>
      <h3>View Countries: {countries.length}</h3>
    </div>
  )
}
export default App;
