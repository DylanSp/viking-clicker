import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { FoodUpgrade } from "../game/FoodUpgrades";
import { UpgradeDisplay } from "./UpgradeDisplay";

export interface UpgradePanelProps {
    purchasedFoodUpgrades: FoodUpgrade[];
    purchaseFoodUpgrade: (upgrade: FoodUpgrade) => void;
}

export const UpgradePanel: FunctionComponent<UpgradePanelProps> = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <Typography variant="h4">
                Upgrades
            </Typography>
            <UpgradeDisplay {...props} />
        </div>
    );
};
