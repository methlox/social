import styled, { css } from 'styled-components';
import {
    NavbarItemProps
} from '../styleTypes';

export const Navbar = styled.nav`
  display: flex;
  font-size: 20px;
  padding: 48px 60px;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #30303035;
  justify-content: space-between;
  & .navLinks {
    display: flex;
    align-items: center;
    gap: 80px;
    margin-left: 1000px;
    font: sfHeavy;
    font-size: 1.5rem;
    color: #000000;
  }
  @media (max-width: 767px) {
    & .navLinks {
      margin-left: 12rem;
      gap: 20px;
      font-size: 1.3rem;
    }
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