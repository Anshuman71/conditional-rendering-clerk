// AppWithTernary.jsx

function SignedIn() {
    return <div className="App">Hello, logged in user!</div>;
}

function SignedOut() {
    return <div>User not logged in!</div>;
}

function App() {
    const isLoggedIn = true;
    return isLoggedIn ? <SignedIn /> : <SignedOut />;
}

export default App;