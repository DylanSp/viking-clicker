import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import { FunctionComponent } from "react";
import { ActionClicker } from "./ActionClicker";

export interface ActionsProps {
    handlePlow: () => void;
}

export const Actions: FunctionComponent<ActionsProps> = (props) => {
    return (
        <Paper
            style={{
                justifyContent: "center",
                margin: "auto",
                width: "fit-content"
            }}
        >
            <List>
                <ListItem>
                    <ActionClicker actionName="plow" handleAction={props.handlePlow} />
                </ListItem>
            </List>
        </Paper>
    );
};
