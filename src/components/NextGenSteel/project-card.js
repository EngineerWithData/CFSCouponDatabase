import * as React from 'react';

function ProjectCard({ className, icon, title, content }) {

  return (
    <div className={`${className || ""} px-8 py-4 my-4 mx-6 rounded-2xl bg-indigo-200`}>
      <div className="my-1 flex items-center justify-center gap-3">
        {icon}
        <div className="text-3xl font-semibold text-indigo-600">
          {title}
        </div>
      </div>
      {content}
    </div>
  );
}

export default ProjectCard;