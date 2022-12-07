import { createContext, useState } from "react";

export const AccountPanelContext = createContext({
    isPanelOpen: null,
    setIsPanelOpen: () => {},
    isEditorOpen: null,
    setIsEditorOpen: () => {},
});

export const AccountPanelProvider = ({ children }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const value = {
        isPanelOpen,
        setIsPanelOpen,
        isEditorOpen,
        setIsEditorOpen,
    };
    return (
        <AccountPanelContext.Provider value={value}>
            {children}
        </AccountPanelContext.Provider>
    );
};
