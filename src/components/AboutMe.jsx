import { Connect } from "../components/Connect";
import hemmemImage from "../assets/hemmem.jpg";
export const AboutMe = () => {
  return (
    <div className="pb-10">
      <section className="flex items-center justify-between mb-10">
        <div>
          <img src={hemmemImage} loading="lazy" className="rounded-full w-32" />
        </div>
        <div className="flex flex-col space-y-4 items-start">
          <Connect />
        </div>
      </section>
      <h1 className="text-3xl font-bold">Assalamu Alaikum, I’m Hemmem 👋</h1>
      <br />
      <div className="text-gray-300">
        <p className="text-base font-sans">
          I’m an AI developer with robust backend expertise, driven by a passion
          for solving complex problems using cutting-edge technologies. I am a
          solution-oriented learner, I learn as much as I need to get the job
          done.
          <br />
          <br />
          Ah, almost forgot.. I use arch btw 🤓
          <br />
          <br />
          <span className="font-semibold">Welcome to my personal space, where I share my projects and write
          about exciting topics.</span>
        </p>
      </div>
    </div>
  );
};
