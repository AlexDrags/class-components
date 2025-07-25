export default function handleChangeQuery(query: string) {
  dispatch({
    type: 'change',
    query: query,
  });
}
