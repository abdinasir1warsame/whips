import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import IndexPage from "./pages/indexPage"

const Layout = () => {
    return (
        <div>
<Navbar></Navbar>
<Outlet/>

</div>
    )
}

export default Layout