import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { Children } from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Menu />
                {children}
            <Footer />
        </>
    );
};
export default Layout;