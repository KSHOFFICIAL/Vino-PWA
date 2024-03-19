import Header from "./Header";
import Footer from "./Footer";
import Container from "@styles/layout/layout";

const Layout = () => {
    return (
        <Container style={{width : '100%', height : '100vh'}}>
            <Header/>
            <div>

            </div>
            <Footer/>
        </Container>
    );
}

export default Layout;