import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { VikingClicker } from "./components/VikingClicker";

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "0.8em"
            }
        },
        MuiTypography: {
            h3: {
                fontFamily: "'Uncial Antiqua', cursive"
            },
            h4: {
                fontFamily: "'Uncial Antiqua', cursive"
            }
        }
    },
    typography: {
        useNextVariants: true
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
