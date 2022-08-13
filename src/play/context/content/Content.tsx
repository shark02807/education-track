import { createContext, useContext, useReducer } from "react";
import { ActionBase } from "../../../helper/reducer";
import { TrackShort } from "../../../model/track";
import { IContentService } from "../../../service/content";

export interface IContentContext {
  /**
   * The current tracks.
   */
  tracks?: TrackShort[];
  /**
   * Whether tracks are loading
   */
  isLoading?: boolean;
  /**
   * call to load tracks
   */
  loadTracks: () => void;
}

type Action<
  TAction extends ContentActionType,
  TPayload extends Partial<IContentContext> | void = void
> = ActionBase<TAction, TPayload>;

type ContentAction =
  | Action<"load_content">
  | Action<"load_content_success", { tracks: TrackShort[] }>
  | Action<"load_content_failure">;

type ContentActionType =
  | "load_content"
  | "load_content_success"
  | "load_content_failure";

function reducer(
  state: IContentContext,
  action: ContentAction
): IContentContext {
  switch (action.type) {
    case "load_content":
      return { ...state, isLoading: true };
    case "load_content_success":
      return { ...state, tracks: action.payload.tracks, isLoading: false };
    case "load_content_failure":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

interface IContentContextProvider {
  children: React.ReactNode;
  contentService: IContentService;
}

export const ContentContextProvider = ({
  children,
  contentService,
}: IContentContextProvider) => {
  const loadTracks = async () => {
    dispatch({ type: "load_content" });

    try {
      dispatch({
        type: "load_content_success",
        payload: { tracks: await contentService.getContent() },
      });
    } catch {
      dispatch({
        type: "load_content_failure",
      });
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    loadTracks,
  } as IContentContext);

  return (
    <ContentContext.Provider value={state}>{children}</ContentContext.Provider>
  );
};

export const useContentContext = () => {
  return useContext(ContentContext);
};

export const INITIAL_STATE: IContentContext = {
  loadTracks: () => {},
  isLoading: undefined,
  tracks: undefined,
};

const ContentContext = createContext<IContentContext>(INITIAL_STATE);
