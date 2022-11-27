// AppWithHOC.jsx

import { useEffect, useState } from "react";

async function getUserAuth() {
    // get Auth state from somewhere
    return true
}

function withAuth(Component) {
    return function ComponentWithAuth() {
        const [isLoggedIn, setLoggedIn] = useState(true);
        useEffect(() => {
            getUserAuth().then((auth) => setLoggedIn(auth));
        }, []);
        return isLoggedIn ? <Component /> : <div>Please log in to view this component.</div>;
    };
}

function Dashboard({ isLoggedIn }) {
    return (
        <div>
            <h1>Amazing application</h1>
            <p>Best dashboard</p>
        </div>
    );
}

const DashboardWithAuth = withAuth(Dashboard);

function App() {
    return <DashboardWithAuth />;
}

export default App;