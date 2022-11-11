import styled from "styled-components";
import NugNotes from "./notes/nug-notes.component";
const LabContainer = styled.div`
    border-radius: 25px;
    display: ${({ display }) => display};
    flex: 1;
    width: 100%;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    background-color: var(--white-002);
    margin: 20px 0 40px 0;
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002);
`;

const Lab = ({ laboratoryVisible }) => {
    console.log(laboratoryVisible);
    return (
        <LabContainer display={laboratoryVisible ? "flex" : "none"}>
            <NugNotes />
        </LabContainer>
    );
};
export default Lab;
