import React, {useState} from 'react';
import Result from "./Result";
import {getCityData} from "../services/Fetch";
import {Card} from "@mui/material";

export default function Form() {
    const [result, setResult] = useState({
        location: null, city: null, country: null, coordinates: {}, measurements: []
    });
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        getCityData(city).then(res => {
            if (res.results.length > 0) {
                setResult(res.results[0]);
                setError(null);
            } else {
                setResult(null);
                setError('City not found.');
            }
        })
    }
    const handleChange = ({target}) => {
        setCity(target.value);
    };

    return (<form onSubmit={handleSubmit}>
            <input value={city} type='text' required={true} placeholder='Enter City Name' onChange={handleChange}/>
            <button type='submit'> Submit</button>
            {result && <Result resultData={result}></Result>}
            {error && <Card>{error}</Card>}
        </form>)
}