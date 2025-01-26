import { NavLink } from "react-router-dom";

export const Footer = () => {
    return <>
        <footer className="section-footer">
            <div className="footer-container container">
                <div className="content_1">
                    <h3>ExcelFlix</h3>
                    <p>
                        Welcome to ExcelFlix, <br />
                        your ultimate destination for
                        <br />
                        blockbuster movies and cinematic adventures!
                    </p>
                    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
                </div>
                <div className="content_2">
                    <h4>WATCHING</h4>
                    <a>Movie Library</a>
                    <a>TV Shows Hub</a>
                    <a>New Releases</a>
                    <a>Top Picks Today</a>
                </div>
                <div className="content_3">
                    <h4>EXPLORE</h4>
                    <NavLink to="./contact">Contact Us</NavLink>
                    <a target="_blank"> Subscription Plans </a>
                    <a target="_blank"> Streaming Options </a>
                    <a target="_blank"> Refund and Support </a>
                </div>
                <div className="content_4">
                    <h4>NEWSLETTER</h4>
                    <p>
                        Be the first to know about new
                        <br />
                        arrivals, sales & promos!
                    </p>
                    <div className="f-mail">
                        <input type="email" placeholder="Your Email" />
                        <i className="bx bx-envelope"></i>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="f-design">
                <div className="f-design-txt">
                    <p>Design and Code by Parth Faldu</p>
                </div>
            </div>
        </footer>;


    </>;
}