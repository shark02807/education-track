import cn from "classnames";
import { ButtonType } from "./Button.types";

interface IButton {
  type?: ButtonType;
  children: React.ReactNode;
  className?: string;
  role?: string;
  /**
   * The callback to be called when the button is clicked.
   */
  onClick?: () => void;
}

const Button = ({ type = ButtonType.Default, children, className, role, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={cn("px-3 py-2 font-semibold rounded-lg h-10 whitespace-nowrap", className, {
        ["bg-white ring-1 ring-gray-200 text-black"]: type === ButtonType.Default,
        ["bg-indigo-900 text-white"]: type === ButtonType.Filled,
        ["bg-transparent text-indigo-900"]: type === ButtonType.Text
      })}
      role={role}
    >
      {children}
    </button>
  );
};

export default Button;
