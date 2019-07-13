import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import runes from "../svg/runes.svg";
import { LandDisplay } from "./LandDisplay";
import { PanelOverlay } from "./PanelOverlay";

export interface LandPanelProps {
    isVisible: boolean;
}

export const LandPanel: FunctionComponent<LandPanelProps> = (props) => {
    return (
        <PanelOverlay overlayImage={runes} isOverlayHidden={props.isVisible}>
            <div style={{textAlign: "center"}}>
                <Typography variant="h4">
                    Land
                </Typography>
                <LandDisplay />
            </div>
        </PanelOverlay>
    );
};
