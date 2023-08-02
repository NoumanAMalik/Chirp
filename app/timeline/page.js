"use client";

import Navbar from "../components/navbar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Timeline() {
    const supabase = createClientComponentClient();

    const checkAuth = async () => {
        const user = await supabase.auth.getUser();

        console.log(user.data.user.aud);
    };

    checkAuth();

    return (
        <main data-theme="dark" className="w-screen h-screen">
            <Navbar route={"timeline"} />
        </main>
    );
}
