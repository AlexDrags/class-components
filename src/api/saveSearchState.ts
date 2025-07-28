export default function saveSearchState(stateSearch: string) {
  localStorage.setItem('lastSearch', stateSearch);
}
