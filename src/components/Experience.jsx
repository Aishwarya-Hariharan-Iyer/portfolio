import { Parallax } from 'react-parallax';
import Autumn from '../images/autumn.jpg'

const Experience = () => (
    <Parallax className='image' blur={0} bgImage={Autumn} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">WORK EXPERIENCE</span>
        </div>
    </Parallax>
);

export default Experience
