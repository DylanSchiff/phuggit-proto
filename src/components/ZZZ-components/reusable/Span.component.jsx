import styled from "styled-components";
const SpanContainer = styled.div.attrs((props) => ({
    size: props.fontsize || "17px",
    weight: props.fontweight || 300,
    margin: props.margin || 0,
    userselect: props.userselect || "none",
    transform: props.texttransform || "none",
    // color: props.color || "var(--thir-002)",
}))`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    margin: ${(props) => props.margin};
    user-select: ${(props) => props.userselect};
    text-transform: ${(props) => props.transform};
    /* color: ${(props) => props.color}; */
`;
const Span = ({
    spanContent,
    fontsize,
    fontweight,
    margin,
    userselect,
    texttransform,
    // color,
}) => {
    return (
        <SpanContainer
            fontsize={fontsize}
            // color={color}
            fontweight={fontweight}
            margin={margin}
            userselect={userselect}
            texttransform={texttransform}
        >
            {spanContent}
        </SpanContainer>
    );
};
export default Span;
