import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, db } from "../../firebase/firebase"; // Firebase sozlamalari
import { doc, setDoc, getDoc } from "firebase/firestore";

interface AuthContextType {
    user: any;
    signUp: (username: string, email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

// Context yaratish
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const userRef = doc(db, "users", currentUser.uid);
                const userDoc = await getDoc(userRef);

                if (userDoc.exists()) {
                    setUser({ uid: currentUser.uid, email: currentUser.email, username: userDoc.data().username });
                } else {
                    console.log("User document not found");
                }
            } else {
                setUser(null);
            }
        });
        return unsubscribe;
    }, [auth]);

    // Sign Up funksiyasi
    const signUp = async (email: string, password: string, username: string) => {
        const auth = getAuth(app);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const userRef = doc(db, "users", userCredential.user.uid); // Foydalanuvchi ID asosida hujjat yaratiladi
        await setDoc(userRef, { email, username });
    };

    // Sign In funksiyasi
    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    // Logout funksiyasi
    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
