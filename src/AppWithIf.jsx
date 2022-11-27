// AppWithIf.jsx

function App() {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return <div className="App">Hello, logged in user!</div>;
    } else {
        return <div>User not logged in!</div>;
    }
}

export default App;