import PropTypes from "prop-types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion,
} from "@/components/ui/accordion";

const SkillCard = (props) => {
  return (
    <div className="flex flex-col">
      <AccordionItem value={props.Type}>
        <AccordionTrigger className="text-base font-semibold hover:text-muted-foreground underline">{props.Type}</AccordionTrigger>
        <AccordionContent>
          <div className="text-gray-800 hover:text-muted-foreground dark:text-gray-300">
            {
              <>
                {props.Scores.map((val, indx) => (
                  <div key={indx}>
                    <div className="relative">
                      <span>{val.name}</span>
                      <span className="mb-1 text-base font-thin absolute right-0">
                        {val.level}
                      </span>
                    </div>
                    <div className="w-full rounded-full h-1.5 mb-4 bg-gray-300 dark:bg-gray-700 left-0">
                      <div
                        className="bg-black h-1.5 rounded-full dark:bg-white"
                        style={{ width: val.score }}
                      ></div>
                    </div>
                  </div>
                ))}
              </>
            }
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

SkillCard.propTypes = {
  Type: PropTypes.string.isRequired, // Update here
  Scores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
    })
  ).isRequired,
};


import skillsdata from "../data/skills.json";
export const Skills = () => {
  return (
    <div className="mb-10 mt-5">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
          My Skills
        </h1>
        <p className="text-gray-800 dark:text-gray-300">
          My technical & miscellaneous skills
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {skillsdata.map((val, idx) => (
          <SkillCard
            key={idx}
            Scores={val.Scores}
            Type={val.Type}
            className="flex"
          />
        ))}
      </Accordion>
    </div>
  );
};
