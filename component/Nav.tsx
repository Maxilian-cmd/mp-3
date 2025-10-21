import { StyledNav, NavList, NavItem, NavLink } from "./Styles/Styles.tsx";

export default function Nav(){
    return(
        <StyledNav>
            <NavList>
                <NavItem><NavLink to={`/`}>Home</NavLink></NavItem>
                <NavItem><NavLink to={`/education`}>Education</NavLink></NavItem>
                <NavItem><NavLink to={`/internships`}>Internships</NavLink></NavItem>
                <NavItem><NavLink to={`/achievements`}>Achievements</NavLink></NavItem>
                <NavItem><NavLink to={`/documents`}>Documents</NavLink></NavItem>
                <NavItem><NavLink to={`/Project`}>Projects</NavLink></NavItem>
            </NavList>
        </StyledNav>
    )
}