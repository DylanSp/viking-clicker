import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { FoodUpgrade, foodUpgrades } from "../game/FoodUpgrades";
import { VikingClickerContextConsumer } from "./VikingClicker";

export const UpgradeDisplay: FunctionComponent = () => {

    return (
        <VikingClickerContextConsumer>
            {(context) => {
                const availableUpgrades = foodUpgrades.filter((upgrade) => !context.purchasedFoodUpgrades.includes(upgrade));

                return (
                    <List>
                        {availableUpgrades.map((upgrade, index) => (
                            <ListItem style={{borderBottom: "1px solid gray"}} key={index}>
                                <Tooltip title={upgrade.description} placement="right">
                                    <Button
                                        variant="outlined"
                                        onClick={() => context.purchaseFoodUpgrade(upgrade)}
                                        disabled={context.purchasedFoodUpgrades.includes(upgrade)}
                                        style={{
                                            whiteSpace: "nowrap",
                                            paddingLeft: "1.5rem",
                                            paddingRight: "1.5rem"
                                        }}
                                    >
                                        {upgrade.name}
                                    </Button>
                                </Tooltip>
                                <div style={{width: "inherit", textAlign: "right"}}>
                                    <Typography>
                                        {displayCost(upgrade)}
                                    </Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                );
            }}
        </VikingClickerContextConsumer>
    );
};

const displayCost = (upgrade: FoodUpgrade): string => {
    const costText: string[] = [];

    if (upgrade.cost.food > 0) {
        costText.push(`${upgrade.cost.food} Food`);
    }

    if (upgrade.cost.wood > 0) {
        costText.push(`${upgrade.cost.wood} Wood`);
    }

    if (upgrade.cost.gold > 0) {
        costText.push(`${upgrade.cost.gold} Gold`);
    }

    return costText.join(", ");
};
