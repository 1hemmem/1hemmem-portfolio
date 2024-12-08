import PropTypes from "prop-types";
import img from "../assets/link.png";
export const ProjectCard = (props) => {
  return (
    <a href={props.Link} target="_blank">
      <div className="relative block max-w-s p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-gray-700">
        <div className="relative">
          <img
            className="h-7 w-7 invert opacity-60 hover:opacity-100 absolute top-0 right-0"
            src={img}
            alt="Link icon"
          />
          <h1 className="text-white font-bold text-2xl mb-3">{props.Title}</h1>
        </div>
        <p className="text-gray-300 text-sm mb-3">{props.Description}</p>
        {props.Technologies.map((value, index) => (
          <li
            className="inline-block p-1.5 m-1 bg-neutral-800 text-white rounded-md shadow-md text-sm"
            key={index}
          >
            {value}
          </li>
        ))}
      </div>
    </a>
  );
};

// Fix the propTypes key
ProjectCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Technologies: PropTypes.array.isRequired,
  Link: PropTypes.string.isRequired,
};
