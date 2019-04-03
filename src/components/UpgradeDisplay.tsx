import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { FoodUpgrade, foodUpgrades } from "../game/FoodUpgrades";
import { Resources } from "../game/Resources";
import { WoodUpgrade, woodUpgrades } from "../game/WoodUpgrades";
import { VikingClickerContext, VikingClickerContextConsumer } from "./VikingClicker";

export const UpgradeDisplay: FunctionComponent = () => {

    return (
        <VikingClickerContextConsumer>
            {(context: VikingClickerContext) => {
                const availableFoodUpgrades = foodUpgrades.filter((upgrade) => !context.purchasedFoodUpgrades.includes(upgrade));
                const availableWoodUpgrades = woodUpgrades.filter((upgrade) => !context.purchasedWoodUpgrades.includes(upgrade));

                return (
                    <List>
                        {availableFoodUpgrades.map((upgrade, index) => (
                            <ListItem style={{borderBottom: "1px solid gray"}} key={index}>
                                <Tooltip title={upgrade.description} placement="right">
                                    <div>{/* need this div so tooltip works even when button is disabled */}
                                        <Button
                                            variant="outlined"
                                            onClick={() => context.purchaseFoodUpgrade(upgrade)}
                                            disabled={!hasEnoughResources(upgrade, context.resources)}
                                            style={{
                                                whiteSpace: "nowrap",
                                                paddingLeft: "1.5rem",
                                                paddingRight: "1.5rem"
                                            }}
                                        >
                                            {upgrade.name}
                                        </Button>
                                    </div>
                                </Tooltip>
                                <div style={{width: "inherit", textAlign: "right"}}>
                                    <Typography>
                                        {displayCost(upgrade)}
                                    </Typography>
                                </div>
                            </ListItem>
                        ))}
                        {availableWoodUpgrades.map((upgrade, index) => (
                            <ListItem style={{borderBottom: "1px solid gray"}} key={index}>
                                <Tooltip title={upgrade.description} placement="right">
                                    <div>{/* need this div so tooltip works even when button is disabled */}
                                        <Button
                                            variant="outlined"
                                            onClick={() => context.purchaseWoodUpgrade(upgrade)}
                                            disabled={!hasEnoughResources(upgrade, context.resources)}
                                            style={{
                                                whiteSpace: "nowrap",
                                                paddingLeft: "1.5rem",
                                                paddingRight: "1.5rem"
                                            }}
                                        >
                                            {upgrade.name}
                                        </Button>
                                    </div>
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

const displayCost = (upgrade: FoodUpgrade | WoodUpgrade): string => {
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

const hasEnoughResources = (upgrade: FoodUpgrade | WoodUpgrade, resources: Resources): boolean => {
    return upgrade.cost.food <= resources.food
        && upgrade.cost.wood <= resources.wood
        && upgrade.cost.gold <= resources.gold;
};
