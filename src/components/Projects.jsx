import PropTypes from "prop-types";
import projectsdata from "../data/projects.json";

function ProjectCard(props) {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">{props.Title}</h1>
      </div>
      <p className="text-gray-300 text-sm mb-3">{props.Description}</p>
      {props.Technologies.map((value, index) => (
        <li
          className="inline-block p-1 m-0.5 bg-gray-300 text-black dark:bg-neutral-800 dark:text-white rounded-md shadow-md text-sm"
          key={index}
        >
          {value}
        </li>
      ))}
      <br />
      <br />
      <a
        href={props.Link}
        target="_blank"
        className="underline font-semibold text-sm flex items-center gap-2 hover:font-bold hover:text-gray-300"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          height="24"
          role="presentation"
          viewBox="0 0 24 24"
          width="24"
          {...props}
        >
          <path
            d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"
            fill="currentColor"
          />
          <path
            d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"
            fill="currentColor"
          />
        </svg>
        visit on github
      </a>
      <br />
      <hr />
    </div>
  );
}

ProjectCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Technologies: PropTypes.array.isRequired,
  Link: PropTypes.string.isRequired,
};

export const Projectss = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="">
        <div className="">
          <h1 className="text-3xl font-bold text-white mt-16 mb-4">Projects</h1>
          <p className="text-white/70 mb-10 ">
            Projects are my go-to for learning new technologies and applying
            them. Each project represents a journey of exploration and
            skill-building.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {projectsdata.map((value, index) => (
            <ProjectCard
              key={index}
              Title={value.Title}
              Description={value.Description}
              Link={value.Link}
              Technologies={value.Technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
