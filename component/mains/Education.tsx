import {StyledMain, StyledH3, StyledP, StyledUl, StyledLi, NavLink} from '../Styles/Styles.tsx';

export default function Edu(){
    return(
        <StyledMain id="main-content">
            <StyledH3>Education</StyledH3>
            <StyledH3><NavLink to={"https://www.bu.edu/cas/"}>Boston University College of Arts & Sciences</NavLink></StyledH3>
            <StyledP>Boston, MA — Expected May 2026</StyledP>
            <StyledUl>
                <StyledLi>Bachelor of Computer Science and Economics</StyledLi>
                <StyledLi>Coursework: Data Structures, Algorithms, Economics, AI</StyledLi>
                <StyledLi>Skills: Python, Java, Data Analysis, Professional Writing</StyledLi>
            </StyledUl>
        </StyledMain>
    )
}