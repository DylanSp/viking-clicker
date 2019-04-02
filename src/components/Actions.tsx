import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import * as React from "react";
import { FunctionComponent } from "react";
import { ActionClicker } from "./ActionClicker";
import { VikingClickerContext, VikingClickerContextConsumer } from "./VikingClicker";

export const Actions: FunctionComponent = () => {
    return (
        <VikingClickerContextConsumer>
            {(context: VikingClickerContext) =>
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
                            <ActionClicker actionName="Plow Field" handleAction={context.handlePlow} />
                        </ListItem>
                        <ListItem>
                            <ActionClicker actionName="Chop Wood" handleAction={context.handleChop} />
                        </ListItem>
                    </List>
                </div>
            }
        </VikingClickerContextConsumer>
    );
};
