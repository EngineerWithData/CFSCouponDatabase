import * as React from 'react';
import YAMLData from '../../../content/nextgensteel.yaml';
import ProjectCard from "./project-card"

function AboutCard({ className }) {

  return (
    <ProjectCard
      className={className || ""}
      title="About"
      icon={
        <div className="bg-indigo-600 p-1.5 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
        </div>
      }
      content={
        YAMLData.about.map(item => {
          return (
            <div className="flex items-center gap-1">
              <div className="bg-blue-200 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-700 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="px-2 py-1 text-xl text-gray-600">{item}</div>
            </div>
          );
        })
      }
    />
  );
}

export default AboutCard