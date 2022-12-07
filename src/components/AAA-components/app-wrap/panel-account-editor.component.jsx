import styled from "styled-components";
const PanelAccountEditorContainer = styled.div.attrs((props) => ({
    style: {
        display: props.display,
    },
}))``;
const PanelAccountEditor = ({ isEditorOpen }) => {
    return (
        <PanelAccountEditorContainer display={isEditorOpen ? "flex" : "none"}>
            PanelAccountEditor
        </PanelAccountEditorContainer>
    );
};
export default PanelAccountEditor;
