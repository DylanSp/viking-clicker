import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./PanelOverlay.css";

export interface PanelOverlayProps {
    isOverlayHidden: boolean;
    children: JSX.Element;
    overlayImage: string;
}

export const PanelOverlay: FunctionComponent<PanelOverlayProps> = (props) => {
    return (
        <>
            <CSSTransition in={props.isOverlayHidden} timeout={2000} unmountOnExit={false} classNames="panel">
                <div style={{ textAlign: "center", height: "100%", width: "100%", position: "absolute" }}>
                    {props.children}
                </div>
            </CSSTransition>
            <CSSTransition in={!props.isOverlayHidden} timeout={2000} unmountOnExit={true} classNames="overlay">
                <div style={{ height: "100%", width: "100%", backgroundColor: "black", position: "absolute" }}>
                    <img
                        src={props.overlayImage}
                        style={{
                            filter: "invert(100%)",
                            width: "75%",
                            position: "absolute",
                            margin: "auto",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }}
                    />
                </div>
            </CSSTransition>
        </>
    );
};
