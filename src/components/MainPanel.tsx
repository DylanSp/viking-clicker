import * as React from "react";
import { FunctionComponent } from "react";
import { Actions } from "./Actions";
import { ResourceDisplay } from "./ResourceDisplay";
import { StatusDescription } from "./StatusDescription";

export const MainPanel: FunctionComponent = () => {
    return (
        <div style={{textAlign: "center"}}>
            <StatusDescription />
            <Actions />
            <ResourceDisplay />
        </div>
    );
};
