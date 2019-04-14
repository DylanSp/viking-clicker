import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import vikingHelmet from "../svg/viking-helmet.svg";
import { CrewDisplay } from "./CrewDisplay";
import { PanelOverlay } from "./PanelOverlay";

export interface CrewPanelProps {
    isVisible: boolean;
}

export const CrewPanel: FunctionComponent<CrewPanelProps> = (props) => {
    return (
        <PanelOverlay overlayImage={vikingHelmet} isOverlayHidden={props.isVisible}>
            <div style={{textAlign: "center"}}>
                <Typography variant="h4">
                    Crew
                </Typography>
                <CrewDisplay />
            </div>
        </PanelOverlay>
    );
};
