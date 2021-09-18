import style from "./AppSection.module.css";
import Screen1 from "./img/S-1.png";
import Screen2 from "./img/S-2.png";
import Screen3 from "./img/S-3.png";
import { Link } from "react-router-dom";
const AppSection = () => {
  return (
    <div className={style.mainAppSection}>
      <div className={style.App_Screen1}>
        <div>
          {" "}
          <img src={Screen1} alt="" />
        </div>
        <div className={style.content}>
          <h1>Blogs </h1>
          <div className={style.aboutContent}>
          Don't know how to start? Feeling confused? Try our blogs. Ment-Ally blogs are specially designed to guide you and help you to achieve mental peace. Read our
           <Link className={style.tabLink} to = '/Blog'> Blogs</Link> now.
          </div>
        </div>
      </div>
      <div className={style.App_Screen2}>
        <div className={style.content}>
        <h1>Meditation</h1>
          <div className={style.aboutContent}>
          Not feeling well? Mentally exhausted? Try our meditation tool,  spending even a few minutes in meditation can restore your calm and inner peace. It's simple and inexpensive, and it doesn't require any special equipment. <Link className={style.tabLink} to='/Meditation'>Try it now.</Link>
          </div>
        </div>
        <div>
          {" "}
          <img src={Screen2} alt="" />
        </div>
      </div>
      <div className={style.App_Screen3}>
        <div>
          {" "}
          <img src={Screen3} alt="" />
        </div>
        <div className={style.content}>
        <h1>Yoga</h1>
          <div className={style.aboutContent}>
          Do you know?  Yoga can help you in staying fit physically and mentally as well. Our site has some beginner-friendly Yoga postures which you should definitely give a try. You can also check your BMI here. Check them  <Link className={style.tabLink} to = '/Yoga'> here</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
