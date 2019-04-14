import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import upgrade from "../svg/upgrade.svg";
import { PanelOverlay } from "./PanelOverlay";
import { UpgradeDisplay } from "./UpgradeDisplay";

interface UpgradePanelState {
    isVisible: boolean;
}

export class UpgradePanel extends Component<{}, UpgradePanelState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    public render() {
        return (
            <PanelOverlay overlayImage={upgrade} isOverlayHidden={this.state.isVisible}>
                <>
                    <Typography variant="h4">
                        Upgrades
                    </Typography>
                    <UpgradeDisplay />
                </>
            </PanelOverlay>
        );
    }
}
