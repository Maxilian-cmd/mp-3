import {StyledMain, StyledP, StyledH3, StyledUl, StyledLi} from '../Styles/Styles.tsx';

export default function Intern(){
    return(
        <StyledMain id="main-content">
            <StyledH3>Internships</StyledH3>
            <br/>
            <StyledP>Longest Market Researcher Junior Sales Analyst</StyledP>
            <StyledP><em>Guangzhou, China — Jun 2023 – Jul 2023</em></StyledP>
            <StyledUl>
                <StyledLi>Written an analytical study of the Doppler Blood Tester market and competitive products.</StyledLi>
                <StyledLi>Supported planning and deployment of key rehabilitation products to distributors.</StyledLi>
            </StyledUl>
            <br/>
            <StyledP>Leap Robotics (Chengdu) Co., Ltd. — Project Management Assistant</StyledP>
            <StyledP><em>Chengdu, China — Jul 2024 – Aug 2024</em></StyledP>
            <StyledUl>
                <StyledLi>Self-learned NumPy & PyTorch for car plate recognition and terrain detection.</StyledLi>
                <StyledLi>Built a text recognition model for drone plate/terrain detection.</StyledLi>
                <StyledLi>Attended test flights and recalibrated drone motor speeds.</StyledLi>
            </StyledUl>
            <br/>
            <StyledP>Yuanta Securities (Taipei) Co., Ltd. — Quantitative Trading Dept. Research Associate</StyledP>
            <StyledP><em>Taipei, Taiwan — Jul 2025 – Aug 2025</em></StyledP>
            <StyledUl>
                <StyledLi>Processed raw options market data to construct CDFs and PDFs.</StyledLi>
                <StyledLi>Used Python to dynamically visualize put execution probabilities across strikes/maturities.</StyledLi>
                <StyledLi>Developed RAG infrastructure integrating Neo4j knowledge graph & Qdrant vector DB for scenario
                    prediction.
                </StyledLi>
            </StyledUl>
        </StyledMain>
    )
}