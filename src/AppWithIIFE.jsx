// AppWithIIFE.jsx

function App() {
    const isLoggedIn = true;
    return (
        <div>
            <h1>Amazing application</h1>
            {(function () {
                if (isLoggedIn) {
                    return <div className="App">Hello, logged in user!</div>;
                } else {
                    return <div>User not logged in!</div>;
                }
            })()}
        </div>
    );
}

export default App;