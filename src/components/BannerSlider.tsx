import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Paper, IconButton } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import BannerSliderDot from "./BannerSliderDot";
import { useSwipeable } from "react-swipeable";

const banners: Banner[] = [
    {
        src: "https://via.placeholder.com/800x300?text=Summer+Sale",
        alt: "Summer Sale",
    },
    {
        src: "https://via.placeholder.com/800x300?text=New+Arrivals",
        link_href: "/new-arrivals",
        alt: "New Arrivals",
    },
    {
        src: "https://via.placeholder.com/800x300?text=Exclusive+Collection",
        link_href: "/exclusive",
        alt: "Exclusive Collection",
    },
    {
        src: "https://via.placeholder.com/800x300?text=Kids+Special",
        link_href: "/kids",
        alt: "Kids Special",
    },
    {
        src: "https://via.placeholder.com/800x300?text=Accessories+Discounts",
        link_href: "/accessories",
        alt: "Accessories Discounts",
    },
];

interface BannerSliderProps {
    images?: Banner[];
}
interface Banner {
    src: string;
    link_href?: string;
    alt: string;

}

export default function BannerSlider({
    images = banners,
}: BannerSliderProps) {
    const [metadata, setMetadata] = useState<number>(0);
    const refs = useRef<(HTMLImageElement | null)[]>([]);

    const scrolling = useRef<number | null>(null);

    const handlers = useSwipeable({
        onSwipedRight: () => handleBack(),

        onSwipedLeft: () => handleNext(),
    });

    const handleScroll = (e: Event) => {
        if (scrolling.current !== null) {
            window.scrollTo(window.scrollX, scrolling.current as number);

            scrolling.current = null;
        }
    };

    const handleNext = () => {
        setMetadata((prev) => {
            scrolling.current = window.scrollY;
            if (prev + 1 === images.length) {
                refs.current[0]?.scrollIntoView(false);
                return 0;
            }
            
            refs.current[prev + 1]?.scrollIntoView(false);

            return prev + 1;
        });
    };

    const handleBack = () => {
        setMetadata((prev) => {
            scrolling.current = window.scrollY;

            if (prev - 1 >= 0) {
                refs.current[prev - 1]?.scrollIntoView(false);

                return prev - 1;
            } else {
                refs.current[images.length - 1]?.scrollIntoView(false);
                return images.length - 1;
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));

         const interval = setInterval(handleNext, 4000);

        return () => {
            clearInterval(interval);
            window.removeEventListener("scroll", (e) => handleScroll(e));
        };
    }, []);

    return (
        <Box
            {...handlers}
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
        >
            <Paper
                sx={{
                    width: "100%",
                    height: { xs: 300, lg: 400 },
                    objectFit: "cover",

                    display: "flex",
                    flexDirection: "row",
                    whiteSpace: "nowrap",
                    overflowX: "hidden",
                    scrollBehavior: "smooth",
                }}
            >
                {images.map((image, index) => {
                    return (
                        <Box
                            key={index}
                            ref={(el: HTMLImageElement) => {
                                refs.current[index] = el;
                            }}
                            onClick={() => {
                                //open new link
                                window.open(image.link_href, "_blank");
                                
                            }}
                            /* component="img"
                            src={image} */
                            sx={{
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                cursor:image.link_href ? "pointer" : "default",
                            }}
                        >
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    );
                })}
            </Paper>
            <IconButton
                onClick={handleBack}
                sx={{ position: "absolute", left: 0, bgcolor: "white" }}
            >
                <Icon icon="mdi:arrow-left" />
            </IconButton>
            <IconButton
                onClick={handleNext}
                sx={{ position: "absolute", right: 0, bgcolor: "white" }}
            >
                <Icon icon="mdi:arrow-right" />
            </IconButton>

            <BannerSliderDot
                onClick={(i) => {
                    const element = refs.current[i];
                    if (element) {
                        console.log("this is what happens");
                        element.scrollIntoView(false);
                        setMetadata(i);
                    }
                }}
                length={images.length}
                index={metadata}
            />
        </Box>
    );
}
