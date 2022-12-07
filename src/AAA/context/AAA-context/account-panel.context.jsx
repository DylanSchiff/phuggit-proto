import { createContext, useState, useEffect } from "react";

export const AccountPanelContext = createContext({
    isPanelOpen: null,
    setIsPanelOpen: () => {},
});

export const AccountPanelProvider = ({ children }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const value = {
        isPanelOpen,
        setIsPanelOpen,
    };
    return (
        <AccountPanelContext.Provider value={value}>
            {children}
        </AccountPanelContext.Provider>
    );
};
