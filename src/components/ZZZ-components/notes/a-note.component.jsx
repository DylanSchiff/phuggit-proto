// import styled from "styled-components";
// import Span from "../reusable/Span.component";
// import { ColorContext } from "../../ap/context/color.context";
// import { useContext } from "react";
// const ListItem = styled.div`
//     height: 100%;
//     width: 100%;
//     border-radius: 15px;
//     background-color: var(--main-001);
//     box-shadow: var(--shade-001);
//     overflow: hidden;
//     transition: 111ms linear;
//     display: flex;
//     flex-flow: column nowrap;

//     &:hover {
//         z-index: 500;
//         scale: 1.15;
//         transform: translateY(-10px);
//     }
//     &:hover > :nth-child(2) {
//         background-color: var(--thir-002);
//         border-bottom: 5px solid var(--seco-001);
//     }
//     &:hover > :last-child {
//         background-color: var(--main-001);
//     }
//     &:active {
//         scale: 1.1;
//     }
// `;
// const CloseListItemContainer = styled.div`
//     margin: 0 20px;
//     display: flex;
//     align-items: flex-end;
//     justify-content: flex-end;
// `;
// const CloseListItemSpan = styled.span`
//     font-size: 15px;
//     font-weight: 300;
//     cursor: pointer;
// `;
// const ListItemTitle = styled.div.attrs((props) => ({
//     style: {
//         borderBottom: "5px solid" + props.currentColor,
//     },
// }))`
//     z-index: 30;
//     padding: 10px 20px;
//     background-color: var(--thir-004);
//     color: var(--main-001);
//     box-shadow: var(--shade-001);
//     transition: 111ms linear;
//     display: flex;
//     flex-flow: row nowrap;
//     align-items: flex-end;
//     @media only screen and (max-width: 600px) {
//         text-align: center;
//     }
// `;
// const ListItemSubitles = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     align-items: flex-end;
//     @media only screen and (max-width: 600px) {
//         text-align: center;
//     }
// `;
// const ListItemText = styled.div`
//     z-index: 29;
//     flex: 1;
//     padding: 20px;
//     background-color: var(--main-002);
//     transition: 111ms linear;
// `;
// const ListItemImageContainer = styled.div``;
// const ListItemImage = styled.img``;

// const ListItemTags = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     padding: 10px;
// `;

// const Note = ({ note }) => {
//     const { currentColor } = useContext(ColorContext);
//     const {
//         id,
//         creator,
//         title,
//         subtitle,
//         topic,
//         imageURL,
//         text,
//         tags,
//         // createdAt,
//     } = note;
//     const tagsMap =
//         tags &&
//         tags.map((tag) => {
//             return (
//                 <Span
//                     key={tag}
//                     margin="0 0 0 5px"
//                     fontsize="15px"
//                     fontweight="300"
//                     spanContent={tag.trim() + ","}
//                 />
//             );
//         });
//     // const emptySpan = "...";
//     const closeListItemHandler = (id) => {
//         console.log(id);
//     };
//     return (
//         <ListItem key={id}>
//             <CloseListItemContainer>
//                 <CloseListItemSpan onClick={() => closeListItemHandler(id)}>
//                     delete
//                 </CloseListItemSpan>
//             </CloseListItemContainer>
//             <ListItemTitle currentColor={currentColor}>
//                 <Span fontsize="15px" fontweight="700" spanContent={title} />
//                 <Span
//                     margin="0 5px"
//                     fontsize="15px"
//                     fontweight="300"
//                     spanContent={`by ${creator}`}
//                 />
//             </ListItemTitle>
//             <ListItemText>
//                 <ListItemSubitles>
//                     <Span
//                         spanContent={subtitle}
//                         fontsize="15px"
//                         fontweight="700"
//                         margin="0 0 10px 0"
//                     ></Span>
//                     <Span
//                         spanContent={topic ? `| ${topic}` : null}
//                         fontsize="15px"
//                         fontweight="300"
//                         margin="0 0 10px 5px"
//                     ></Span>
//                 </ListItemSubitles>
//                 <Span
//                     spanContent={text}
//                     fontsize="12px"
//                     fontweight="500"
//                 ></Span>
//                 {imageURL && (
//                     <ListItemImageContainer>
//                         <ListItemImage src={imageURL} />
//                     </ListItemImageContainer>
//                 )}
//             </ListItemText>
//             {tags && <ListItemTags>{tagsMap}</ListItemTags>}
//         </ListItem>
//     );
// };
// export default Note;
