import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Default seed accounts so testing works immediately
const INITIAL_USERS = [
  {
    id: 'user_demo_1',
    name: 'Demo Student',
    email: 'demo@futureforge.com',
    password: 'Password123!',
    avatar: '👨‍💻',
    createdAt: new Date().toISOString()
  }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize storage on first load
  useEffect(() => {
    // 1. Initialize registered users if not present
    const storedUsers = localStorage.getItem('futureforge_users');
    if (!storedUsers) {
      localStorage.setItem('futureforge_users', JSON.stringify(INITIAL_USERS));
    }

    // 2. Check for active session in localStorage or sessionStorage
    const activeSession = localStorage.getItem('futureforge_session') || sessionStorage.getItem('futureforge_session');
    if (activeSession) {
      try {
        setUser(JSON.parse(activeSession));
      } catch (err) {
        localStorage.removeItem('futureforge_session');
        sessionStorage.removeItem('futureforge_session');
      }
    }
    setLoading(false);
  }, []);

  // Helper to get registered users
  const getRegisteredUsers = () => {
    try {
      const data = localStorage.getItem('futureforge_users');
      return data ? JSON.parse(data) : INITIAL_USERS;
    } catch {
      return INITIAL_USERS;
    }
  };

  // Sign Up logic with storage persistence
  const signup = async ({ name, email, password }) => {
    const users = getRegisteredUsers();
    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existing = users.find(u => u.email.toLowerCase() === normalizedEmail);
    if (existing) {
      return { success: false, error: 'An account with this email already exists. Please log in.' };
    }

    // Create new user object
    const newUser = {
      id: 'user_' + Date.now(),
      name: name.trim(),
      email: normalizedEmail,
      password: password, // In production, this would be hashed
      avatar: '👤',
      createdAt: new Date().toISOString()
    };

    // Save to registered users list in localStorage
    const updatedUsers = [...users, newUser];
    localStorage.setItem('futureforge_users', JSON.stringify(updatedUsers));

    // Create session (safe user without password)
    const sessionUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      createdAt: newUser.createdAt
    };

    localStorage.setItem('futureforge_session', JSON.stringify(sessionUser));
    sessionStorage.setItem('futureforge_session', JSON.stringify(sessionUser));
    setUser(sessionUser);

    return { success: true, user: sessionUser };
  };

  // Login logic with credentials validation
  const login = async ({ email, password, rememberMe = true }) => {
    const users = getRegisteredUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const matchedUser = users.find(u => u.email.toLowerCase() === normalizedEmail);

    if (!matchedUser) {
      return { success: false, error: 'No account found with this email. Please sign up first.' };
    }

    if (matchedUser.password !== password) {
      return { success: false, error: 'Incorrect password. Please verify and try again.' };
    }

    const sessionUser = {
      id: matchedUser.id,
      name: matchedUser.name,
      email: matchedUser.email,
      avatar: matchedUser.avatar || '👤',
      createdAt: matchedUser.createdAt
    };

    if (rememberMe) {
      localStorage.setItem('futureforge_session', JSON.stringify(sessionUser));
    } else {
      sessionStorage.setItem('futureforge_session', JSON.stringify(sessionUser));
      localStorage.removeItem('futureforge_session');
    }

    setUser(sessionUser);
    return { success: true, user: sessionUser };
  };

  // Logout logic: clears active session but keeps registered users in localStorage!
  const logout = () => {
    setUser(null);
    localStorage.removeItem('futureforge_session');
    sessionStorage.removeItem('futureforge_session');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
