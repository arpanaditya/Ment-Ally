import { SocialIcon } from "react-social-icons";
import "./About.css";
import Lottie from "lottie-react";
import workingAni from "../../animation/Worling.json";
import heart from "../../animation/heart.json";
import { FaRegCopyright } from "react-icons/fa";
const About = () => {
  return (
    <div className="mainAbout">
      <div className="heading">
        <span>About</span><p>Us</p>
      </div>
      <div className="bottomsection">
            <div className="webAppSection">
                <div className="bar">About MENT-ALLY</div>
                <div className="aboutwebapp">
                Every person has been a victim of mental illness at some point in the day. Mental illness can be of any type i.e anxiety, depression, personality disorders, and many more. According to the study, everyone in four-person suffers from mental or neurological disorders at some point in their lives. Sometimes it just ruins your time and energy. It can be very fatal, even leads to suicide. This is common among teenagers.<br/> <br/>To avoid this problem we have come up with a solution. Ment-Ally is a web app that aimto help users to deal with mental health-related problems. It'll act as a temporardistraction for the time being. It has many features which are designed to help users. 

                </div>
            </div>
           
            <div className="developersSection">
                <div className="bar">Meet The MENT-ALLY Team</div>
                <div className="devIntro">
                    <div className="workingAnimation">
                        <Lottie 
                        style={{height:300 }}
                        animationData={workingAni} />
                    </div>
                    <div className='intro' >Ment-Ally team consists of 4 very enthusiastic developers who are open to learning and experimenting with new techs. We always aim to build something which can help people to deal with problems and can make their life hassle-free. We all have experienced some kind of mental disorder at some point in time.</div>
                    <div className='intro_rest'>As we have interacted with many fellows then we realized that mental health is a big issue to deal with. Then after a lot of meetings and discussions we have come up with this solution, "Ment-Ally". We hope it will help the users to deal with mental issues.</div>
                </div>



                
                <div className="developer">
                    <div className="Kunal contactBox">
                        <div className="img"></div>
                        <div className="developer_info">
                            <div className="name">Kunal Patel</div>
                            <p>Hey there, My self Kunal...!<br/>Nice to meet you.<br/>Let's connect</p>
                            <div className="contact_links">
                                <SocialIcon 
                                className='social_icons' 
                                url="https://github.com/kunal838/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.instagram.com/kunal_patel.js/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon  
                                className='social_icons'
                                url="https://www.linkedin.com/in/kunal-patel-760194205/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="mailto:pkunal257@gmail.com"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                            </div>
                        </div>
                    </div>
                    <div className="Pavitra contactBox">
                        <div className="img"></div>
                        <div className="developer_info">
                            <div className="name">Pavitra Behara</div>
                            <p>Hey there, My self Pavitra...!<br/>Nice to meet you.<br/>Let's connect</p>
                            <div className="contact_links">
                                <SocialIcon 
                                className='social_icons' 
                                url="https://github.com/Pavitra554"
                                target="_blank"
                                style={{ height: 40, width: 40}}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.instagram.com/pavitra.js/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.linkedin.com/in/pavitra-behara/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="mailto:pavitraredmi@gmail.com"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                            </div>
                        </div>
                    </div>
                    <div className="Ankit contactBox">
                        <div className="img"></div>
                        <div className="developer_info">
                            <div className="name">Ankit Singh</div>
                            <p>Hey there, My self Ankit...!<br/>Nice to meet you.<br/>Let's connect</p>
                            <div className="contact_links">
                                <SocialIcon 
                                className='social_icons' 
                                url="https://github.com/AnkitSingh0702"
                                target="_blank"
                                style={{ height: 40, width: 40}}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.instagram.com/ankitsingh0702/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.linkedin.com/in/ankit-singh-6a1428201/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="mailto:ankitsingh0702@gmail.com"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                            </div>
                        </div>
                    </div>
                    <div className="Aditya contactBox">
                        <div className="img"></div>
                        <div className="developer_info">
                            <div className="name">Aditya Arpan</div>
                            <p>Hey there, My self Aditya...!<br/>Nice to meet you.<br/>Let's connect</p>
                            <div className="contact_links">
                                <SocialIcon 
                                className='social_icons' 
                                url="https://github.com/arpanaditya"
                                target="_blank"
                                style={{ height: 40, width: 40}}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.instagram.com/adityaa_sahoo/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="https://www.linkedin.com/in/arpan-aditya/"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                                <SocialIcon 
                                className='social_icons' 
                                url="mailto:adityaarpansahoo@gmail.com"
                                target="_blank"
                                style={{ height: 40, width: 40 }}
                                ></SocialIcon>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <footer className='footersection'>
                <div>Made with</div>
                <Lottie 
                style={{height:50,width:50}}
                className='heart'
                animationData={heart}/>
                <a href="https://reactjs.org/" target='_blank'rel="noreferrer" >MENT-ALLY TEAM</a>
            </footer>
            <div className="copyright">Copyright <FaRegCopyright/> 2021 MENT-ALLY </div>
        </div>
    </div>
  );
};

export default About;
