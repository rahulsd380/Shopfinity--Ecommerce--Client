import Footer from "@/components/shared/Footer/Footer";
import AnimatedHeader from "@/components/shared/Navbar/AnimatedHeader";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";
import ScrollToTop from "./../../components/ScrollToTop/ScrollToTop";
import { Toaster } from "sonner";

type TMainLayoutProps = {
  children: ReactNode;
};
const MainLayout: React.FC<TMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <AnimatedHeader />
      <Navbar />
      {children}
      <Footer />

      <ScrollToTop />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default MainLayout;
