import Project from "@/components/ProjectCard";
import caThumbnail from "@/assets/images/chat-app.png";

export default function Projects() {
  return (
      <section className="pb-5 w-full bg-gray-950" id="projects">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Projects
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-7 md:mx-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap mt-12 md:justify-start ">
        <Project
            title="Chat App"
            description="A website where you can chat other people."
            image={caThumbnail}
            link="https://chat-app-1-dpjv.onrender.com"
            repo="https://github.com/johnrolebaste/chat-app"
            langs={[
              "NodeJS",
              "ReactJS", 
              "ExpressJS", 
            ]}
          />
        </div>
      </section>
  );
}
