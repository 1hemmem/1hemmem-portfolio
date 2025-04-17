import { useState } from "react";
import PropTypes from "prop-types";
import skillsdata from "../data/skills.json";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const SkillProgressBar = ({ name, level, score }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{level}</span>
    </div>
    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className="h-full rounded-full bg-primary"
        style={{ width: score }}
      ></div>
    </div>
  </div>
);

SkillProgressBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skillsdata[0]?.Type || "");

  const activeSkillData = skillsdata.find(
    (skill) => skill.Type === activeSkill,
  );

  return (
    <div className="pb-20">
      <div className="py-10">
        <h1 className="text-3xl font-bold">My Skills</h1>
        <p>My Technical & miscellaneous skills</p>
      </div>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        {/* Navigation Sidebar */}
        <div className="md:w-1/3">
          <nav className="flex flex-col space-y-1">
            {skillsdata.map((skill, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSkill(skill.Type)}
                className={cn(
                  "flex px-3 py-2 text-base font-medium transition-colors m-0",
                  activeSkill === skill.Type
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {skill.Type}
              </button>
            ))}
          </nav>
        </div>

        <Separator orientation="vertical" className="hidden md:block" />

        <div className="flex-1 md:w-3/4">
          {activeSkillData && (
            <div className="space-y-4">
              <div className="space-y-6">
                {activeSkillData.Scores.map((skill, index) => (
                  <SkillProgressBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    score={skill.score}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
