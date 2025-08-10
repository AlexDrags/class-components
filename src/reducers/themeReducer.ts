interface IAction {
  type: string;
  themeColor: string;
}
export default function themeReducer(state: string, action: IAction) {
  switch (action.type) {
    case 'changeTheme':
      return action.themeColor;

    default:
      return state;
  }
}
