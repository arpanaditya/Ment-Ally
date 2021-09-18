import styles from "./Homepage.module.css";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import meditation from "../../animation/meditation.json";
import Features from "../../components/Features/Features";
import AppSection from "../../components/AboutApp/AppSection";
import Front from "../../components/FrontPage/Front";
const Homepage = () => {

  return (
    <div>
      <div className={styles.homepage}>
       <Front/>
      </div>
      {/* scroll */}
      <Features/>
      <div className={styles.second}>
        <div className={styles.medi_animaiton}>
          <Lottie animationData={meditation} style={{ size: 1000 }} />
        </div>
        <div className={styles.text}>
         <h1>Meditation</h1>
          has been practiced for thousands of years. Meditation originally was
          meant to help deepen understanding of the sacred and mystical forces
          of life. These days, meditation is commonly used for relaxation and 
         stress relief
         <Link to="/Meditation"><button className={styles.getthereBtn}>
          Get there
        </button></Link>
         
        </div>
        
       
      </div>
      <AppSection/>
    </div>
  );
};

export default Homepage;
