import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 12px;
  background-color: white;
  color: #111;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  padding: 1em;
  line-height: 0.5rem;
  height: 4rem;
  width: 220px;
  margin: 2rem 0 2rem;
  text-align: left;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
  -webkit-font-feature-settings: "calt" 1;
  font-feature-settings: "calt" 1;
  transition: all 0.1s ease-out;
  text-align: center;

  &:hover {
    color: #000;
    background-color: #fff;
    -webkit-transform: scale(1.025);
    transform: scale(1.025);
    transition: all 0.1s ease-out;
  }
`;

const AddButton = props => {
  return <StyledButton onClick={props.addItem}>{props.label}</StyledButton>;
};

export default AddButton;
