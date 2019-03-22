import * as React from "react";
import { FunctionComponent } from "react";
import { UpgradeDisplay } from "./UpgradeDisplay";

export const UpgradePanel: FunctionComponent = () => {
    return (
        <>
            Upgrades
            <UpgradeDisplay />
        </>
    );
};
