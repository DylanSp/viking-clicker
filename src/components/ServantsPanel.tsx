import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import farmer from "../svg/farmer.svg";
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
                    <div style={{height: "100%", width: "100%", backgroundColor: "black", position: "absolute"}}>
                        <img
                            src={farmer}
                            style={{
                                filter: "invert(100%)",
                                width: "75%",
                                position: "absolute",
                                margin: "auto",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0
                            }}
                        />
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
