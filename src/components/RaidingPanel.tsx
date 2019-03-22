import * as React from "react";
import { FunctionComponent } from "react";
import { DistanceDisplay } from "./DistanceDisplay";
import { TargetDisplay } from "./TargetDisplay";

export const RaidingPanel: FunctionComponent = () => {
    return (
        <>
            Raiding
            <br />
            <DistanceDisplay />
            <TargetDisplay />
        </>
    );
};
