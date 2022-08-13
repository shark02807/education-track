import { useAuthenticationContext } from "../../../context/Authentication";
import Button from "../../../lib/atoms/button/Button";

// Abridged version of a protected page. This is only used to play around with the authentication context.
const Protected = () => {
  const { login, user, isLoading } = useAuthenticationContext();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!user?.id) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <Button onClick={() => login("admin@admin.com", "password")}>
          Login
        </Button>
      </div>
    );
  }

  return (
    <>
      <div>User info:</div>
      <div>{JSON.stringify(user)}</div>
    </>
  );
};

export default Protected;
