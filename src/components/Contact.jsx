import { Parallax } from 'react-parallax';
import Autumn from '../images/autumn.jpg'
const Contact = () => (
    <Parallax className='image' blur={0} bgImage={Autumn} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">CONTACT ME</span>
        </div>
    </Parallax>
);

export default Contact
