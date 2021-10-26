import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-betweeen;
  align-items: flex-start;
`;

const Header = () => {
  const [isRolling, setIsRolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsRolling(true);
    } else {
      setIsRolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isRolling]);

  return (
    <StyledHeader isRolling={isRolling}>
      Header
    </StyledHeader>
  );
};

export default Header;
