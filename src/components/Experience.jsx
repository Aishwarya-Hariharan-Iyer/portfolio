import { Parallax } from 'react-parallax';
import Snow from '../images/snow.jpg'

const Experience = () => (
    <Parallax className='image' blur={0} bgImage={Snow} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">WORK EXPERIENCE</span>
        </div>
    </Parallax>
);

export default Experience
