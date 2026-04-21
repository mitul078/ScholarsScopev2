import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    // student = the full object returned by /api/register on success
    const [student, setStudent] = useState(null);

    const login = (data) => setStudent(data);
    const logout = () => setStudent(null);

    return (
        <AuthContext.Provider value={{ student, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// convenience hook — use anywhere with:  const { student, login, logout } = useAuth();
export function useAuth() {
    return useContext(AuthContext);
}
