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
                            <RemoveCircleOutlineIcon />
                            <Typography>
                                {context.servants.farmhands}
                            </Typography>
                            <AddCircleOutlineIcon />
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Woodcutters:
                            </Typography>
                            <RemoveCircleOutlineIcon />
                            <Typography>
                                {context.servants.woodcutters}
                            </Typography>
                            <AddCircleOutlineIcon />
                        </ListItem>
                    </List>
                </>
            }
        </VikingClickerContextConsumer>
    );
};
