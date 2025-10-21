import Nav from "./Nav.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Intern from "./mains/Internship.tsx";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Education.tsx";
import Ach from "./mains/Achievements.tsx";
import Doc from "./mains/Documents.tsx";
import Ref from "./mains/Reference.tsx";
import Pro from "./mains/Project.tsx";
import {Route, Routes} from "react-router";
import {StyledPageWrapper, StyledContainer} from "./Styles/Styles.tsx";



export default function Root(){
    return (
        <>
            <StyledPageWrapper>
            <Header/>
            <StyledContainer>
            <Nav/>
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/education`} element={<Edu/>}/>
                <Route path={`/internships`} element={<Intern/>}/>
                <Route path={`/achievements`} element={<Ach/>}/>
                <Route path={`/documents`} element={<Doc/>}/>
                <Route path={'/reference'} element={<Ref/>}/>
                <Route path={`/project`} element={<Pro/>}/>
            </Routes>
            </StyledContainer>
            <Footer/>
            </StyledPageWrapper>
        </>
    );
}