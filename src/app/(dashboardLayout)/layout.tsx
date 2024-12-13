import DashboardHeader from "@/components/Dashboard/DashboardHeader/DashboardHeader";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import { ReactNode } from "react";
import { Toaster } from "sonner";

type TDashboardLayoutProps = {
    children : ReactNode
}
const DashboardLayout:React.FC<TDashboardLayoutProps> = ({children}) => {
    return (
        <div className="flex">
            <DashboardSidebar/>
            <div className="w-full flex flex-col gap-4">
            <DashboardHeader/>
            <div className="p-4">
            {children}
            </div>
            </div>
            <Toaster position="bottom-right" richColors/>
        </div>
    );
};

export default DashboardLayout;