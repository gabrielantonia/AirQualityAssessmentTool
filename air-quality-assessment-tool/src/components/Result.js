import {useEffect, useState} from "react";
import {Card, List, ListItem} from "@mui/material";

export default function ResultComponent({resultData}) {
    const [result, setResult] = useState({
        location: null, city: null, country: null, coordinates: {}, measurements: []
    });

    useEffect(() => {
        setResult(resultData);
    }, [resultData])

    return (
        <Card>
            <List>
                <ListItem>{result.city}</ListItem>
                <ListItem>{result.country}</ListItem>
                {result.measurements.length > 0 &&
                    result.measurements.map(measure => <ListItem style={{background: "aqua"}} key={measure}>Parameter: {measure.parameter},
                        Unit: {measure.unit},
                        Value: {measure.value}</ListItem>)}
            </List>
        </Card>

    )
}