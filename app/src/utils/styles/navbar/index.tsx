import styled, { css } from 'styled-components';
import {
    NavbarItemProps
} from '../styleTypes';

export const Navbar = styled.nav`
  display: flex;
  font-size: 20px;
  padding: 48px 60px;
  height: 150px;
  box-sizing: border-box;
  border-bottom: 1px solid #30303035;
  justify-content: space-between;
  & .navLinks {
    display: flex;
    align-items: center;
    gap: 80px;
  }
`;

export const NavbarItem = styled.span<NavbarItemProps>`
  cursor: pointer;
  ${({ active }) =>
        active &&
        css`
      text-decoration: underline;
      text-underline-offset: 14px;
    `}
`;