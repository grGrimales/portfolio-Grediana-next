import React, { useState, useEffect } from "react";

import styles from '../../styles/ScrollToTop.module.scss'

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {showScrollTopButton && (

                <span className={`${styles['top-btn-position']} ${styles['top-btn-style']}`}
                    onClick={scrollTop}><i className="fa-solid fa-angles-up"></i>
                </span>

            )}
        </div>
    );
};

export default ScrollToTop;