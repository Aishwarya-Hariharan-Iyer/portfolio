import { Parallax } from 'react-parallax';
import Autumn from 'src/assets/autumn.jpg'
const About = () => (
    <Parallax className='image' blur={0} bgImage={Autumn} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">WORK EXPERIENCE</span>
        </div>
    </Parallax>
);

export default ImageOne
