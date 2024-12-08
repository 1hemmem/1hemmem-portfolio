import { SkillCard } from "./SkillCard";
import skillsdata from "../data/skills.json"
export const Skills = () => {
  return (
    <div className="mb-10 mt-5">
        <div className="mb-5">
      <h1 className="text-3xl font-bold text-white mb-4">Skills</h1>
      <p className="text-gray-300">My technical & miscellaneous skills</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
      {skillsdata.map((val,idx)=>(
      <SkillCard key={idx} Scores={val.Scores} Type={val.Type} className="flex"/>
      ))}
      </div>
    </div>
  );
};
