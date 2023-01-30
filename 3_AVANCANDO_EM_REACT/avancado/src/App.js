
import { useState } from 'react';
import './App.css';

import Coffe from "./assets/coffeTech.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 40000 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 35000 }
  ];

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <header className='App-header'>
      <div className="App">
        <h1>Avançando em React</h1>
        <div>
          <img
            src={Coffe}
            alt="Café"
            width="75%"
            height="75%"
          />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />

        {/* props */}
        <ShowUserName name={userName} />

        {/* destructuring */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />

        {/* Reaproveitando */}
        <CarDetails brand="Ford" km={4500} color="Vermelho" newCar={false} />
        <CarDetails brand="Fiat" km={0} color="Branco" newCar={true} />

        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            newCar={car.newCar}
            km={car.km}
          />
        ))}

        {/* Fragmentos */}
        <Fragment propFragment='Teste' />

        {/* Children */}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
        {/* Executar função */}
        <ExecuteFunction myFunction={showMessage} />

        {/* state lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>
    </header>
  );
}

export default App;
