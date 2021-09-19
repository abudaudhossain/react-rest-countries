
import './App.css';
import Countries from './components/countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/* 
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
} */
export default App;
