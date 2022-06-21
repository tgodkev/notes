const useAuth = () => {
    //user state
    const user = useState("user", () => null)
    // accessing supa base.
    const {supabase} = useSupabase()

    const router = useRouter();

    // changing u to user
    supabase.auth.onAuthStateChange((e, session) => {
        user.value = session?.user || null
    })

    // sign up function.
    const signup = async ({email, password, ...metadata}) => {
        // renaming user to u, and signing up with supabase.
        const {user: u, error} = await supabase.auth.signUp({
            email,
            password,
        }, {
            data: metadata,
            redirectTo: `${window.location.origin}/profile`
        })
        if (error) throw error
        return u
    };

    // login function.
    const signin = async ({email, password}) => {
        const {user: u, error} = await supabase.auth.signIn({
            email, password
        });
        if (error) {
            throw error
        }
        return u
    };

    const signout = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) throw error;
        router.push('/')
    };

    const isLoggedIn = () => {
        return !!user.value
    }
    return {
        user,
        signup,
        signin,
        signout,
        isLoggedIn
    }
}


export default useAuth;
