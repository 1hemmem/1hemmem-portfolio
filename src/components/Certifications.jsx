import PropTypes from "prop-types";
import Courses from "../data/courses.json";

const CertificateCard = (props) => {

    return (
        <div>
            <a
                href={props.Url}
                target="_blank"
                className="not-prose group hover:text-muted-foreground inline-flex max-w-max items-start underline font-mono font-semibold"
            >
                {props.Title}
                <svg
                    viewBox="0 0 20 30"
                    className="size-4 fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out ml-1 -rotate-45"
                >
                    <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        class="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
                    ></line>
                    <polyline
                        points="12 5 19 12 12 19"
                        className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                    ></polyline>
                </svg>
            </a>
            <div className="text-sm">
                <p>From: {props.From}</p>
                <p>Issued at: {props.IssuedAt}</p>
            </div>
        </div>
    )
}

CertificateCard.propTypes = {
    Title: PropTypes.string.isRequired,
    Url: PropTypes.string.isRequired,
    From: PropTypes.string.isRequired,
    Courses: PropTypes.array.isRequired,
    Skills: PropTypes.array.isRequired,
    IssuedAt: PropTypes.string.isRequired,
};


export const Certifications = () => {
    return (
        <div className="mb-5 mt-10">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">My Certifications</h1>
            <p className="text-gray-800 dark:text-gray-300">My official certification from the courses I have taken</p>
            <section id="Specializations" className="mt-5 ">
                {/* <h1 className="text-xl font-bold">Specializations</h1 */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {Courses.map((val, index) => (
                        <CertificateCard
                            key={index}
                            Title={val.Title}
                            Url={val.Url}
                            From={val.From}
                            IssuedAt={val.IssuedAt}
                            Courses={val.Details.Courses}
                            Skills={val.Details.Skills}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}