import { ContentContextProvider } from "./context/content/Content";
import { TrackDetailsContextProvider } from "./context/track-details/TrackDetails";
import Content from "./pages/content/Content";
import TrackDetails from "./pages/track-details/TrackDetails";
import MainTemplate from "./templates/MainTemplate";
import contentService from "../service/content";
import trackDetailsService from "../service/track-details";
import { Route, Routes } from "react-router-dom";
import Protected from "./pages/protected/Protected";

function PlayApp() {
  return (
    <Providers>
      <MainTemplate>
        <Routes>
          <Route path="*" element={<Content />} />
          <Route path="/track/:trackSlug" element={<TrackDetails />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </MainTemplate>
    </Providers>
  );
}

interface IProviders {
  children: React.ReactNode;
}

function Providers({ children }: IProviders) {
  return (
    <TrackDetailsContextProvider trackDetailsService={trackDetailsService}>
      <ContentContextProvider contentService={contentService}>
        {children}
      </ContentContextProvider>
    </TrackDetailsContextProvider>
  );
}

export default PlayApp;
