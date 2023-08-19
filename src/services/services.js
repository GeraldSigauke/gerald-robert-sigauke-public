import { pokemons, ps } from '../data';

export function getPokemon() {
  const pokemonList = pokemons;
  return pokemonList;
}

export function filterPokemon(pokeType) {
  let filteredPokemon = getPokemon().filter(
    (type) => type.category === pokeType
  );
  return filteredPokemon;
}

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
