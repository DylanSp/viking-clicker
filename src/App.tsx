import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { VikingClicker } from "./components/VikingClicker";

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h4: {
                fontFamily: "'Uncial Antiqua', cursive"
            }
        }
    }
});

class App extends Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <VikingClicker />
            </MuiThemeProvider>
        );
    }
}

export default App;
