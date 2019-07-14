import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { VikingClickerContext, VikingClickerContextConsumer } from "./VikingClicker";

export const ResourceDisplay: FunctionComponent = () => {
    return (
        <VikingClickerContextConsumer>
            {(context: VikingClickerContext) =>
                <>
                    <Typography variant="h5">
                        Resources:
                    </Typography>
                    <List>
                        {displayFood(context.game.resources.food)}
                        {displayWood(context.game.resources.wood)}
                        {displayGold(context.game.resources.gold)}
                    </List>
                </>
            }
        </VikingClickerContextConsumer>
    );
};

// always display food, even if 0
const displayFood = (foodAmount: number): JSX.Element => {
    return (
        <ListItem alignItems="flex-start">
            <Typography style={{margin: "0 auto"}}>
                Food: {foodAmount}
            </Typography>
        </ListItem>
    );
};

// always display wood, even if 0
const displayWood = (woodAmount: number): JSX.Element => {
    return (
        <ListItem alignItems="flex-start">
            <Typography style={{margin: "0 auto"}}>
                Wood: {woodAmount}
            </Typography>
        </ListItem>
    );
};

const displayGold = (goldAmount: number): JSX.Element => {
    if (goldAmount === 0) {
        return <></>;
    }

    return (
        <ListItem alignItems="flex-start">
            <Typography style={{margin: "0 auto"}}>
                Gold: {goldAmount}
            </Typography>
        </ListItem>
    );
};
