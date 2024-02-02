import axios from "axios"
import { useState } from "react"
import WeatherInfo from "./WeatherInfo"


export default function Weather(){

    const [ weatherData, setWeatherData] = useState({})
    const [ city, setCity] = useState()

    function handleResponse(response){
        console.log(response.data.sys)
        setWeatherData({
            date: new Date (response.data.dt * 1000),
            time: new Date (response.data.dt * 1000),
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            visibility:response.data.visibility,
            icon:response.data.weather[0].icon,
            coord:response.data.coord.lat,
            sunrise:response.data.sys.sunrise,

        })

    }

    function search(){
        const apikey = 'fd60e71eb430f02abc073b07332d346c'
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
        axios.get(apiUrl).then(handleResponse)

    }

    function handleSubmit(event){
     event.preventDefault()

     search()

    }

    function handleCity(event){
     setCity(event.target.value)
    }
    return(
        <div className=" Weather">
            <div className=" Container">
                <form className=" search-form" onSubmit={handleSubmit}>
                <input 
                type=" search"
                placeholder=" type a city.."
                onChange={handleCity}
                className=' pr-10 focus:outline-none border border-cyan-800 py-3 '
                />

           <button type=" submit" value='search' className=" border rounded-md text-white bg-black py-2 px-2 "> search</button>
            </form>

            <WeatherInfo data={weatherData}/>
            </div>
        </div>
      )
    
}