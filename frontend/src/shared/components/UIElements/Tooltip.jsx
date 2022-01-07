import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

// import "./Tooltip.css";

const fadeIn = keyframes`
0% {opacity: 0;}
100%{
    opacity: 1;
    transform: translateY(-2px);
  }
`;
const shake = keyframes`
0% { 
    transform: rotate(2deg);
  }
  50% {
   transform: rotate(-3deg);
  }
  70% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const Span = styled.span.attrs((props) => ({
  left: typeof(props.left)==="number" ? props.left : "unset",
  right: typeof(props.right)==="number" ? props.right : "unset",
  width: typeof(props.width)==="number" ? props.width : "110px",
  height: typeof(props.height)==="number" ? props.height : "35px",
  top: typeof(props.top)==="number" ? props.top : "unset",
  bulbOffset: props.bulbOffset || props.x_pos + 10,
  bgColor: props.bgColor || "transparent",
  textColor: props.textColor || "#000",
  renderDelay: props.renderDelay || "0s",
}))`

  & {
    --top: ${(props) => props.top !== "unset" ? props.top + "px" : "unset"};
    --left: ${(props) => props.left !== "unset" ? props.left + "px" : "unset"};
    --right: ${(props) => props.right !== "unset" ? props.right + "px" : "unset"};
    --bg-color: ${(props) => props.bgColor};
    --text-color: ${(props) => props.textColor};
    --height: ${(props) => props.height}px;
    --width: ${(props) => props.width}px;
    --render-delay: ${(props) => props.renderDelay}s;
    --shake-delay: ${(props) => props.renderDelay+.6}s;

    z-index: 10;  
  }
  
  opacity: 0;
  position: absolute;
  top: var(--top);
  left : var(--left);
  right : var(--right);
  background-color: var(--bg-color);
  color: var(--text-color);
  width: var(--width);
  min-height: var(--height);
  overflow-wrap: break-word;
  font-size: 13px;
  font-weight: 300;
  padding: 10px;
  border-radius: 5px;
  border-width: 1px;
  letter-spacing: 1px;
  transform: translateY(20px);

  animation: ${fadeIn} 400ms ease-in-out var(--render-delay) forwards, ${shake} 300ms ease-in-out var(--shake-delay) forwards;

  &::before {
  }

  &::after {
    opacity: 0;

    position: absolute;
    content: "";

    border-width: 10px 8px 0 8px;
    border-style: solid;
    border-color: var(--bg-color) transparent transparent transparent;
    bottom: -10px;
    left: clamp(-1px, ${(props) => props.bulbOffset}px, (var(--width) - 15px));
    
    transform: translateY(20px);

    animation: ${fadeIn} 300ms ease-in-out var(--render-delay) forwards;
  }
`;

const Tooltip = ({ left, right, width, top, bulbOffset=35, renderDelay=6, children}) => (
  <div id="anim">
    <Span      
      left={left}
      right={right}
      width={width}
      top={top}
      bgColor="#f1f1f1"
      textColor="#000"
      bulbOffset={bulbOffset}
      renderDelay={renderDelay}
    >
      {children}
    </Span>
  </div>
);

export default Tooltip;
