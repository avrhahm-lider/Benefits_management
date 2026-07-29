import {createClient} from '@supabase/supabase-js'
import dotenv from 'dotenv/config'


const client = createClient(
    process.env.SUPA_BASE_URL,
    process.env.SUPA_BASE_KEY
    )
export default client