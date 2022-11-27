import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignOutButton,
  SignInButton,
  useUser,
} from "@clerk/clerk-react";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function App() {
  return (
    <ClerkProvider frontendApi={frontendApi}>
      <SignedIn>
        <p style={{ padding: 20 }}>Welcome to the amazing dashboard!</p>
      </SignedIn>
      <SignedOut>
        <p style={{ padding: 20 }}>
          You must be signed in to use the dashboard.
        </p>
      </SignedOut>
    </ClerkProvider>
  );
}

function NavBar() {
  const { user, isSignedIn } = useUser();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "peachpuff",
      }}
    >
      <h2>Amazing dashboard</h2>
      {isSignedIn ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginRight: 10 }}>Hello, {user.firstName}!</p>
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </nav>
  );
}

export default App;
