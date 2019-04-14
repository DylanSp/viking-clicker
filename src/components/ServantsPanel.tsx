import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import farmer from "../svg/farmer.svg";
import { PanelOverlay } from "./PanelOverlay";
import { ServantsDisplay } from "./ServantsDisplay";

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

    public render() {
        return (
            <PanelOverlay overlayImage={farmer} isOverlayHidden={this.state.isVisible}>
                <>
                    <Typography variant="h4">
                        Servants
                    </Typography>
                    <ServantsDisplay />
                </>
            </PanelOverlay>
        );
    }
}
