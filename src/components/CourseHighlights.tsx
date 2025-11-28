"use client";

import { useState } from "react";
import { DetailedBullet } from "./DetailedBullet";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const modules = [
  {
    title: "Computer Networks",
    description: "OSI, TCP/IP, subnets, STP, local & global routing, virtualization",
  },
  {
    title: "Computer Security",
    description: "Hashing, (a)symmetric encryption, digital signatures, authentication, attacks",
  },
  {
    title: "Artificial Intelligence",
    description: "Tree and graph search algorithms, A*, robots, minimax, alpha-beta pruning",
  },
  {
    title: "Machine Learning",
    description: "Regression, classification, (convolutional) neural networks, SVMs",
  },
  {
    title: "Digital Systems",
    description: "Logic gates, CPU architecture, assembly, context switching, IO",
  },
  {
    title: "Databases",
    description: "SQL, B+ trees, transactions, parallelisation, ACID properties, indexing",
  },
  {
    title: "Compilers",
    description: "Lexical analysis, parsing, semantic analysis, code generation, optimization, context-free grammars",
  },
  {
    title: "Computer Graphics",
    description: "Rendering pipeline, transformations, shaders, ray tracing, texturing",
  },
  {
    title: "Concurrency",
    description: "Synchronisation, deadlocks, livelocks, semaphores, monitors",
  },
];

export function CourseHighlights() {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 4; // Show first 2 rows (2 columns * 2 rows = 4 items)

  const displayedModules = isExpanded ? modules : modules.slice(0, initialCount);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-blue-800 pb-2 border-b border-blue-100">Course Module Highlights</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-4">
        {displayedModules.map((module) => (
          <DetailedBullet key={module.title} title={module.title} description={module.description} />
        ))}
      </ul>

      {modules.length > initialCount && (
        <div className="flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            {isExpanded ? (
              <>
                Show Less <FaChevronUp />
              </>
            ) : (
              <>
                Show More <FaChevronDown />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
