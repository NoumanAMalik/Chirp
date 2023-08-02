"use client";

import Navbar from "../components/navbar";
import supabase from "../../utils/supabase.js";

export default function Timeline() {
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
