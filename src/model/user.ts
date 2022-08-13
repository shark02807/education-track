export interface User {
  id: string;
  name: string;
}

export function createUser(user: any): User {
  const { id, name } = user;

  return { id, name };
}
