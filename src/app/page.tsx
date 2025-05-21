import { DetailedBullet } from "@/components/DetailedBullet";
import { Item } from "@/components/Item";
import { Card } from "@/components/Card";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-20 px-6 flex justify-center items-center">
        <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white text-center py-10 px-12 rounded-xl shadow-lg max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-4">Hi, I&apos;m Tiger</h1>
          <p className="text-lg">
            I&apos;m an Undergraduate Student at the University of Oxford
            <br />
            Studying Computer Science
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 leading-relaxed mb-6">
              I&apos;m a Computer Science undergraduate at the University of Oxford with a passion for low-level
              systems, full-stack development, and networks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Course Modules */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-800 pb-2 border-b border-blue-100">
                  Course Module Highlights
                </h3>
                <ul className="space-y-3">
                  <DetailedBullet
                    title="Computer Networks"
                    description="OSI, TCP/IP, subnets, local & global routing, virtualization"
                  />
                  <DetailedBullet
                    title="Digital Systems"
                    description="Logic gates, CPU architecture, assembly, context switching, IO"
                  />
                  <DetailedBullet
                    title="Computer Security"
                    description="Hashing, (a)symmetric encryption, digital signatures, authentication, attacks"
                  />
                  <DetailedBullet
                    title="Databases"
                    description="SQL, B+ trees, transactions, parallelisation, ACID properties, indexing"
                  />
                  <DetailedBullet
                    title="Artificial Intelligence"
                    description="Search algorithms, robots, minimax, alpha-beta pruning"
                  />
                  <DetailedBullet
                    title="Compilers"
                    description="Lexical analysis, parsing, semantic analysis, code generation, optimization"
                  />
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-800 pb-2 border-b border-blue-100">Technical Skills</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <Item name="Python" />
                      <Item name="JavaScript" />
                      <Item name="TypeScript" />
                      <Item name="C/C++" />
                      <Item name="Rust" />
                      <Item name="Scala" />
                      <Item name="Haskell" />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Tools & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <Item name="Bash" />
                      <Item name="Git" />
                      <Item name="Docker" />
                      <Item name="Flask" />
                      <Item name="Next.js" />
                    </div>
                  </div>
                  {/* <div className="bg-blue-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Currently Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      <Item name="PostgreSQL" />
                      <Item name="MongoDB" />
                      <Item name="Redis" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <Card
              title="Personal Website"
              description="My portfolio website built with Next.js and TailwindCSS"
              technologies={["Next.js", "TypeScript", "Tailwind"]}
              githubUrl="https://github.com/username/website"
            />
            <Card
              title="Task Manager"
              description="A full-stack task management application with authentication and real-time updates"
              technologies={["React", "Node.js", "MongoDB"]}
              githubUrl="https://github.com/username/task-manager"
            />
            <Card
              title="Algorithm Visualizer"
              description="Interactive visualization of common algorithms like sorting and pathfinding"
              technologies={["JavaScript", "Canvas API", "CSS"]}
              githubUrl="https://github.com/username/algorithm-viz"
            />
            <Card
              title="Chat Application"
              description="Real-time messaging app with end-to-end encryption and group chat support"
              technologies={["React", "Firebase", "WebSockets"]}
              githubUrl="https://github.com/username/chat-app"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-10 -mb-10"></div>

            <div className="relative">
              <p className="text-gray-700 mb-8 text-center md:text-lg">
                Have a project in mind? Let&apos;s collaborate and make something awesome together.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaEnvelope className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:contact@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm"
                  >
                    tiger@tigertaylor.xyz
                  </a>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaPhone className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <a
                    href="tel:+447123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm"
                  >
                    +44 7496 588340
                  </a>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaLinkedin className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/tiger-taylor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm"
                  >
                    linkedin.com/in/tiger-taylor
                  </a>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://links.tigertaylor.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 font-medium inline-block rounded-lg shadow-md transition-colors duration-300"
                >
                  View All Links
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
