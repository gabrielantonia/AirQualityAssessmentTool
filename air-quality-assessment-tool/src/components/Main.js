import React, {useState} from 'react';
import {
    Divider,
    Paper,
    TextField,
    Button,
    Card,
    Grid, Input,
} from "@mui/material";
import HeaderComponent from "./Header";

export default function MainComponent() {
    const [state, setState] = useState();
    const handleClick = ({target}) => {

    }

    return (
        <Paper spacing={5}>
            <HeaderComponent></HeaderComponent>
            <Grid container spacing={40} justifyContent={"center"}>
                <Grid item>
                    <TextField
                        required={true}
                        helperText="Enter City Name"
                        variant="filled">
                    </TextField>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <TextField
                        required={true}
                        helperText="Enter City Name"
                        variant="filled">
                    </TextField>
                    <Card id="results2" hidden={false}></Card>
                </Grid>
                <Button onClick={handleClick}/>
                <Grid container spacing={40} justifyContent={"center"} hidden={false}>
                    <Grid item>
                        Result 1
                    </Grid>
                    <Divider></Divider>
                    <Grid item>
                        Results 2
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
)
}