import hemmemImage from "../assets/hemmem.jpg";
export const AboutMe = () => {
  return (
    <div className="pb-10">
      <section className="flex flex-col items-start">
        <img
          src={hemmemImage}
          loading="lazy"
          className="rounded-full w-32"
        ></img>
        <br />
      </section>

      <h1 className="text-2xl font-bold">Assalamu Alaikum, I’m Hemmem 👋</h1>
      <br />
      <p className="text-base font-sans">
        I’m an AI developer with robust backend expertise, driven by a passion
        for solving complex problems using cutting-edge technologies.
        <br />
        <br />
        I consider myself as a solution-oriented learner, I learn as much as I
        need to get the job done.
        <br />
        <br />
        Ah, almost forgot.. I use arch btw
        <br />
        <br />
        Welcome to my personal space, where I share my projects and write about
        exciting topics in technology.
      </p>
    </div>
  );
};
