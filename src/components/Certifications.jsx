import { CertificateCard } from "./CertificateCard";
import Specializations from "../data/specializations.json";
// import Courses from "../data/courses.json"
export const Certifications = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-white">My Certifications</h1>
      <section id="Specializations" className="mt-5">
        {/* <h1 className="text-xl font-bold">Specializations</h1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0">
          {Specializations.map((val, index) => (
            <CertificateCard
              key={val.id || index} // Use a unique identifier if available, or fallback to index
              Title={val.Title}
              Url={val.Url}
              From={val.From}
              Courses={val.Details.Courses}
              Skills={val.Details.Skills}
            />
          ))}
        </div>
      </section>

      {/* <section id="Courses" className="mt-5">
      <h1 className="text-xl font-bold">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {Courses.map((val,index)=>(
          <CertificateCard
          key={val.id || index}
          Title={val.Title}
          Url={val.Url}
          From={val.From}
          />
        ))}
        </div>
      </section> */}
    </div>
  );
};