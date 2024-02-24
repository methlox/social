import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navbarItems } from '../../utils/constants';
import { Button } from '../../utils/styles/button';
import { Navbar, NavbarItem } from '../../utils/styles/navbar';

export const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
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
        {/* <Button
          size="sm"
          flex={true}
          variant="primary"
          onClick={() => setShowModal(true)}
        >
          <AiOutlineUserAdd size={24} />
          <span>Add Friend</span>
        </Button> */}
      </Navbar>
    </>
  );
};
