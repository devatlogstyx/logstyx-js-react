// Trackable.js

import React from 'react';
const { cloneElement, isValidElement } = React;

const eventPropMap = {
    click: "onClick",
    doubleClick: "onDoubleClick",
    contextMenu: "onContextMenu",
    focus: "onFocus",
    blur: "onBlur",
    change: "onChange",
    input: "onInput",
    submit: "onSubmit",
    reset: "onReset",
    keyDown: "onKeyDown",
    keyUp: "onKeyUp",
    keyPress: "onKeyPress",
    mouseDown: "onMouseDown",
    mouseUp: "onMouseUp",
    mouseMove: "onMouseMove",
    mouseEnter: "onMouseEnter",
    mouseLeave: "onMouseLeave",
    mouseOver: "onMouseOver",
    mouseOut: "onMouseOut",
    wheel: "onWheel",
    touchStart: "onTouchStart",
    touchMove: "onTouchMove",
    touchEnd: "onTouchEnd",
    drag: "onDrag",
    dragStart: "onDragStart",
    dragEnd: "onDragEnd",
    dragEnter: "onDragEnter",
    dragLeave: "onDragLeave",
    dragOver: "onDragOver",
    drop: "onDrop",
    scroll: "onScroll",
    animationStart: "onAnimationStart",
    animationEnd: "onAnimationEnd",
    animationIteration: "onAnimationIteration",
    transitionEnd: "onTransitionEnd",
    pointerDown: "onPointerDown",
    pointerUp: "onPointerUp",
    pointerMove: "onPointerMove",
    pointerEnter: "onPointerEnter",
    pointerLeave: "onPointerLeave",
    pointerOver: "onPointerOver",
    pointerOut: "onPointerOut",

};


const Trackable = ({ children, event, context = {}, data = {}, logger }) => {

    const targetProp = eventPropMap[event];

    if (!isValidElement(children) || !targetProp) return children;

    const existingHandler = children.props[targetProp];

    const wrappedHandler = (...args) => {
        logger.info({ ...context, ...data });

        if (typeof existingHandler === "function") {
            existingHandler(...args);
        }
    };

    return cloneElement(children, {
        [targetProp]: wrappedHandler,
    });
};

export default Trackable
