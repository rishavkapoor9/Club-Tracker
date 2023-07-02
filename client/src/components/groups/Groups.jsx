import Axios from "axios";
import "./groups.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";

export default function Groups(props) {
    Axios.defaults.withCredentials = true;
    Axios.defaults.headers = {
        'X-Requested-With': 'XMLHttpRequest',
    };
    Axios.defaults.credentials = 'include';
    const navigate = useNavigate();
    async function logout(event) {
        await Axios.get("http://localhost:4000/logout").then(() => {})
        navigate("/login");
        event.preventDefault();

       
    }
    return (
        <div className="group">
            <div className="groupWrapper">
                <div className="groupTop">
                    <div className="user-handel">
                        <div className="initials1">
                            <div className="handleUsername1">{props.user.name}</div>
                            <div className="handleAccount1">{props.user.username}</div>
                        </div>
                        <img className="shareProfileImg1" src="/assets/person/1.jpeg" alt="" />
                    </div>
                    <div className="logoutIcon">
                        <a onClick={logout} href="/login" className="link"><LogoutIcon /></a>
                    </div>
                </div>
                <hr className="line" />
                <div className="homePage"><a href="/" className="link">Home</a></div>
                <hr className="line" />
                <div className="list-1">
                    <div className="section-1">Technical Clubs</div>
                    <div className="scrollable-list-1">
                        <ul className="noBullets-1">
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link to='/clubs/data_science' className="club-name-1">Data Science</Link>
                            </li>
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-1">Data Science</Link>
                            </li>
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-1">Data Science</Link>
                            </li>
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-1">Data Science</Link>
                            </li>
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-1">Data Science</Link>
                            </li>
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-1">Data Science</Link>
                            </li>
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-1">Data Science</Link>
                            </li>
                            <li className="l-1">
                                <img className="club-1" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-1">Data Science</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="line" />
                    <div className="section-2">Cultural Clubs</div>
                    <div className="scrollable-list-2">
                        <ul className="noBullets-2">
                            <li className="l-2">
                                <img className="club-2" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-2">
                                <img className="club-2" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-2">
                                <img className="club-2" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-2">
                                <img className="club-2" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-2">
                                <img className="club-2" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-2">
                                <img className="club-2" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-2">
                                <img className="club-2" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="line" />
                    <div className="section-3">Sports Clubs</div>
                    <div className="scrollable-list-3">
                        <ul className="noBullets-3">
                            <li className="l-3">
                                <img className="club-3" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-3">Data Science</Link>
                            </li>
                            <li className="l-3">
                                <img className="club-3" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-3">
                                <img className="club-3" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-3">Data Science</Link>
                            </li>
                            <li className="l-3">
                                <img className="club-3" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-3">Data Science</Link>
                            </li>
                            <li className="l-3">
                                <img className="club-3" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-2">Data Science</Link>
                            </li>
                            <li className="l-3">
                                <img className="club-3" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-3">Data Science</Link>
                            </li>
                            <li className="l-3">
                                <img className="club-3" src="/assets/person/1.jpeg" alt="" />
                                <Link className="club-name-3">Data Science</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}