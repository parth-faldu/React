import { NavLink } from "react-router-dom";

export const Header = () => {
    return <>
        <header className="section-navbar">
            <section className="top_txt">
                <div className="head container">
                    <div className="head_txt">
                        <p>Get ExcelFlix Memebership, 30-day return guarantee.</p>
                    </div>
                    <div className="sing_in_up">
                        <NavLink to="">SIGN IN</NavLink>
                        <NavLink to="">SIGN UP</NavLink>
                    </div>
                </div>
            </section>  

            <div className="container">

                <div className="navbar-brand">
                    <NavLink to="#">
                        {/* <img src="" alt="" className="" width="80%" height="auto" /> */}
                        <h3>ExcelFlix</h3>
                    </NavLink>
                </div>

                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movie" className="nav-link">movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    </>;
}