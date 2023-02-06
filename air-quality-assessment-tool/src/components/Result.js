import {useEffect, useState} from "react";

export default function ResultComponent({resultData}) {
    const [result, setResult] = useState({
        location: null, city: null, country: null, coordinates: {}, measurements: []
    });

    useEffect(() => {
        setResult(resultData);
    }, [resultData])

    return (
        <ul>
            <li>{result.city}</li>
            <li>{result.country}</li>
            {result.measurements.map(measure => <li key={measure}>Parameter: {measure.parameter}, Unit: {measure.unit},
                Value: {measure.value}</li>)}
        </ul>
    )
}