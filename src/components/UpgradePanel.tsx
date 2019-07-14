import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent } from "react";
import upgrade from "../svg/upgrade.svg";
import { PanelOverlay } from "./PanelOverlay";
import { UpgradeDisplay } from "./UpgradeDisplay";
import { VikingClickerContextConsumer } from "./VikingClicker";

export const UpgradePanel: FunctionComponent = () => {
    return (
        <VikingClickerContextConsumer>
            {(context) =>
                <div data-cy="Upgrades">
                    <PanelOverlay overlayImage={upgrade} isOverlayHidden={context.areUpgradesAndServantsEnabled}>
                        <>
                            <Typography variant="h4">
                                Upgrades
                            </Typography>
                            <UpgradeDisplay />
                        </>
                    </PanelOverlay>
                </div>
            }
        </VikingClickerContextConsumer>
    );
};
