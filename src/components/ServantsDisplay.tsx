import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import * as React from "react";
import { FunctionComponent } from "react";
import { VikingClickerContext, VikingClickerContextConsumer } from "./VikingClicker";

// TODO - refactor into multiple components?
export const ServantsDisplay: FunctionComponent = () => {
    const disabledIconOpacity = 0.3;

    return (
        <VikingClickerContextConsumer>
            {(context: VikingClickerContext) =>
                <>
                    <Button variant="outlined" onClick={context.hireServant}>
                        Hire: {context.servantCost} Food
                    </Button>
                    <Typography variant="h6">
                        Total hired servants: {context.servants.unassigned + context.servants.farmhands + context.servants.woodcutters}
                    </Typography>
                    <List>
                        <ListItem style={{ display: "block", textAlign: "center" }}>
                            <Typography variant="h6">
                                Idle servants: {context.servants.unassigned}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h6">
                                Farmhands:
                            </Typography>
                            <div style={{ width: "inherit", textAlign: "right" }}>
                                <Typography variant="h6">
                                    <RemoveCircleOutlineIcon
                                        onClick={context.unassignFarmhand}
                                        style={{
                                            opacity: context.servants.farmhands > 0 ? 1 : disabledIconOpacity,
                                            verticalAlign: "text-top"
                                        }}
                                    />
                                    {`  ${context.servants.farmhands}  `}
                                    <AddCircleOutlineIcon
                                        onClick={context.assignFarmhand}
                                        style={{
                                            opacity: context.servants.unassigned > 0 ? 1 : disabledIconOpacity,
                                            verticalAlign: "text-top"
                                        }}
                                    />
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h6">
                                Woodcutters:
                            </Typography>
                            <div style={{ width: "inherit", textAlign: "right" }}>
                                <Typography variant="h6">
                                    <RemoveCircleOutlineIcon
                                        onClick={context.unassignWoodcutter}
                                        style={{
                                            opacity: context.servants.woodcutters > 0 ? 1 : disabledIconOpacity,
                                            verticalAlign: "text-top"
                                        }}
                                    />
                                    {`  ${context.servants.woodcutters}  `}
                                    <AddCircleOutlineIcon
                                        onClick={context.assignWoodcutter}
                                        style={{
                                            opacity: context.servants.unassigned > 0 ? 1 : disabledIconOpacity,
                                            verticalAlign: "text-top"
                                        }}
                                    />
                                </Typography>
                            </div>
                        </ListItem>
                    </List>
                </>
            }
        </VikingClickerContextConsumer>
    );
};
