import styled from "styled-components";
import PanelButton from "./panel-button.component";
import { signInWithGooglePopup } from "../../../AAA/utils/AAA-utilz/firebase.utils";
const PanelAuthOptionsContainer = styled.div``;
const PanelAuthOptions = () => {
    return (
        <PanelAuthOptionsContainer>
            <PanelButton
                buttonText="Connect Account"
                buttonHandler={signInWithGooglePopup}
            />
        </PanelAuthOptionsContainer>
    );
};
export default PanelAuthOptions;
