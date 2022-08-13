import { render } from "@testing-library/react";
import { ContentContextProvider } from "./Content";

describe("Content", () => {
  it("should render", () => {
    render(
      <ContentContextProvider
        contentService={{
          getContent: (() => {}) as any,
        }}
      >
        asd
      </ContentContextProvider>
    );
  });
});
