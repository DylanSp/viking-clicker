import * as React from "react";
import { FunctionComponent } from "react";
import { ActionClicker } from "./ActionClicker";

export const Actions: FunctionComponent = () => {
    return (
        <ul>
            {["Plow", "Row"].map((actionName, index) =>
                <li key={index}>
                    <ActionClicker actionName={actionName} />
                </li>
            )}
        </ul>
    );
};
