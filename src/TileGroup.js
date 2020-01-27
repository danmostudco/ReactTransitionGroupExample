import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// ☝🏻
// wrap Styled Grid in Transition Group
// wrap individual items in CSS transition
// need to apply the styled to styled component

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 20px;

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }

  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`;

const TileGroup = props => {
  return (
    // if I wrapped StyledGrid in TransitionGroup or vice versa,
    // I got some odd results. cleanest way is to use the component prop
    // of transition group to have its behavior applied to StyledGrid
    // rather than wrapping in the JSX
    <TransitionGroup component={StyledGrid}>
      {props.items.map(item => (
        <CSSTransition key={item.id} timeout={300} classNames="transition">
          <Tile
            {...item}
            removeItem={() => {
              props.removeItem(item.id);
            }}
          ></Tile>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TileGroup;
