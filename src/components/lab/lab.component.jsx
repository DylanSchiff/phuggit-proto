import styled from "styled-components";
import NugNotes from "./notes/nug-notes.component";
const LabContainer = styled.div`
    flex: 1;
    width: 100%;
    min-height: 80vh;
    padding: 10px 20px;
    margin: 20px 0 40px 0;
    border-radius: 25px;
    display: ${({ display }) => display};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    /* background-color: var(--white-002);
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002); */
`;
const LabDisplay = styled.div`
    flex: 1;
    width: 100%;
    max-height: 320px;
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
    transition: 100ms linear;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    /* border: 1px solid var(--fade-002); */
`;
const Lab = ({ laboratoryVisible }) => {
    return (
        <LabContainer display={laboratoryVisible ? "flex" : "none"}>
            <NugNotes />
            <LabDisplay />
        </LabContainer>
    );
};
export default Lab;
