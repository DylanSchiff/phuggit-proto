///////////////////////////////////////////////////////////////////////////////////////////////////// 404

import styled from "styled-components";
const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    background-color: #111;
    color:#fff9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const App = () => {
    return <AppContainer>404</AppContainer>;
};
export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////// Main

// import styled from "styled-components";
// import TOOLS from "./components/TOOLDATA";
// import { useRef, useState } from "react";
// import PageSpan from "./components/page-span.component";
// import { DATASHEET } from "./components/DATASHEET";
// import Splash from "./components/splash/splash.component";
// import Cards from "./components/cards/cards.component";
// import AdditionalProjects from "./components/additional-projects/additional-projects.component";
// import ANotification from "./components/app-notification/app-notification";
// import Navibar from "./components/navigation/navigation.component";
// import Toolkit from "./components/toolkit/toolkit.component";
// import Laboratory from "./components/lab/laboratory.component";
// import Gists from "./components/gists/gists.component";

// const PageContainer = styled.div`
//     min-height: 100vh;
//     min-width: 100vw;
//     max-width: 100vw;
//     overflow: hidden;
//     overflow-y: auto;
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: center;
//     @media only screen and (min-width: 1000px) {
//         align-items: center;
//     }
// `;

// const AppBodySection = styled.div`
//     flex: 1;
//     width: 100%;
//     padding: 50px;
//     transition: 111ms linear;
//     display: flex;
//     flex-flow: column nowrap;
//     align-items: center;
//     justify-content: flex-start;
//     @media only screen and (max-width: 600px) {
//         padding: 25px;
//     }
// `;

// const BackToTopButton = styled.div`
//     z-index: 900;
//     position: fixed;
//     bottom: 10px;
//     right: 10px;
//     min-height: 30px;
//     min-width: 30px;
//     max-height: 30px;
//     max-width: 30px;
//     border-radius: 7.5px;
//     font-size: 10px;
//     color: var(--white-001);
//     font-weight: 600;
//     user-select: none;
//     transition: 111ms linear;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     &:active {
//         transform: scale(0.95);
//     }
// `;

// const LabButtons = styled.div`
//     margin: 40px 20px;
//     display: flex;
//     flex-flow: row wrap;
//     align-items: center;
//     justify-content: center;
// `;
// const LabButton = styled.div`
//     padding: 15px 20px;
//     margin: 10px;
//     outline: none;
//     border: none;
//     border-radius: 10px;
//     font-size: 20px;
//     font-weight: 500;
//     user-select: none;
//     transition: 111ms linear;
//     cursor: pointer;
//     border: 1px solid var(--fade-002);
//     @media only screen and (max-width: 1000px) {
//         font-size: 20px;
//     }
//     @media only screen and (max-width: 600px) {
//         font-size: 15px;
//     }
//     &:hover {
//         /* box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
//             0 3px 8px var(--fade-002);
//         color: var(--white-001);
//         background-color: var(--accent-003); */
//     }
// `;

// const App = () => {
//     const headsection = useRef(null);
//     window.scrolltoheadsection = () =>
//         window.scrollTo({
//             top: headsection.current.offsetTop - 50,
//             behavior: "smooth",
//         });

//     const appbodysection = useRef(null);
//     window.scrolltoappbodysection = () =>
//         window.scrollTo({
//             top: appbodysection.current.offsetTop - 20,
//             behavior: "smooth",
//         });

//     const additionalprojectssection = useRef(null);
//     window.scrolltoadditionalprojectssection = () => {
//         setAdditionalProjectsVisible(true);
//         window.scrollTo({
//             top: additionalprojectssection.current.offsetTop - 30,
//             behavior: "smooth",
//         });
//     };

//     window.scrolltolabsection = () => {
//         setLaboratoryVisible(true);
//         window.scrollTo({
//             top: additionalprojectssection.current.offsetTop - 30,
//             behavior: "smooth",
//         });
//     };

//     const [additionalProjectsVisible, setAdditionalProjectsVisible] =
//         useState(false);
//     const toggleAdditionalProjectsVisible = () =>
//         setAdditionalProjectsVisible(!additionalProjectsVisible);

//     const [laboratoryVisible, setLaboratoryVisible] = useState(false);
//     const toggleLaboratoryVisible = () =>
//         setLaboratoryVisible(!laboratoryVisible);

//     return (
//         <>
//             <Navibar />
//             <PageContainer ref={headsection}>
//                 <ANotification notificationData={DATASHEET.notificationData} />
//                 <Splash splashData={DATASHEET.splashData} />
//                 <AppBodySection ref={appbodysection}>
//                     <PageSpan
//                         fontsize="35px"
//                         lineheight="35px"
//                         fontweight="600"
//                         padding="30px 20px"
//                         fontsizeone="30px"
//                         lineheightone="30px"
//                         fontweightone="600"
//                         fontsizesix="25px"
//                         lineheightsix="25px"
//                         fontweightsix="600"
//                         textalignsix="center"
//                         spantext={DATASHEET.cardData.cardsHeader}
//                     />
//                     <Cards cards={DATASHEET.cardData.CARDS} />
//                     <AdditionalProjects
//                         additionalProjectsVisible={additionalProjectsVisible}
//                     />
//                     <LabButtons ref={additionalprojectssection}>
//                         <LabButton
//                             onClick={() => toggleAdditionalProjectsVisible()}
//                         >
//                             {additionalProjectsVisible
//                                 ? "Less Projects"
//                                 : "See Projects"}
//                         </LabButton>
//                         <LabButton onClick={() => toggleLaboratoryVisible()}>
//                             {laboratoryVisible ? "Close Lab" : "Laboratory"}
//                         </LabButton>
//                     </LabButtons>
//                     <Laboratory laboratoryVisible={laboratoryVisible} />
//                     <Toolkit toolData={DATASHEET.toolData} />
//                     <Gists />
//                     {/* <ContactBox /> */}
//                 </AppBodySection>
//                 <BackToTopButton onClick={() => window.scrolltoheadsection()}>
//                     TOP
//                 </BackToTopButton>
//             </PageContainer>
//         </>
//     );
// };
// export default App;
