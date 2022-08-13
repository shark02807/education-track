import { createContext, useContext, useReducer } from "react";
import { ActionBase } from "../helper/reducer";
import { User } from "../model/user";
import { IAuthService } from "../service/auth";

export interface IAuthenticationContext {
  /**
   * The current user.
   */
  user?: User;
  /**
   * Whether the authentication is loading.
   */
  isLoading?: boolean;
  /**
   * call to login the user.
   */
  login: (email: string, password: string) => void;
  /**
   * call to logout the user.
   */
  logout: () => void;
}

type Action<
  TAction extends AuthActionType,
  TPayload extends Partial<IAuthenticationContext> | void = void
> = ActionBase<TAction, TPayload>;

type AuthAction =
  | Action<"login">
  | Action<"login_success", { user: User }>
  | Action<"login_failure">
  | Action<"logout">;

type AuthActionType = "login" | "logout" | "login_success" | "login_failure";

function reducer(
  state: IAuthenticationContext,
  action: AuthAction
): IAuthenticationContext {
  switch (action.type) {
    case "login":
      return { ...state, isLoading: true };
    case "logout":
      return { ...state, user: undefined };
    case "login_success":
      return { ...state, user: action.payload.user, isLoading: false };
    case "login_failure":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

interface IAuthenticationContextProvider {
  children: React.ReactNode;
  authService: IAuthService;
}

export const AuthenticationContextProvider = ({
  children,
  authService,
}: IAuthenticationContextProvider) => {
  const login = async (email: string, password: string) => {
    dispatch({ type: "login" });

    try {
      dispatch({
        type: "login_success",
        payload: { user: await authService.login(email, password) },
      });
    } catch {
      dispatch({
        type: "login_failure",
      });
    }
  };
  const logout = () =>
    dispatch({
      type: "logout",
    });
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    login,
    logout,
  } as IAuthenticationContext);

  return (
    <AuthenticationContext.Provider value={state}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};

export const INITIAL_STATE: IAuthenticationContext = {
  user: undefined,
  isLoading: undefined,
  login: () => {},
  logout: () => {},
};

export const AuthenticationContext =
  createContext<IAuthenticationContext>(INITIAL_STATE);
