import React, {useEffect, useState} from 'react';
import {
    Divider, Paper, TextField, Button, Card, Grid, Input,
} from "@mui/material";
import HeaderComponent from "./Header";
import {getCityData} from "../services/Fetch";
import {DynamicForm} from "@mui/icons-material";
import axios from "axios";

export default function MainComponent() {
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

    return (<Paper id="main">
        <form onSubmit={handleSubmit}>
            <input value={city} type='text' required={true} placeholder='Enter City Name' onChange={handleChange}/>
            <button type='submit'> Compare</button>
            {result &&
                <ul>
                    <li>{result.city}</li>
                    <li>{result.country}</li>
                    {/*{stations.map(station => <div key={station}> {station} </div>)*/}
                    {result.measurements.map( measure => <li key={measure}>Parameter: {measure.parameter}, Unit: {measure.unit}, Value: {measure.value}</li>)}
                </ul>
            }
        </form>
    </Paper>)

}