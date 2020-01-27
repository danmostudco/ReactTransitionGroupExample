import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  color: #fafafa;
  margin: 0px;

  .card-wrapper {
    position: relative;
  }
  .card {
    background-color: #846267;
    display: grid;
    grid-template-rows: 30px;
    justify-items: start;
    align-items: start;
    width: 100%;
    min-height: 300px;
    padding: 20px;
    border-radius: 8px;
    background-image: linear-gradient(
      135deg,
      hsla(0, 0%, 100%, 0.6),
      hsla(0, 0%, 100%, 0.1)
    );
  }
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Inter, sans-serif;
    color: #18171d;
    font-size: 24px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: -1px;
    text-transform: capitalize;
  }
  h6 {
    margin-top: 0px;
    margin-bottom: 10px;
    opacity: 0.4;
    font-family: Inter, sans-serif;
    color: #18171d;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .card-pill {
    left: 0px;
    right: auto;
    bottom: 0px;
    display: flex;
    overflow: hidden;
    width: 100px;
    opacity: 0.4;
    font-family: Inter, sans-serif;
    color: #000;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    justify-self: start;
    align-self: end;
  }
`;

const Tile = props => {
  return (
    <StyledTile
      key={props.id}
      className="card-wrapper"
      onClick={props.removeItem}
    >
      <div className="card">
        <h6>{props.subtitle}</h6>
        <h4>{props.title}</h4>
        <div className="card-pill">{props.readTime} min</div>
      </div>
    </StyledTile>
  );
};

export default Tile;
