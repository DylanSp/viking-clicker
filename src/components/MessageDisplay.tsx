import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { VikingClickerContext, VikingClickerContextConsumer } from "./VikingClicker";

export const MessageDisplay: FunctionComponent = () => {
    return (
        <VikingClickerContextConsumer>
            {(context: VikingClickerContext) => (
                <List>
                    {context.messages.slice(-5).map((message, index) => (
                        <ListItem key={index}>
                            <Typography>
                                {message}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            )}
        </VikingClickerContextConsumer>
    );
};
