import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";

export default function Layout(props) {
    return (
        <AppBar
            position="sticky"
        >
            <Toolbar
                sx={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "space-evenly"
                }}
            >
                {props.children}
            </Toolbar>
        </AppBar>
    );
}

