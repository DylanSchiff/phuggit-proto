// import { useState } from "react";
// import styled from "styled-components";
// const InputWithButtonContainer = styled.div`
//     display: flex;
//     flex-flow: row nowrap;
//     border-radius: 15px;
//     overflow: hidden;
//     height: 40px;
//     width: 50%;
// `;
// const IWBInput = styled.input`
//     flex: 1;
//     text-align: center;
//     border: none;
//     outline: none;
// `;
// const IWBButton = styled.div`
//     padding: 0 20px;
//     border: none;
//     border-left: 1px solid #0002;
//     outline: none;
//     background-color: #fff;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const InputWithButton = ({ inputplaceholder, buttontext }) => {
//     const [inputValue, setInputValue] = useState("");
//     const IWBHandler = (e) => {
//         console.log(inputValue);
//     };
//     return (
//         <InputWithButtonContainer>
//             <IWBInput
//                 placeholder={inputplaceholder}
//                 onInput={(e) => setInputValue(e.target.value)}
//             />
//             <IWBButton onClick={(e) => IWBHandler(e)}>{buttontext}</IWBButton>
//         </InputWithButtonContainer>
//     );
// };
// export default InputWithButton;
