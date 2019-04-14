import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import vikingShip from "../svg/viking-ship.svg";
import { DistanceDisplay } from "./DistanceDisplay";
import { PanelOverlay } from "./PanelOverlay";
import { TargetDisplay } from "./TargetDisplay";

export interface RaidingPanelProps {
    isVisible: boolean;
}

export const RaidingPanel: FunctionComponent<RaidingPanelProps> = (props) => {
    return (
        <PanelOverlay overlayImage={vikingShip} isOverlayHidden={props.isVisible}>
            <div style={{textAlign: "center"}}>
                <Typography variant="h4">
                    Raiding
                </Typography>
                <DistanceDisplay />
                <TargetDisplay />
            </div>
        </PanelOverlay>
    );
};
