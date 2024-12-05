import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

type TMainLayoutProps = {
    children : ReactNode
}
const MainLayout:React.FC<TMainLayoutProps> = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;