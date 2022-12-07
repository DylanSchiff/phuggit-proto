import styled from "styled-components";
const PageSpanContainer = styled.span`
    font-size: ${({ fontsize }) => fontsize};
    line-height: ${({ lineheight }) => lineheight};
    font-weight: ${({ fontweight }) => fontweight};
    user-select: none;
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};
    text-align: ${({ textalign }) => textalign};
    min-height: ${({ minheight }) => minheight};
    max-height: ${({ maxheight }) => maxheight};
    cursor: ${({ cursor }) => cursor};
    color: ${({ color }) => color};

    @media only screen and (max-width: 1000px) {
        max-width: ${({ maxwidthone }) => maxwidthone};
        font-size: ${({ fontsizeone }) => fontsizeone};
        line-height: ${({ lineheightone }) => lineheightone};
        font-weight: ${({ fontweightone }) => fontweightone};
        padding: ${({ paddingone }) => paddingone};
        margin: ${({ marginone }) => marginone};
        text-align: ${({ textalignone }) => textalignone};
        min-height: ${({ minheightone }) => minheightone};
        max-height: ${({ maxheightone }) => maxheightone};
        cursor: ${({ cursorone }) => cursorone};
        color: ${({ colorone }) => colorone};
    }
    @media only screen and (max-width: 600px) {
        font-size: ${({ fontsizesix }) => fontsizesix};
        line-height: ${({ lineheightsix }) => lineheightsix};
        font-weight: ${({ fontweightsix }) => fontweightsix};
        padding: ${({ paddingsix }) => paddingsix};
        margin: ${({ marginsix }) => marginsix};
        text-align: ${({ textalignsix }) => textalignsix};
        min-height: ${({ minheightsix }) => minheightsix};
        max-height: ${({ maxheightsix }) => maxheightsix};
        cursor: ${({ cursorsix }) => cursorsix};
        color: ${({ colorsix }) => colorsix};
    }
    @media only screen and (max-width: 200px) {
        padding: ${({ paddingtwo }) => paddingtwo};
        font-size: ${({ fontsizetwo }) => fontsizetwo};
        line-height: ${({ lineheighttwo }) => lineheighttwo};
        font-weight: ${({ fontweighttwo }) => fontweighttwo};
        text-align: ${({ textaligntwo }) => textaligntwo};
    }
`;
const PageSpan = ({
    spantext,
    fontsize,
    lineheight,
    fontweight,
    padding,
    margin,
    textalign,
    minheight,
    maxheight,
    color,
    cursor,
    fontsizeone,
    lineheightone,
    fontweightone,
    paddingone,
    marginone,
    textalignone,
    minheightone,
    maxheightone,
    maxwidthone,
    colorone,
    cursorone,
    fontsizesix,
    lineheightsix,
    fontweightsix,
    paddingsix,
    marginsix,
    textalignsix,
    minheightsix,
    maxheightsix,
    colorsix,
    cursorsix,
    fontsizetwo,
    lineheighttwo,
    fontweighttwo,
    textaligntwo,
    paddingtwo,
}) => {
    return (
        <PageSpanContainer
            cursor={cursor}
            fontsize={fontsize}
            fontweight={fontweight}
            lineheight={lineheight}
            padding={padding}
            margin={margin}
            textalign={textalign}
            minheight={minheight}
            maxheight={maxheight}
            color={color}
            fontsizeone={fontsizeone}
            lineheightone={lineheightone}
            fontweightone={fontweightone}
            paddingone={paddingone}
            marginone={marginone}
            textalignone={textalignone}
            minheightone={minheightone}
            maxheightone={maxheightone}
            maxwidthone={maxwidthone}
            colorone={colorone}
            cursorone={cursorone}
            fontsizesix={fontsizesix}
            lineheightsix={lineheightsix}
            fontweightsix={fontweightsix}
            paddingsix={paddingsix}
            marginsix={marginsix}
            textalignsix={textalignsix}
            minheightsix={minheightsix}
            maxheightsix={maxheightsix}
            colorsix={colorsix}
            cursorsix={cursorsix}
            fontsizetwo={fontsizetwo}
            lineheighttwo={lineheighttwo}
            fontweighttwo={fontweighttwo}
            textaligntwo={textaligntwo}
            paddingtwo={paddingtwo}
        >
            {spantext}
        </PageSpanContainer>
    );
};
export default PageSpan;
