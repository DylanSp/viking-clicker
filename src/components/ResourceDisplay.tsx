import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { VikingClickerContext, VikingClickerContextConsumer } from "./VikingClicker";

// TODO - revisit when to display different resources (start displaying food, wood, even if they're 0? add gold later?)
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

const displayFood = (foodAmount: number): JSX.Element => {
    if (foodAmount === 0) {
        return <></>;
    }

    return (
        <ListItem alignItems="flex-start">
            <Typography style={{margin: "0 auto"}}>
                Food: {foodAmount}
            </Typography>
        </ListItem>
    );
};

const displayWood = (woodAmount: number): JSX.Element => {
    if (woodAmount === 0) {
        return <></>;
    }

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
