import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import search from "./assets/search.png";
import "./App.css";

function App() {
  const [value, setValue] = useState('London')
  const inputRef = useRef()
  const [data, setData] = useState({
    name: "India",
    humidity: 18,
    temp: 18,
    icon: "https://openweathermap.org/img/wn/09d@2x.png",
    description:'Clear Sky'
  });
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=de1a7ecf5258422e2a99a1e69679b5e8&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        setData({
          ...data,
          name: res.data.name,
          humidity: res.data.main.humidity,
          temp: res.data.main.temp,
          icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
          description:res.data.weather[0].description,
        });
      }).catch(err => console.log(err));
      
  }, [value]);
  const submitHandler = ()=> {
    console.log(inputRef.current.value)
    setValue(inputRef.current.value)
    inputRef.current.value=''
  }

  return (
    <Container className="m-auto container">
      <h1>Weather App</h1>
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="Search Your City" ref={inputRef} />
          <button onClick={submitHandler}>
            <img src={search} alt="search" />
          </button>
        </div>
        <div className="icon">
        <img src={data.icon} alt="icon" />
        <h1>{Math.round(data.temp)}°C</h1>
        <h2>{data.name}</h2>
        </div>
        <div className="description">
          <span>Humidity: {data.humidity}</span>
          <span>{data.description}</span>
        </div>
        
      </div>
    </Container>
  );
}

export default App;
