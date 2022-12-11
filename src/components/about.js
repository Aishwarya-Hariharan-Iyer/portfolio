import { Parallax } from 'react-parallax';
import Lantern from 'src/assets/lantern.jpg'
const About = () => (
    <Parallax className='image' blur={0} bgImage={Lantern} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">ABOUT ME</span>
        </div>
    </Parallax>
);

export default ImageOne
