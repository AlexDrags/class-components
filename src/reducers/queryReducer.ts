interface IAction {
  type: string;
  query: string;
}
export default function quryReducer(state: string, action: IAction): string {
  console.log(state, action.query);
  if (action.type === 'change') {
    console.log(action.query);
    return action.query;
  }
  return state;
}
