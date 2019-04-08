import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { ServantsDisplay } from "./ServantsDisplay";
import "./ServantsPanel.css";

interface ServantsPanelState {
    isVisible: boolean;
}

export class ServantsPanel extends Component<{}, ServantsPanelState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    // button only exists for testing
    public render() {
        return (
            <>
                <button onClick={this.transitionIn}>test</button>
                <CSSTransition in={this.state.isVisible} timeout={1000} unmountOnExit={true} classNames="servant-panel">
                    <div style={{textAlign: "center"}}>
                        <Typography variant="h4">
                            Servants
                        </Typography>
                        <ServantsDisplay />
                    </div>
                </CSSTransition>
            </>
        );
    }

    private transitionIn = () => {
        this.setState({
            isVisible: true
        });
    }
}
