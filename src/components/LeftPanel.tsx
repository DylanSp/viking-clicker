import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { FunctionComponent } from "react";
import { FoodUpgrade } from "../game/FoodUpgrades";
import { ServantsPanel } from "./ServantsPanel";
import { UpgradePanel } from "./UpgradePanel";

export interface LeftPanelProps {
    purchasedFoodUpgrades: FoodUpgrade[];
    purchaseFoodUpgrade: (upgrade: FoodUpgrade) => void;
}

export const LeftPanel: FunctionComponent<LeftPanelProps> = (props) => {
    return (
        <Grid
            container={true}
            direction="column"
            style={{
                borderRight: "1px solid black",
                height: "100vh"
            }}
        >
            <Grid
                item={true}
                xs={6}
                style={{
                    borderBottom: "1px solid black",
                    maxWidth: "100%"
                }}
            >
                <UpgradePanel {...props} />
            </Grid>
            <Grid item={true} xs={6} style={{ maxWidth: "100%" }}>
                <ServantsPanel />
            </Grid>
        </Grid>
    );
};
