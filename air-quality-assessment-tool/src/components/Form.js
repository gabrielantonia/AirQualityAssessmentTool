import React, {useState} from 'react';
import Result from "./Result";
import {getCityData} from "../services/Fetch";

export default function Form(){
    const [result, setResult] = useState({
        location: null, city: null, country: null, coordinates: {}, measurements: []
    });
    const [city, setCity] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        getCityData(city).then(res => {
            if (res.results) {
                setResult(res.results[0]);
            }
        })
    }
    const handleChange = ({target}) => {
        setCity(target.value);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input value={city} type='text' required={true} placeholder='Enter City Name' onChange={handleChange}/>
            <button type='submit'> Submit </button>
            <Result resultData={result}></Result>
        </form>
    )
}