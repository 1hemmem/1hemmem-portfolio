import { AboutMe } from "../components/AboutMe";
import { Certifications } from "../components/Certifications";
import { Skills } from "../components/Skills";
// import { Projects } from "./Projects";
export const Home = () => {
  return (
    <div className="pt-10 p-1">
      {/* About me: Image + Paragraph */}
      <AboutMe/>
      {/* Skills */}
      <Skills/>
      {/* Certificate */}
      <Certifications/>
      {/* Projects */}
      {/* <Projects/> */}
    </div>
  );
};
