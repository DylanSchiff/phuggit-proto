import { createContext, useState } from "react";

export const AccountPanelContext = createContext({
    isPanelOpen: null,
    setIsPanelOpen: () => {},
    isEditorOpen: null,
    setIsEditorOpen: () => {},
    isBadgesOpen: null,
    setIsBadgesOpen: () => {},
    isFollowingOpen: null,
    setIsFollowingOpen: () => {},
});

export const AccountPanelProvider = ({ children }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isBadgesOpen, setIsBadgesOpen] = useState(false);
    const [isFollowingOpen, setIsFollowingOpen] = useState(false);


    const value = {
        isPanelOpen,
        setIsPanelOpen,
        isEditorOpen,
        setIsEditorOpen,
        isBadgesOpen,
        setIsBadgesOpen,
        isFollowingOpen,
        setIsFollowingOpen,
    };

    return (
        <AccountPanelContext.Provider value={value}>
            {children}
        </AccountPanelContext.Provider>
    );
};
