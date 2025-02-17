import React from 'react';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";

interface Props {
    isLink?: boolean;
    path?: string;
    buttonText?: string;
    Icon?: React.ReactNode;
    contentText: string;
    click?: () => void
}

const CustomTooltip = ({
                           isLink,
                           buttonText,
                           contentText,
                           click,
                           path,
                           Icon
                       }: Props) => {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip >
                <TooltipTrigger onClick={click && click} className="hover:scale-110 hoverEffect">
                    {isLink ?
                        <Link href={path ? path : '/'}>
                            {Icon && Icon}
                        </Link>
                        : <span>{Icon ? Icon : buttonText}</span>}
                </TooltipTrigger>
                <TooltipContent >
                    <p>{contentText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default CustomTooltip;