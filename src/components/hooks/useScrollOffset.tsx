import { useState } from "react";

export default function useScrollOffset() {
    const [shown, setShown] = useState(false);
    window.addEventListener("scroll", (e) => {
        if (window.scrollY > 550 && !shown) {
            setShown(true);
        } else if (window.scrollY < 550 && shown) {
            setShown(false);
        }
    });
    return shown;
}
