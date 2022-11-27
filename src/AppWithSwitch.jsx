// AppWithSwitch.jsx

function Viewer() {
    return <div className="App">Hello, logged in as Viewer!</div>;
}

function SignedOut() {
    return <div>User not logged in!</div>;
}

function Admin() {
    return <div className="App">Hello, logged in as Admin!</div>;
}

function Editor() {
    return <div className="App">Hello, logged in as Editor!</div>;
}

function App() {
    const userPermission = "admin";
    switch (userPermission) {
        case "viewer":
            return <Viewer />;
        case "editor":
            return <Editor />;
        case "admin":
            return <Admin />;
        default:
            return <SignedOut />;
    }
}

export default App;