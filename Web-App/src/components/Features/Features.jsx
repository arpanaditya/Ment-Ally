import React from "react";
import styles from "./Features.module.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import sandclock from "../../animation/sandclock.json";
import Ui from "../../animation/Ui.json";
import bmi from "../../animation/bmi.json";
import blog from "../../animation/Blog.json";

function Features() {
  const btnVarient = {
    hover:{
        scale:[1,1.1,1],
        transition:{
          yoyo:Infinity,
          duration:0.8,
          type:'spring',
          stiffness:110
        }
    }
  }
  return (
  <>
    <div className={styles.middle}>
      <h1 >Features we provide</h1>
      <div className={styles.boxes}>
      <motion.div
          variants={btnVarient}
          whileHover="hover"
        className={styles.section}>
          <h3>
            HealthCare Blogs
            <Lottie animationData={blog} style={{ height: 120 }} />
          </h3>
        </motion.div>
        <motion.div
          variants={btnVarient}
          whileHover="hover"
        className={styles.section1}>
          <h3>
            Meditation timer{" "}
            <Lottie animationData={sandclock} style={{ height: 120 }} />
          </h3>
        </motion.div>
        <motion.div
          variants={btnVarient}
          whileHover="hover"
        className={styles.section2}>
          <h3>
            BMI Calculator{" "}
            <Lottie animationData={bmi} style={{ height: 80 }} />
          </h3>
        </motion.div>
        <motion.div
          variants={btnVarient}
          whileHover="hover"
        className={styles.section3}>
          <h3>
            Soothing Ui
            <Lottie animationData={Ui} style={{ height: 120 }} />
          </h3>
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default Features;
