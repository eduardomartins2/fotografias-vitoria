import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Nav, MenuItem, SubMenu, SubMenuItem } from "./navbar-css";

const Navbar = () => {
  const [subNavVisible, setSubNavVisible] = useState(false);

  const handleMouseEnter = () => {
    setSubNavVisible(true);
  };

  const handleMouseLeave = () => {
    setSubNavVisible(false);
  };

  return (
    <Nav>
      <MenuItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Ensaios
        <SubMenu visible={subNavVisible}>
          <SubMenuItem>
            <NavLink to="/familia" activeClassName="active">
              Família
            </NavLink>
          </SubMenuItem>
          <SubMenuItem>
            <NavLink to="/feminino" activeClassName="active">
              Feminino
            </NavLink>
          </SubMenuItem>
          <SubMenuItem>
            <NavLink to="/gestante" activeClassName="active">
              Gestante
            </NavLink>
          </SubMenuItem>
          <SubMenuItem>
            <NavLink to="/infantil" activeClassName="active">
              Infantil
            </NavLink>
          </SubMenuItem>
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <NavLink to="/aniversario" activeClassName="active">
          Aniversário
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/batizado" activeClassName="active">
          Batizado
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/eventos" activeClassName="active">
          Eventos
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/newborn" activeClassName="active">
          Newborn
        </NavLink>
      </MenuItem>
    </Nav>
  );
};

export default Navbar;
