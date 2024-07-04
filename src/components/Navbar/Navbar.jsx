import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Nav, MenuItem, SubMenu, SubMenuItem } from "./navbar-css";

const Navbar = () => {
  const [visibleSubMenuIndex, setVisibleSubMenuIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setVisibleSubMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setVisibleSubMenuIndex(null);
  };

  return (
    <Nav>
      <MenuItem>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </MenuItem>
      <MenuItem
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        Ensaios
        <SubMenu visible={visibleSubMenuIndex === 0}>
          <SubMenuItem>
            <NavLink to="/eventos" activeClassName="active">
              Eventos
            </NavLink>
          </SubMenuItem>
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
      <MenuItem
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        Ensaios
        <SubMenu visible={visibleSubMenuIndex === 1}>
          <SubMenuItem>
            <NavLink to="/aniversario" activeClassName="active">
              Aniversario
            </NavLink>
          </SubMenuItem>
          <SubMenuItem>
            <NavLink to="/preaniversario" activeClassName="active">
              Pré Aniversario
            </NavLink>
          </SubMenuItem>
          <SubMenuItem>
            <NavLink to="/smash-the-cake" activeClassName="active">
              Smash The Cake
            </NavLink>
          </SubMenuItem>
          <SubMenuItem>
            <NavLink to="/smash-the-fruit" activeClassName="active">
              Smash The Fruit
            </NavLink>
          </SubMenuItem>
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <NavLink to="/batizado" activeClassName="active">
          Batizado
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
