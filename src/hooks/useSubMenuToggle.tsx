import { useState, useCallback } from 'react';

type SubMenuState = {
    [key: string]: boolean;
};

const useSubMenuToggle = () => {
    const [subMenuState, setSubMenuState] = useState<SubMenuState>({});

    const toggleSubMenu = useCallback((id: string) => {
        setSubMenuState(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    }, []);

    const isOpened = useCallback(
        (id: string) => !!subMenuState[id],
        [subMenuState]
    );

    return { toggleSubMenu, isOpened };
};

export default useSubMenuToggle;
