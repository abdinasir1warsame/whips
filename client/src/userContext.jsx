import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const userContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        axios.get('/profile')
            .then(({ data }) => {
                setUser(data);
                setReady(true);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
                
            });
    }, []);

    return (
        <userContext.Provider value={{ user, setUser, ready }}>
            {children}
        </userContext.Provider>
    );
}

export default UserContextProvider;
