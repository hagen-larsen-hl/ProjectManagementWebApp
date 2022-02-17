import { Project } from './project';

export const Projects = ({ projects, deleteProject }) => {
  return (
    <div className="flex-1">
      {projects.map((project) => (
        <Project key={project.id} project={project} deleteProject={deleteProject} />
      ))}
    </div>
  );
};
