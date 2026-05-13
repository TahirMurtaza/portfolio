import { useEffect, useState } from "react";

const useIsMobile = (maxWidth = 1023) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= maxWidth);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, [maxWidth]);

    return isMobile;
};

export default useIsMobile;
