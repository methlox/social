import styled, { css } from 'styled-components';
import {
  NavbarItemProps
} from '../styleTypes';

export const Navbar = styled.nav`
  display: flex;
  font-size: 17px;
  padding: 48px 60px;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #30303035;
  justify-content: space-between;
  & .navLinks {
    display: flex;
    align-items: center;
    font: sfHeavy;
    color: #000000;
  }
  @media (min-width: 500px) {
    & .navLinks {
      margin-left: 12rem;
      gap: 20px;
      font-size: 1.3rem;
    }
  }
  @media (min-width: 767px) {
    & .navLinks {
      margin-left: 12rem;
      gap: 20px;
      font-size: 1.3rem;
    }
  }
  @media (min-width: 1200px) {
    & .navLinks {
      margin-left: 1000px;
      gap: 80px;
      font-size: 1.5rem;  nb
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