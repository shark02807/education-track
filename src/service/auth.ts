import { createUser, User } from "../model/user";

export interface IAuthService {
  /**
   * Requests the server to authenticate the user.
   * @returns The authenticated user.
   */
  login(email: string, password: string): Promise<User>;
}

const login = async (email: string, password: string): Promise<User> => {
  const response = await fetch("https://api.education-track.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  
  const user = createUser(await response.json());

  return user;
};

export default {
  login,
} as IAuthService;
