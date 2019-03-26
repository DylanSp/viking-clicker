import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { Resources } from "../Resources";

export interface ResourceDisplayProps {
    resources: Resources;
}

export const ResourceDisplay: FunctionComponent<ResourceDisplayProps> = (props) => {
    return (
        <>
            <Typography variant="h5">
                Resources:
            </Typography>
            <List>
                {displayFood(props.resources.food)}
                {displayWood(props.resources.wood)}
                {displayGold(props.resources.gold)}
            </List>
        </>
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
