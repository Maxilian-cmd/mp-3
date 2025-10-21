import {StyledHeader, StyledP, StyledH1} from './Styles/Styles.tsx';

export default function Header(){
    return(
        <StyledHeader>
            <StyledH1>Max Huang's online resume</StyledH1>
            <StyledP><em>An online display of my achievements</em></StyledP>
        </StyledHeader>
    )
}