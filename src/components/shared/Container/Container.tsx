import { ReactNode } from "react";


const Container = ({children}:{children:ReactNode}) => {
    return (
        <div className="max-w-[1370px] mx-auto px-3 md:px-5 xl:px-0">
            {children}
        </div>
    );
};

export default Container;