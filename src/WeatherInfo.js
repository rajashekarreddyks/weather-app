export default function WeatherInfo(props){
    return(
        <div>
            <h1 className=" font-bold text-orange-400 py-4">{props.data.city}</h1>
            <ul className=" list-none">
                <li className=" py-4"> temperature: {props.data.temperature} </li>

                <br/>

                <li> description: {props.data.description}</li>
            </ul>


            <ul>
                <li> visibility: {props.data.visibility} </li>
                <li> humidity: {props.data.humidity} %</li>
                <li> windSpeed: {props.data.wind}mph</li>
                <li> Feels Like : {props.data.feelsLike} celsius</li>

                <li> lat: {props.data.coord}</li>

            </ul>
        </div>
    )
}