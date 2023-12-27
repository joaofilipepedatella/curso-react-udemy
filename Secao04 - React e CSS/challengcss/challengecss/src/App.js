import './App.css';
import Car from './components/Car';

function App() {

  const myCars = [
    {id:1, name: "Fusca", km: 100000, color: "Branco"},
    {id:2, name: "Polo", km: 0, color: "Preto"},
    {id:3, name: "City", km: 28500, color: "Stonegray"}
  ]

  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car}/>
        ))}
      </div>
    </div>
  );
}

export default App;
