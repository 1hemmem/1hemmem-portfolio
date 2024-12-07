import { AboutMe } from "../components/AboutMe";
import { Certifications } from "../components/Certifications";
import { Skills } from "../components/Skills";
export const Home = () => {
  return (
    <div className="pt-10 p-1 m-6">
      {/* About me: Image + Paragraph */}
      <AboutMe/>
      {/* Skills */}
      <Skills/>
      {/* Certificate */}
      <Certifications/>
      {/* Skills */}

    </div>
  );
};
