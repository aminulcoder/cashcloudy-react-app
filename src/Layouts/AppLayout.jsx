import Footer from "../components/Footer/Footer";
import Heroarea from "../components/Herosection/Heroarea";
import Navbar from "../components/Navbar/Navbar";


export default function AppLayout({ children }) {
    return (
        <div className="dark:bg-slate-800">
            <Navbar />
            <Heroarea></Heroarea>
            <div className=" container mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}
