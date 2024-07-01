import { CardMedia, Skeleton } from "@mui/material";
import React, { useEffect, useRef } from "react";

interface SkeletonAnimationProps {
    children: React.ReactNode;
    loaded: boolean;
    variant?: string;
    height?: number | string;
    width?: number | string;
    willBeLoadedLast?: boolean;
    callback?: () => void;
}
interface sxType {
    children: React.ReactNode;
    [key: string]: any;
}
export default function SkeletonAnimation({
    children,
    variant,
    height = "auto",
    width = "auto",
    willBeLoadedLast,
    loaded,
    callback,
}: SkeletonAnimationProps) {
    const ref = useRef<HTMLImageElement>(null);
    const Child = React.Children.only(children);
    if (React.isValidElement(Child) === false) {
        throw new Error("SkeletonAnimation only accepts a single child");
    }

    let { children: childrenUnused, ...props }: sxType = { ...Child.props };

    props.visibility = loaded ? "visible" : "hidden";
    props.borderRadius = "10px";

    const { children: clonedChildren, ...skeletonJson } = Child.props;

    const { image, component, display, bgcolor, ...pureSkeletonJson } =
        skeletonJson;
    if (pureSkeletonJson.sx && pureSkeletonJson.sx.hasOwnProperty("bgcolor")) {
        var { bgcolor: pureBgColor, ...purestSkeletonJson } =
            pureSkeletonJson.sx;
    }

    const handleLoad = () => {
        setTimeout(() => {
            console.log("selamke");
            if (callback) callback();
        }, 2000);
    };
    return (
        <>
            {willBeLoadedLast ? (
                <CardMedia
                    {...props}
                    sx={{ ...props.sx, display: loaded ? display : "none" }}
                    image={image}
                    component={"img"}
                    onLoad={() => {
                        handleLoad();
                    }}
                >
                    {clonedChildren !== null ? clonedChildren : undefined}
                </CardMedia>
            ) : (
                <Child.type
                    {...Child.props}
                    sx={{ ...props.sx, display: loaded ? display : "none" }}
                >
                    {clonedChildren !== null ? clonedChildren : undefined}
                </Child.type>
            )}
            {!loaded && (
                <Skeleton
                    {...pureSkeletonJson}
                    sx={purestSkeletonJson}
                    height={height}
                    width={width}
                    animation="wave"
                    variant={variant}
                />
            )}
        </>
    );
}
