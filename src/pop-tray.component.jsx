import { useContext } from "react";
import styled from "styled-components";
import Pop from "./pop.component";
import { PopContext } from "./pop.context";
import { POPS } from "./POP_DATA";

const PopTrayContainer = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #ffffff55;
    padding: 20px 0 10px 0;
`;

const PopTray = () => {
    const { currentPop } = useContext(PopContext);
    return (
        <PopTrayContainer>
            {POPS.map((pop) => {
                return (
                    <Pop
                        key={pop.id}
                        pop={pop}
                        isSelected={currentPop === pop.id ? true : false}
                    ></Pop>
                );
            })}
        </PopTrayContainer>
    );
};
export default PopTray;
