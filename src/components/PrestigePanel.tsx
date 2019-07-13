import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import scythe from "../svg/scythe.svg";
import { PanelOverlay } from "./PanelOverlay";
import { PrestigeDisplay } from "./PrestigeDisplay";

export interface PrestigePanelProps {
    isVisible: boolean;
}

export const PrestigePanel: FunctionComponent<PrestigePanelProps> = (props) => {
    return (
        <PanelOverlay overlayImage={scythe} isOverlayHidden={props.isVisible}>
            <div style={{textAlign: "center"}}>
                <Typography variant="h4">
                    Prestige
                </Typography>
                <PrestigeDisplay />
            </div>
        </PanelOverlay>
    );
};
