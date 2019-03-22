import * as React from "react";
import { FunctionComponent } from "react";
import { MainPanel } from "./MainPanel";
import { RaidingPanel } from "./RaidingPanel";
import { UpgradePanel } from "./UpgradePanel";

export const VikingClicker: FunctionComponent = () => {
    return (
        <>
            <UpgradePanel />
            <MainPanel />
            <RaidingPanel />
        </>
    );
};
