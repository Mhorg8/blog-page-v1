import React, {ReactNode} from "react";

interface HeaderTitleProps {
    text: string;
    customStyle?: string;
    icon?: ReactNode;
}

const HeaderTitle = ({text, customStyle, icon}: HeaderTitleProps) => {
    return (
        <h2
            className={`${customStyle && customStyle} text-2xl md:text-4xl font-bold flex items-center gap-2`}
        >
            {text}
            {icon}
        </h2>
    );
};

export default HeaderTitle;
