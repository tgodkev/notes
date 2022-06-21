
import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYWJ2Z3F0dmt2aWtndGl5a3JvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NTgyNDYzNywiZXhwIjoxOTcxNDAwNjM3fQ.Z-_p4g9gaW3pj3POdKvu8wD7Etoq05HnVWgeQXH0jT0"



const supabaseUrl = 'https://piabvgqtvkvikgtiykro.supabase.co'




const useSupabase = () => {
    const supabase = createClient(supabaseUrl, SUPABASE_KEY)
    return{
        supabase
    }
}



export default useSupabase
