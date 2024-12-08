import PropTypes from "prop-types";
import { useState } from "react";
import img from "../assets/link.png";

export const CertificateCard = (props) => {
  const [isexpanded, changeExpanded] = useState(false);

  return (
    <div className="relative block max-w-s p-5  border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-gray-700">
      {/* Positioned Icons */}
      <div className="relative h-12 mb-2">
        {/* Top-right: Link */}
        <a
          href={props.Url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 right-0 m-2"
        >
          <img className="h-8 w-8 invert opacity-60 hover:opacity-100" src={img} alt="Link icon" />
        </a>

        {/* Top-left: SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute top-0 left-0 ml-1 h-11 w-11"
        >
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
          <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
        </svg>
      </div>

      {/* Content */}
      <h5 className="mb-2 text-xl tracking-tight text-white">
        {props.Title}
      </h5>
      <p className="font-normal text-gray-400">
        From {props.From}
      </p>

      {/* Animated Show More/Less Button */}
      <button
        onClick={() => changeExpanded(!isexpanded)}
        className="mt-2 text-sm font-semibold text-white hover:text-gray-300 flex items-center space-x-2"
      >
        <span>{isexpanded ? "Show less" : "Show more"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isexpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isexpanded && (
        <p className="px-3 py-[6px] font-medium font-jetbrains bg-bg-color-light/60 dark:bg-bg-color-dark/60 rounded-full text-10px">
          Courses: <br />
          {props.Courses.map((val, index) => (
            <li
              key={index}
              className="inline-block p-1.5 m-1 bg-neutral-800 text-white rounded-md shadow-md text-sm"
            >
              {val}
            </li>
          ))}
          <br />
          Skills Aquired: <br />
          {props.Skills.map((val, index) => (
            <li
              className="inline-block p-1.5 m-1 bg-neutral-800 text-white rounded-md shadow-md text-sm"
              key={index}
            >
              {val}
            </li>
          ))}
        </p>
      )}
    </div>
  );
};

CertificateCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Url: PropTypes.string.isRequired,
  From: PropTypes.string.isRequired,
  Courses: PropTypes.array.isRequired,
  Skills: PropTypes.array.isRequired,
};
