import {AppBar, Toolbar, Typography} from "@mui/material";

export default function HeaderComponent() {
    return (<AppBar position='static'>
            <Toolbar>
                <Typography textAlign="center" variant="h6" component="div" sx={{flexGrow: 1}}>
                    Air Quality Assessment Tool
                </Typography>
            </Toolbar>
        </AppBar>)
}