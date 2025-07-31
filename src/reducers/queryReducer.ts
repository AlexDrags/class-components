interface IAction {
  type: string;
  query: string;
}
export default function quryReducer(state: string, action: IAction): string {
  if (action.type === 'change') {
    return action.query;
  }
  return state;
}
