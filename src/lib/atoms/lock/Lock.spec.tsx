import { render, screen } from "@testing-library/react";
import Lock from "./Lock";
import { LockStatus } from "./Lock.types";

describe("Lock", () => {
  it("should render closed Lock", () => {
    render(<Lock status={LockStatus.Closed} />);

    const lock = screen.getByRole("lock");

    expect(lock).toHaveClass("bg-gray-50");
  });

  it("should render open Lock", () => {
    render(<Lock status={LockStatus.Open} />);

    const lock = screen.getByRole("lock");

    expect(lock).toHaveClass("bg-purple-50");
  });
});
