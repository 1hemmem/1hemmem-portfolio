import { useState } from "react";
import PropTypes from "prop-types";

export const SkillCard = (props) => {
  const [opened, setOpened] = useState(false);
  return (
    <div >
      <button
        onClick={() => setOpened(!opened)}
        className="text-xl font-bold flex items-center mb-4"
      >
        <span className="mr-2">{props.Type}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 transform transition-transform duration-300 ${
            opened ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div className="">
      {opened && (
        <>
          {props.Scores.map((val, indx) => (
            <div key={indx}>
              <div className="relative">
                <span>{val.name}</span>
                <span className="mb-1 text-base font-medium dark:text-white absolute right-0">
                  {val.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 left-0">
                <div
                  className="bg-white h-1.5 rounded-full dark:bg-white"
                  style={{ width: val.score }}
                ></div>
              </div>
            </div>
          ))}
        </>
      )}
      </div>
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
