import React from "react";

const useIsLoggedIn = () => false;

const LoggedIn = () => {
    const isLoggedIn = useIsLoggedIn();
    return (
        <div>
            {isLoggedIn && (

                <div className="user-profile">
                    <div className="user-provile"></div>
                </div>

            )}
            <button>{isLoggedIn ? "Login" : "Logout"}</button>
        </div>
    );
};

export default LoggedIn;
