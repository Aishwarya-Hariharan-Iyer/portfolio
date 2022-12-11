import { Parallax } from 'react-parallax';
import Clouds from '../images/clouds.jpg'
const Contact = () => (
    <Parallax className='image' blur={0} bgImage={Clouds} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">CONTACT ME</span>
        </div>
    </Parallax>
);

export default Contact
