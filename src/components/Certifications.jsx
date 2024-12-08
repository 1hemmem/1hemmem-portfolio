import { CertificateCard } from "./CertificateCard";
import Courses from "../data/courses.json";
// import Courses from "../data/courses.json"
export const Certifications = () => {
  return (
    <div className="mb-5 mt-10">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-2">My Certifications</h1>
      <p className="text-gray-800 dark:text-gray-300">My certification with the courses included and the skilles aquired</p>
      <section id="Specializations" className="mt-5">
        {/* <h1 className="text-xl font-bold">Specializations</h1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          {Courses.map((val, index) => (
            <CertificateCard
              key={index}
              Title={val.Title}
              Url={val.Url}
              From={val.From}
              Courses={val.Details.Courses}
              Skills={val.Details.Skills}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
