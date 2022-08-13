import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Protected from "./Protected";
import { AuthenticationContextProvider } from "../../../context/Authentication";
import authService from "../../../service/auth";

const server = setupServer(
  rest.post("https://api.education-track.com/login", (req, res, ctx) => {
    return res(ctx.json({ id: "fake-user-id", name: "fake-user-name" }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const customRender = () => {
  return render(
    <AuthenticationContextProvider authService={authService}>
      <Protected />
    </AuthenticationContextProvider>
  )
}

describe("Protected", () => {
  it("should render Login button", () => {
    const loginBtnText = "Login";

    render(<Protected />);

    screen.getByText(loginBtnText);
  });

  test("should show loading status right after Login button clicked", async () => {
    const loginBtnText = "Login";
    const loadingText = "loading...";

    customRender();

    expect(screen.queryByText(loadingText)).toBeNull();

    fireEvent.click(screen.getByText(loginBtnText));

    expect(screen.getByText(loadingText)).toBeInTheDocument();
  });

  test("should render user info when Login button clicked", async () => {
    const loginBtnText = "Login";
    const userInfoText = "User info:";

    customRender();

    expect(screen.queryByText(userInfoText)).toBeNull();

    fireEvent.click(screen.getByText(loginBtnText));

    await waitFor(() => screen.getByText(userInfoText));

    expect(screen.getByText(userInfoText)).toBeInTheDocument();
  });
});
