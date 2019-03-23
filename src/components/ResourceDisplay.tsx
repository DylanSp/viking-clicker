import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";

export const ResourceDisplay: FunctionComponent = () => {
    return (
        <>
            <Typography variant="h5">
                Resources:
            </Typography>
            <List>
                <ListItem alignItems="flex-start">
                    <Typography style={{margin: "0 auto"}}>
                        Food: 10
                    </Typography>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Typography style={{margin: "0 auto"}}>
                        Gold: 5
                    </Typography>
                </ListItem>
            </List>
        </>
    );
};
