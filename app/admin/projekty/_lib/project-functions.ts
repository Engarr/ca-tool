import { Id } from '../../_types/member-type';
import { ProjectType } from '../../_types/project-type';

export const updateProjectList = (
  newConfirmedProjectList: ProjectType[],
  columnProjectId: Id | undefined,
  newProjectTitle: string,
  newProjectTechnologies: string[]
) => {
  const newProject = {
    id: new Date().toISOString().replace(/\D/g, ''),
    title: newProjectTitle,
    technologies: newProjectTechnologies,
  };

  const updatedProjectList = columnProjectId
    ? newConfirmedProjectList.map((project) =>
        project.id === columnProjectId
          ? {
              ...project,
              title: newProjectTitle,
              technologies: newProjectTechnologies,
            }
          : project
      )
    : [...newConfirmedProjectList, newProject];

  return updatedProjectList;
};
