import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Item } from "./Item";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
}

export function Card({ title, description, technologies, githubUrl, projectUrl }: CardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)] max-w-sm flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5 text-white relative">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
        <h3 className="text-2xl font-bold relative z-10">{title}</h3>
      </div>
      <div className="p-6 flex-grow flex flex-col relative">
        <div className="flex-grow">
          <p className="text-gray-600 mb-4">
            {description.split("\\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < description.split("\\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <div className="flex gap-2 mb-4 flex-wrap">
            {technologies.map((tech) => (
              <Item key={tech} name={tech} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:text-blue-700"
              aria-label={`Visit ${title} website`}
            >
              <div className="flex items-center gap-2">
                <FaExternalLinkAlt size={"1.5em"} />
                <span className="ml-2">Visit Website</span>
              </div>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:text-blue-700"
              aria-label={`View ${title} on GitHub`}
            >
              <div className="flex items-center gap-2">
                <SiGithub size={"2em"} />
                <span className="ml-2">View on GitHub</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
