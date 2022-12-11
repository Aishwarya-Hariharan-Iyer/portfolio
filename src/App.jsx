import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Milestone from './components/milestones';
import Projects from './components/projects';

function App() {
    return (
        <div>
          <About />
          <Milestone />
          <Experience/>
          <Projects/>
          <Contact />
        </div>
      );
}

export default App
