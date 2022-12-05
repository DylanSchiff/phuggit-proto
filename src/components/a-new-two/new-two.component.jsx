import styled from "styled-components";
const NewTwoContainer = styled.div.attrs((props) => ({
    style: {
        color: props.NewTwoPropName,
    },
}))``;
const NEWTWONOTES = [];
const NewTwo = () => {
    return (
        <NewTwoContainer>
            <>Notes</>
            {NEWTWONOTES.map((note) => {
                return <div key={note.id}>{note.note}</div>;
            })}
            <>Account stuff :</>
        </NewTwoContainer>
    );
};
export default NewTwo;
