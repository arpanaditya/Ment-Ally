import React from "react";
import styles from "./Front.module.css";
import {motion} from 'framer-motion';
import { VscArrowRight } from "react-icons/vsc";
import frontImage from './img/nature.png';
function Front() {
  const isScroll = () => window.scrollTo({top: 690, left: 0, behavior: 'smooth' });
  const btnVarient = {
    hover:{
        scale:1.2,
        transition:{
          yoyo:Infinity,
          duration:0.8,
          type:'spring',
          stiffness:110,
          originX:0
        }
    },
    hidden:{
      x:'-100vw'
    },
    visible:{
      x:0,
      transition:{
        type:'spring',
        delay:0.5,
        duration:0.1,
        stiffness:100,
      }
    }

  }
  return (//pushed
    <div className={styles.total}>
      <div className={styles.main}>
        <div className={styles.section1}>
          <h4>Your fitness friend</h4>

          <h1> MENT-ALLY</h1>

          <h4>Your one solution for all mental problems....</h4>
         <motion.button 
          variants={btnVarient}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          onClick={isScroll}
         className={styles.btn}>Explore <VscArrowRight style={{marginLeft:15}}/></motion.button>
        </div>
        <div className={styles.section2}><img src={frontImage} alt="" /></div>
      </div>
    </div>
  );
}

export default Front;
