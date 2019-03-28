import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import * as React from "react";
import { FunctionComponent } from "react";
import { FoodUpgrade, foodUpgrades } from "../game/FoodUpgrades";

export interface UpgradeDisplayProps {
    purchasedFoodUpgrades: FoodUpgrade[];
    purchaseFoodUpgrade: (upgrade: FoodUpgrade) => void;
}

export const UpgradeDisplay: FunctionComponent<UpgradeDisplayProps> = (props) => {
    return (
        <List>
            {foodUpgrades.map((upgrade) => (
                <ListItem>
                    <Button
                        variant="outlined"
                        onClick={() => props.purchaseFoodUpgrade(upgrade)}
                        disabled={props.purchasedFoodUpgrades.includes(upgrade)}
                    >
                        {upgrade.name}
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};
