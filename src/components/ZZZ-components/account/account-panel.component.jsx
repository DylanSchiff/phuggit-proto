// import styled from "styled-components";
// import AccountOptions from "./panel-account-options.component";
// import SignInOptions from "./panel-signin-options.component";
// const AccountPanelContainer = styled.div.attrs((props) => ({
//     style: {
//         display: props.display,
//     },
// }))`
//     position: absolute;
//     z-index: 999;
//     top: 70px;
//     right: 20px;
//     padding: 20px;
//     background-color: var(--main-001);
//     box-shadow: var(--shade-001);
// `;
// const AccountPanel = ({
//     currentAuth,
//     currentDocs,
//     currentColor,
//     isAccountPanelOpen,
// }) => {
//     return (
//         <AccountPanelContainer display={isAccountPanelOpen ? "flex" : "none"}>
//             {currentAuth ? (
//                 <AccountOptions
//                     currentAuth={currentAuth}
//                     currentDocs={currentDocs}
//                     currentColor={currentColor}
//                 />
//             ) : (
//                 <SignInOptions currentDocs={currentDocs} />
//             )}
//         </AccountPanelContainer>
//     );
// };
// export default AccountPanel;
