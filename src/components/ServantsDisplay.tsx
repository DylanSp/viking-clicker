import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import * as React from "react";
import { FunctionComponent } from "react";
import { VikingClickerContext, VikingClickerContextConsumer } from "./VikingClicker";

export const ServantsDisplay: FunctionComponent = () => {
    return (
        <VikingClickerContextConsumer>
            {(context: VikingClickerContext) =>
                <>
                    <Button variant="outlined" onClick={context.hireServant}>
                        Hire: {context.servantCost} Food
                    </Button>
                    <Typography>
                        Total hired servants: {context.servants.farmhands + context.servants.woodcutters}
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography>
                                Farmhands:
                            </Typography>
                            <div style={{ width: "inherit", textAlign: "right" }}>
                                <Typography variant="title">
                                    <RemoveCircleOutlineIcon style={{ verticalAlign: "text-top" }} />
                                    {`  ${context.servants.farmhands}  `}
                                    <AddCircleOutlineIcon style={{ verticalAlign: "text-top" }} />
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Woodcutters:
                            </Typography>
                            <div style={{ width: "inherit", textAlign: "right" }}>
                                <Typography variant="title">
                                    <RemoveCircleOutlineIcon style={{ verticalAlign: "text-top" }} />
                                    {`  ${context.servants.woodcutters}  `}
                                    <AddCircleOutlineIcon style={{ verticalAlign: "text-top" }} />
                                </Typography>
                            </div>
                        </ListItem>
                    </List>
                </>
            }
        </VikingClickerContextConsumer>
    );
};
