import { useState } from 'preact/hooks'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

export function Searchbox({ setResult }) {
    const [city, setCity] = useState("");

    const URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "19247a533da6fec622b50357ba7276ae"

    async function getweather(city) {
        let response = await fetch(
            `${URL}?q=${city}&appid=${API_KEY}&units=metric`
        )
        let data = await response.json()


        let result = {
            temperature: data.main.temp,
            max_temperature: data.main.temp_max,
            min_temperature: data.main.temp_min,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            weather: data.weather[0].main,
            city: data.name,
            country: data.sys.country
        }
        console.log(result);
        
        setResult(result);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getweather(city);
        setCity("");
    }

    return (

        <form onSubmit={handleSubmit}>
            <TextField
                label="City / Place"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />

            <Button
                type="submit"
                variant="contained"
                color="success"
                style={{ marginLeft: '10px', marginTop: '10px' }}
            >
                Search
            </Button>
        </form>
    )
}
