import MyHero from "../assets/img/bg_my_hero.jpg";
import EightySix from "../assets/img/bg_eighty_six.jpg";
import ToBeHeroX from "../assets/img/bg_to_be_hero_x.jpg";
import DemonSlayer from "../assets/img/bg_demon_slayer.jpeg";
import Nesekoi from "../assets/img/bg_nesekoi.jpg";
import BlueLock from "../assets/img/bg_blue_lock.jpeg";

type BgProject = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
};

const Project = () => {
  const projects: BgProject[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: MyHero,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "Fish Counting with Digital Image Processing",
      description:
        "A web application that allows users to upload images of fish and count the number of fish in the image using advanced digital image processing techniques.",
      image: EightySix,
      technologies: ["Python"],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Progress",
    },
    {
      title: "Waste Classification with Machine Learning",
      description:
        "A web application that allows users to upload images of waste and classify the waste using machine learning algorithms.",
      image: ToBeHeroX,
      technologies: ["Python"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "UX/UI Application Design",
      description:
        "A web application that allows users to upload images of waste and classify the waste using machine learning algorithms.",
      image: DemonSlayer,
      technologies: ["Figma"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "Example Project",
      description: "This is Example Description",
      image: Nesekoi,
      technologies: ["Example"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      title: "Example Project",
      description: "This is Example Description",
      image: BlueLock,
      technologies: ["Example"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
  ];

  const getStatusColor = (status: string) => {
    return status == "Completed" ? "bg-green-500" : "bg-yellow-500";
  };

  return (
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of my web development projects, from simple websites to
            complex applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
        bg-slate-800/50
        border-slate-700
        rounded-2xl
        backdrop-blur-sm
        hover:bg-slate-800/70
        transition-all
        duration-300
        transform
        hover:scale-105
        overflow-hidden
        flex flex-col
      "
            >
              <div className="relative">
                <img src={project.image} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  <div
                    className={`${getStatusColor(
                      project.status
                    )} text-white px-2 py-1 rounded-md text-sm`}
                  >
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between space-y-8 flex-grow">
                <div className="flex flex-col justify-between gap-base">
                  <h6 className="font-semibold text-slate-200 truncate">
                    {project.title}
                  </h6>
                  <small className="text-slate-400 text-sm mb-4 truncate">
                    {project.description}
                  </small>
                </div>

                <div className="flex flex-col gap-base">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <small
                        key={techIndex}
                        className="tag text-slate-300 border border-gray-500/30"
                      >
                        {tech}
                      </small>
                    ))}
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-tr from-sky-300 via-violet-400 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button className="flex-1 border border-slate-600 text-slate-300 bg-slate-700/50 hover:bg-slate-700 hover:text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"
                      >
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Project;
