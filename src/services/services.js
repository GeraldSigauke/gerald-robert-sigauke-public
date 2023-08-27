import { ps } from '../data';

export function getProject() {
  const projectList = ps;
  return projectList;
}

export function filterProject(pokeType) {
  let filteredProject = getProject().filter(
    (type) => type.category === pokeType
  );
  return filteredProject;
}
