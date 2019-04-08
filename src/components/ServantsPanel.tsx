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
    // position: absolute on the divs works with position: relative on the parent (in LeftPanel) so that they overlap, while staying in LeftPanel
    public render() {
        return (
            <>
                <button onClick={this.transitionIn}>test</button>
                <CSSTransition in={this.state.isVisible} timeout={2000} unmountOnExit={false} classNames="servant-panel">
                    <div style={{textAlign: "center", height: "100%", width: "100%", position: "absolute"}}>
                        <Typography variant="h4">
                            Servants
                        </Typography>
                        <ServantsDisplay />
                    </div>
                </CSSTransition>
                <CSSTransition in={!this.state.isVisible} timeout={2000} unmountOnExit={true} classNames="servant-overlay">
                    <div style={{height: "100%", width: "100%", backgroundColor: "black", position: "absolute"}} />
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
