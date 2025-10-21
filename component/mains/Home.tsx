import surf from '../../sourcesimg/human-surfboard.jpg';
import {StyledMain ,StyledP, StyledImg, StyledH3} from '../Styles/Styles.tsx';


export default function Home(){
    return (
        <StyledMain>
            <StyledH3>Home</StyledH3>
            <StyledImg src={surf} alt="a man using another man as a surfboard"/>
            <StyledP>Hi! My name is Max, welcome to my website! I am currently an undergraduate student at Boston
                University <br/>
                pursuing a degree in Computer Science and Economics. I have strong interests in data analysis,
                quantitative <br/>
                trading, and artificial intelligence, and I am eager to apply my technical and analytical skills to
                solve real-world problems.<br/>
                I have gained professional experience through internships in market research, robotics, and quantitative
                trading, <br/>
                where I learned to integrate data science tools with financial and engineering applications. I also
                enjoy working <br/>
                on team-based projects and have developed leadership experience as the captain of my high school
                robotics team. <br/>
                Looking forward, I aim to further my academic and professional development in finance, data
                science, <br/>
                or technology-driven research, while continuing to build my expertise in quantitative methods and
                applied computer science.</StyledP>
        </StyledMain>
    )
}