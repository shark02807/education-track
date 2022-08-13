import { createContext, useContext, useReducer } from "react";
import { ActionBase } from "../../../helper/reducer";
import { Track } from "../../../model/track";
import { ITrackDetailsService } from "../../../service/track-details";

export interface ITrackDetailsContext {
  /**
   * The current track.
   */
  track?: Track;
  /**
   * Whether track are loading
   */
  isLoading?: boolean;
  /**
   * call to load track
   */
  loadTrack: (trackSlug: string) => void;
}

type Action<
  TAction extends TrackDetailsActionType,
  TPayload extends Partial<ITrackDetailsContext> | void = void
> = ActionBase<TAction, TPayload>;

type TrackDetailsAction =
  | Action<"load_track_details">
  | Action<"load_track_details_success", { track: Track }>
  | Action<"load_track_details_failure">;

type TrackDetailsActionType =
  | "load_track_details"
  | "load_track_details_success"
  | "load_track_details_failure";

function reducer(
  state: ITrackDetailsContext,
  action: TrackDetailsAction
): ITrackDetailsContext {
  switch (action.type) {
    case "load_track_details":
      return { ...state, isLoading: true };
    case "load_track_details_success":
      return { ...state, track: action.payload.track, isLoading: false };
    case "load_track_details_failure":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

interface ITrackDetailsContextProvider {
  children: React.ReactNode;
  trackDetailsService: ITrackDetailsService;
}

export const TrackDetailsContextProvider = ({
  children,
  trackDetailsService,
}: ITrackDetailsContextProvider) => {
  const loadTrack = async (trackSlug: string) => {
    dispatch({ type: "load_track_details" });

    try {
      dispatch({
        type: "load_track_details_success",
        payload: { track: await trackDetailsService.getTrackDetails(trackSlug) },
      });
    } catch {
      dispatch({
        type: "load_track_details_failure",
      });
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    loadTrack,
  } as ITrackDetailsContext);

  return (
    <TrackDetailsContext.Provider value={state}>{children}</TrackDetailsContext.Provider>
  );
};

export const useTrackDetailsContext = () => {
  return useContext(TrackDetailsContext);
};

export const INITIAL_STATE: ITrackDetailsContext = {
  loadTrack: () => {},
  isLoading: undefined,
  track: undefined,
};

const TrackDetailsContext = createContext<ITrackDetailsContext>(INITIAL_STATE);
