import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

import MoonIcon from "public/icons/MoonIcon";
import SunIcon from "public/icons/SunIcon";

const Button = styled.button`
  background: ${({ theme }) => theme.togglerButtonBackgroundColor};
  transition: all 0.5s linear;
  border: 0;
  outline: none;
  padding: 0 1em;
  height: auto;
  width: 4em;
  margin: 2em;
  border-radius: 2em;
`;

const Switch = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.togglerSwitchBackground};
  transform: ${({ theme }) => theme.togglerSwitchPosition};
  transition: all 0.5s;
  cursor: pointer;
  width: 2em;
  height: 2em;
  @media (max-width: 1000px) {
    transform: ${({ theme }) => theme.togglerPositionMobile};
    padding: 2.5px;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      <Switch></Switch>
    </Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
