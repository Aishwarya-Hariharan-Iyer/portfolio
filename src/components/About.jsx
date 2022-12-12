import { Button } from '@mui/material';
import { Parallax } from 'react-parallax';
import Lantern from '../images/lantern.jpg'
import ProjectCard from './ProjectCard';
const About = () => (
    <Parallax className='image' blur={0} bgImage={Lantern} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        
    </Parallax>
);

export default About
