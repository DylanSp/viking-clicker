import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
                        Total hired servants: {context.servants.farmhands}
                    </Typography>
                </>
            }
        </VikingClickerContextConsumer>
    );
};
