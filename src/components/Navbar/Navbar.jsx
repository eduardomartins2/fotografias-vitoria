import { useState } from 'react';
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
                    <SubMenuItem>Familia</SubMenuItem>
                    <SubMenuItem>Feminino</SubMenuItem>
                    <SubMenuItem>Gestante</SubMenuItem>
                    <SubMenuItem>Infantil</SubMenuItem>
                </SubMenu>
            </MenuItem>
            <MenuItem>Aniversario</MenuItem>
            <MenuItem>Batizado</MenuItem>
            <MenuItem>Eventos</MenuItem>
            <MenuItem>Newborn</MenuItem>
        </Nav>
    );
};

export default Navbar;