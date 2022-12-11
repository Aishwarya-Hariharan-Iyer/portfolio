import { Parallax } from 'react-parallax';
import Forest from '../images/forest.jpg'

const Project = () => (
    <Parallax className='image' blur={0} bgImage={Forest} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">PROJECTS</span>
        </div>
    </Parallax>
);

export default Project