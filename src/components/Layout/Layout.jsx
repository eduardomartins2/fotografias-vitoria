// components/Layout/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Container, Fotografia, Head, StyledLink, Title } from '../../pages/Home/home-css';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';

const Layout = () => {
    return (
        <Container>
            <StyledLink to="/">
                <Head>
                <Title>FOTOGRAFIAS</Title>
                <Fotografia>Vitória Martins</Fotografia>
                </Head>
            </StyledLink>
            <Navbar />
            <Outlet />
            <Footer />
            <BackToTop />
        </Container>
    );
};

export default Layout;
