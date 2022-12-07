// import { useContext, useEffect } from "react";
// import { createContext, useState } from "react";
// import { FreshAccountContext } from "./fresh-account.context";
// export const ColorContext = createContext({
//     currentColor: "#5c2fe6",
//     setCurrentColor: () => {},
// });

// export const ColorProvider = ({ children }) => {
//     const { currentDocs } = useContext(FreshAccountContext);
//     const [currentColor, setCurrentColor] = useState("transparent");
//     useEffect(() => {
//         const getAccountColor = async () => {
//             if (currentDocs) {
//                 const { color } = currentDocs;
//                 setCurrentColor(color);
//             }
//         };
//         getAccountColor();
//     }, [currentDocs]);

//     const value = { currentColor, setCurrentColor };
//     return (
//         <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
//     );
// };
