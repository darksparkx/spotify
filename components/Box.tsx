import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Box = (props: Props) => {
    return (
        <div
            className={twMerge(
                "bg-neutral-900 rounded-lg h-fit w-full",
                props.className
            )}
        >
            {props.children}
        </div>
    );
};

export default Box;
