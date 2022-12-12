import { Parallax } from 'react-parallax';
import Forest from '../images/forest.jpg'
import ProjectCard from './ProjectCard';

const Projects = () => (
    <Parallax className='image' blur={0} bgImage={Forest} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">PROJECTS</span>
        </div>
        <div className='project-card'>
        <ProjectCard/>
        </div>
    </Parallax>
);

export default Projects