import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return(
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;