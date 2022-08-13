import { renderHook } from "@testing-library/react";
import React from "react";
import {
  useAuthenticationContext,
  IAuthenticationContext,
  AuthenticationContext,
  INITIAL_STATE,
} from "./Authentication";

jest.mock("../service/auth");

describe("Authentication", () => {
  describe("useAuthenticationContext", () => {
    it("should return the current user", () => {
      const user = { id: "user_id", name: "John Doe" };
      const { result } = renderHook(() => useAuthenticationContext(), {
        wrapper: createWrapper({ user }),
      });

      expect(result.current.user).toBe(user);
    });

    it("should log the user in when login is called", () => {
      // const login = jest.fn();
    });
  });
});

function createWrapper(value: Partial<IAuthenticationContext>) {
  const contextValue = {
    ...INITIAL_STATE,
    ...value,
  };
  return function Providers({ children }: { children?: React.ReactNode }) {
    return (
      <AuthenticationContext.Provider value={contextValue}>
        {children}
      </AuthenticationContext.Provider>
    );
  };
}
