import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme/Theme";
import Home from "./Pages/Home";

export default function App() {

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    );
}
