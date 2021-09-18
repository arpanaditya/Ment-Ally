import style from './loader.module.css';
import Lottie from 'lottie-react';
import loader from '../../animation/Loading.json';
const Loader = () => {
    return ( 
        <div className={style.mainPageLoader}>
            <Lottie animationData={loader}/>
        </div>
     );
}
 
export default Loader;