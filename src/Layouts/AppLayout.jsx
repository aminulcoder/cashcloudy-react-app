import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';
import Navbar from '@/Components/Dashboard/Navbar';

export default function AppLayout({ children }) {
    return (
        <div className="dark:bg-slate-800">
            <Navbar />
            <div className="container mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}
