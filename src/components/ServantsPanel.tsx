import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent } from "react";
import farmer from "../svg/farmer.svg";
import { PanelOverlay } from "./PanelOverlay";
import { ServantsDisplay } from "./ServantsDisplay";
import { VikingClickerContextConsumer } from "./VikingClicker";

export const ServantsPanel: FunctionComponent = () => {
    return (
        <VikingClickerContextConsumer>
            {(context) =>
                <PanelOverlay overlayImage={farmer} isOverlayHidden={context.areUpgradesAndServantsEnabled}>
                    <>
                        <Typography variant="h4">
                            Servants
                        </Typography>
                        <ServantsDisplay />
                    </>
                </PanelOverlay>
            }
        </VikingClickerContextConsumer>
    );
};
