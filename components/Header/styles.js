import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled components/StyledContainers";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const ScrollingMenu = styled.nav`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 1);
  transition: all 1s;
  .icon {
    animation: ${fadeIn} 1s;
    position: absolute;

    &-menu {
      right: -10%;
      top: 3%;
    }
    &-close {
      right: 7%;
      top: 4%;
      font-size: 50px;
      margin: 0;
    }
  }

  &.isHidden {
    transform: translateX(-100vw);
  }

  &.isActive {
    transform: translateX(0);
  }
`;

const MobileMenu = styled.nav`
  @media (min-width: 850px) {
    display: none;
  }
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 1);
  transition: all 1s;
  .icon {
    position: absolute;

    &-menu {
      right: -10%;
      top: 3%;
    }
    &-close {
      right: 7%;
      top: 4%;
      font-size: 50px;
      margin: 0;
    }
  }

  &.isHidden {
    transform: translateX(-100vw);
  }

  &.isActive {
    transform: translateX(0);
  }
`;

const StyledListMobile = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 700;
`;

const ContenedorMenu = styled.nav`
  width: 100%;
  color: #fff;
  background: ${({ theme }) => theme.backgroundMenu};
  padding: 0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
  transition: all 0.5s linear;
  @media (max-width: 850px) {
    display: none;
  }
`;

const CustomFlexContainer = styled(FlexContainer)`
  padding: 0 35px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  position: relative;
  width: fit-content;
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 0;
`;

const StyledNavItem = styled.li`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "1px solid yellow" : "0")};
  transition: all 1s;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundMenuHover};
  }

  @media (max-width: 700px) {
    margin-right: 15px;
  }
  @media (max-width: 450px) {
    margin-right: 5px;
  }
`;

const StyledNavItemConSubmenu = styled.input`
  visibility: hidden;
  position: absolute;
`;

const StyledSubList = styled.ul`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.backgroundMenu};
  /* color: ${({ theme }) => theme.text}; */
  font-weight: bolder;
  position: absolute;
  top: 63px;
  list-style: none;
  z-index: 3;
  display: ${(props) => (props.isParentChecked ? "block" : "none")};
`;

const StyledNavSubItem = styled.li`
  cursor: pointer;
  width: 150px;
  margin: 0;
  padding: 10px;
  border: 1px solid white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;
const Label = styled.label`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export {
  MobileMenu,
  Label,
  StyledNavSubItem,
  StyledSubList,
  StyledNavItemConSubmenu,
  StyledNavItem,
  StyledList,
  CustomFlexContainer,
  ContenedorMenu,
  StyledListMobile,
  ScrollingMenu,
};
