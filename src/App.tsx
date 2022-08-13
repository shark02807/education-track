import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticationContextProvider } from "./context/Authentication";
import PlayApp from "./play/PlayApp";
import authService from "./service/auth";

function App() {
  return (
    <Providers>
      <Routes>
        <Route path="*" element={<PlayApp />} />
      </Routes>
    </Providers>
  );
}

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => (
  <AuthenticationContextProvider authService={authService}>
    {children}
  </AuthenticationContextProvider>
);

export default App;
