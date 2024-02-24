import { useLocation, useNavigate } from 'react-router-dom';
import { navbarItems } from '../../utils/constants';
import { Navbar, NavbarItem } from '../../utils/styles/navbar';
import './styles.scss'

export const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        <div className="navLinks">
          {navbarItems.map((item) => (
            <NavbarItem
              key={item.id}
              active={pathname === item.pathname}
              onClick={() => navigate(item.pathname)}
            >
              {item.label}
            </NavbarItem>
          ))}
        </div>
      </Navbar>
    </>
  );
};
