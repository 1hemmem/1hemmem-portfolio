import { AboutMe } from "../components/AboutMe";
import { Certifications } from "../components/Certifications";
export const Home = () => {
  return (
    <div className="pt-10 p-1 m-6">
      {/* About me: Image + Paragraph */}
      <AboutMe/>
      {/* Certificate */}
      <Certifications/>
      {/* Skills */}

    </div>
  );
};
