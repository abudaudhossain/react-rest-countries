
import './App.css';
import Countries from './components/countries/Countries';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
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
