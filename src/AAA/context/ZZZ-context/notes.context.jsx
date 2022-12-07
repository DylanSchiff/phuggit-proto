// import { createContext, useState, useEffect } from "react";
// // import { getNotes } from "../utils/firebase.utils";

// export const NotesContext = createContext({
//     setNotesMap: () => null,
//     notesMap: [],
// }); 

// export const NotesProvider = ({ children }) => {
//     const [notesMap, setNotesMap] = useState(null);

//     useEffect(() => {
//         const getNotesMap = async () => {
//             // const notesMap = await getNotes();
//             // setNotesMap(notesMap);
//         };
//         getNotesMap();
//     }, []);

//     const value = {
//         notesMap,
//     };
//     return (
//         <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
//     );
// };
