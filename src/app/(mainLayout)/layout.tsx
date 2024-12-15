import Footer from "@/components/shared/Footer/Footer";
import AnimatedHeader from "@/components/shared/Navbar/AnimatedHeader";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

type TMainLayoutProps = {
    children : ReactNode
}
const MainLayout:React.FC<TMainLayoutProps> = ({children}) => {
    return (
        <div>
            <AnimatedHeader/>
            {/* <Navbar/> */}
            {children}
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;