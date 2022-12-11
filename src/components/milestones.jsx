import { Parallax } from 'react-parallax';
import Clouds from '../images/clouds.jpg'

const Milestone = () => (
    <Parallax className='image' blur={0} bgImage={Clouds} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">MILESTONES</span>
        </div>
    </Parallax>
);

export default Milestone