import { useEffect, useRef } from "react";

export default function useOutsideClick(callback,state: boolean) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log("state")
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                console.log("callback-executed")
                callback();
            }
        };
        if (state) {
            console.log("adding event listener");
            document.addEventListener("click", handleClick);
        } else document.removeEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);
    }, [state]);
    return ref;
}
