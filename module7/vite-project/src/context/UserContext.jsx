import React from "react";

//theme options with specific colour values


//named export for this context (to be used via useContext elsewhere)
export const UserContext = React.createContext("");

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const UserProvider = ({props}) => {
    const [users, setUsers] = React.useState("");

    return (
        <UserContext.Provider value={{users, setUsers}}>
            {props.children}
        </UserContext.Provider>
    );
}
