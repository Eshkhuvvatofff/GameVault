import { createContext, useContext, useState, useEffect } from "react";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    GithubAuthProvider,
    signInWithPopup, 
    onAuthStateChanged, 
    signOut,
    linkWithCredential,
    User,
    OAuthCredential,
    updateProfile
} from "firebase/auth";
import { app } from "../../firebase/firebase";

// AuthContextType interfeysini yangilash
interface AuthContextType {
    user: User | null;
    googleSignIn: () => Promise<void>;
    githubSignIn: () => Promise<void>;
    logout: () => Promise<void>;
    signUp: (username: string, email: string, password: string) => Promise<void>; // signUp qo'shildi
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth(app);

    // Foydalanuvchi holatini kuzatish
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [auth]);

    // Google bilan kirish funksiyasi
    const googleSignIn = async (): Promise<void> => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Google bilan kirildi:", result.user);
        } catch (error) {
            console.error("Google Sign-In xatosi:", error);
            throw error;
        }
    };

    // GitHub bilan kirish funksiyasi
    const githubSignIn = async (): Promise<void> => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("GitHub bilan kirildi:", result.user);
        } catch (error) {
            if (error instanceof Error && 'code' in error && error.code === 'auth/account-exists-with-different-credential') {
                const credential = GithubAuthProvider.credentialFromError(error as any) as OAuthCredential;
                const email = (error as any).customData?.email;

                if (email && auth.currentUser) {
                    try {
                        // Mavjud hisob bilan GitHub hisobini bog'lash
                        await linkWithCredential(auth.currentUser, credential);
                        console.log("Hisoblar muvaffaqiyatli birlashtirildi");
                    } catch (linkError) {
                        console.error("Hisoblarni birlashtirishda xatolik:", linkError);
                        throw linkError;
                    }
                }
            }
            console.error("GitHub bilan kirishda xatolik:", error);
            throw error;
        }
    };

    // Chiqish funksiyasi
    const logout = async (): Promise<void> => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Chiqishda xatolik:", error);
            throw error;
        }
    };

    // signUp funksiyasini qo‘shish
    const signUp = async (username: string, email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Foydalanuvchi yaratildi:", userCredential.user);
            await updateProfile(userCredential.user, { displayName: username });
        } catch (error) {
            console.error("Ro‘yxatdan o‘tishda xatolik:", error);
            throw error;
        }
    };

    // Context qiymati
    const value: AuthContextType = {
        user,
        googleSignIn,
        githubSignIn,
        logout,
        signUp,  // signUp ni qo‘shish
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// useAuth xooksini yaratish
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};