import React, { useEffect, useState } from "react";

const StickyNotification = ({ children }) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlStickyNotification = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) {
                    setShow(false);
                } else {
                    setShow(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlStickyNotification);
            return () => {
                window.removeEventListener('scroll', controlStickyNotification);
            };
        }
    }, [lastScrollY]);

    return (
        <div id="notification" {...(!show && { className: 'hidden look-through' })}>{children}</div>
    );
}

export default StickyNotification;