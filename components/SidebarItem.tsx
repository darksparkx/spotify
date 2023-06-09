import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type Props = {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
};

const SidebarItem = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={twMerge(
                "flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
                props.active && "text-white"
            )}
        >
            <props.icon size={26}/>
            <p className="truncate w-full">{props.label}</p>
        </Link>
    );
};

export default SidebarItem;
