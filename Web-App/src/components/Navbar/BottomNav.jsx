import style from "../Navbar/BottomNav.module.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsFilePost } from "react-icons/bs";
import { GiMeditation } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const BottomNav = () => {
    return (
        <>
            <nav className={style.bottomNav}>
                <div className={style.nav}>
                    <div className={style.link}>
                        <Link to="/">
                            <AiOutlineHome color="#000000" size="2rem" />
                        </Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/blog">
                            <BsFilePost color="#000000" size="2rem" />
                        </Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/Meditation">
                            <GiMeditation color="#000000" size="2rem" />
                        </Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/Yoga">
                            <GrYoga color="#000000" size="2rem" />
                        </Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/About">
                            <AiOutlineQuestionCircle color="#000000" size="2rem" />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default BottomNav;
