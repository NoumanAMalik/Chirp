"use client";

import { createClient } from "@supabase/supabase-js";

export default createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    // {
    //     auth: {
    //         storage: localStorage,
    //         autoRefreshToken: true,
    //         persistSession: true,
    //         detectSessionInUrl: true,
    //     },
    // }
);