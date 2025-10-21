import styled from "styled-components";
import {Link} from "react-router";
// If you use React Router, you can import Link and style it:
// import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    width: 100%;
    background: #000;
`;

export const StyledH3 = styled.h3`
    color: blue;
`;

export const StyledH1 = styled.h1`
color: deepskyblue;
`;

export const StyledFooter = styled.footer`
    width: 100%;
    background: #000;
`;

export const StyledImg = styled.img`
    height: 250px;
    width: 250px;
    margin: 10px;
`;

export const StyledP = styled.p`
    color: deepskyblue;
`;

export const StyledLi = styled.li`
    display: inline;
    background-color: deepskyblue;
    padding: 10px;
    border: 5px lightskyblue;
    border-radius: 10px;
    margin: 1% 0;
`;



export const StyledPageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    text-align: center;
`;

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const StyledNav = styled.nav`
    color: white;
    padding: 5px;
    width: 20%;
    background: lightgray;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const NavList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
    }
`;

export const NavItem = styled.li`
    display: inline;
    background-color: deepskyblue;
    padding: 10px;
    border: 5px solid lightskyblue;
    border-radius: 10px;
    margin: 10% 0;

    @media screen and (max-width: 1000px) {
        border: 10px solid lightskyblue;
        border-radius: 5px;
        margin: 5% 0;
    }
`;

export const NavLink = styled(Link)`
    color: aquamarine;
    text-decoration: none;
    &:hover {text-decoration: underline;}
`;

export const StyledMain = styled.main`
    height: 100vh;
    background: lightgray;
    width: 80%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const Styledtable = styled.table `{
    margin: auto;
}`;