import { useContext } from "react";
import styled from "styled-components";
// import PopTabs from "./pop-tabs.component";
import Pop from "./pop.component";
import { PopContext } from "./pop.context";
import { POPS } from "./POPDATA";

const PopTrayContainer = styled.div`
    /* position: absolute; */
    min-height: 125px;
    min-height: 125px;
    z-index: 999;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 0.5px solid #ffffff55;
    padding: 20px 0 10px 0;
`;
// const PopAndTabs = styled.div`
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: center;
//     align-items: center;
// `;
const PopTray = () => {
    const { currentPop } = useContext(PopContext);
    return (
        <PopTrayContainer>
            {POPS &&
                POPS.map((pop) => {
                    const {
                        id,
                        // tabs
                    } = pop;
                    return (
                        // <PopAndTabs key={id}>
                        //     <PopTabs
                        //         tabs={tabs}
                        //         isSelected={
                        //             currentPop
                        //                 ? currentPop.id === id
                        //                     ? true
                        //                     : false
                        //                 : false
                        //         }
                        //     />
                        <Pop
                            key={id}
                            pop={pop}
                            isSelected={
                                currentPop
                                    ? currentPop.id === id
                                        ? true
                                        : false
                                    : false
                            }
                        ></Pop>
                        // </PopAndTabs>
                    );
                })}
        </PopTrayContainer>
    );
};
export default PopTray;
