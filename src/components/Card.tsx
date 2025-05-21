import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { Item } from "./Item";

interface CardProps {
  title: string;
  description: string;
  image?: string | React.ReactNode;
  technologies: string[];
  githubUrl?: string;
}

export function Card({ title, description, image, technologies, githubUrl }: CardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)] max-w-md flex flex-col">
      <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
        {typeof image === "string" ? (
          <Image src={image} alt={title} className="w-full h-full object-cover" width={400} height={200} />
        ) : (
          image || <span className="text-white text-4xl font-light text-center px-4">{title}</span>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col relative">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex gap-2 mb-4 flex-wrap">
            {technologies.map((tech) => (
              <Item key={tech} name={tech} />
            ))}
          </div>
        </div>
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
  );
}
