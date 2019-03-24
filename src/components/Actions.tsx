import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import { FunctionComponent } from "react";
import { ActionClicker } from "./ActionClicker";

export const Actions: FunctionComponent = () => {
    return (
        <Paper
            style={{
                justifyContent: "center",
                margin: "auto",
                width: "fit-content"
            }}
        >
            <List>
                {["Plow", "Row"].map((actionName, index) =>
                    <ListItem key={index}>
                        <ActionClicker actionName={actionName} />
                    </ListItem>
                )}
            </List>
        </Paper>
    );
};
