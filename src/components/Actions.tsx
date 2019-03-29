import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import { FunctionComponent } from "react";
import { ActionClicker } from "./ActionClicker";

export interface ActionsProps {
    handlePlow: () => void;
    handleChop: () => void;
}

export const Actions: FunctionComponent<ActionsProps> = (props) => {
    return (
        <div
            style={{
                justifyContent: "center",
                margin: "auto",
                padding: "12.5vh 0",
                width: "fit-content"
            }}
        >
            <List>
                <ListItem>
                    <ActionClicker actionName="Plow Field" handleAction={props.handlePlow} />
                </ListItem>
                <ListItem>
                    <ActionClicker actionName="Chop Wood" handleAction={props.handleChop} />
                </ListItem>
            </List>
        </div>
    );
};
