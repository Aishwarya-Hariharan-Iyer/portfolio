import { Parallax } from 'react-parallax';
import Forest from '../images/forest.jpg'

const Projects = () => (
    <Parallax className='image' blur={0} bgImage={Forest} strength={100} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">PROJECTS</span>
        </div>
    </Parallax>
);

export default Projects