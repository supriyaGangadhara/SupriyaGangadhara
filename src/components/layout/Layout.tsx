import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navigation />
            <main className="flex-1 pt-[4rem]">
                <Outlet /> {/* Renders the current route page */}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
