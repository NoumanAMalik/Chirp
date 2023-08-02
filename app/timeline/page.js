"use client";

import Navbar from "../components/navbar";
import { useAuth } from "@clerk/clerk-react";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabaseClient = async (supabaseAccessToken) => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_KEY,
        {
            global: {
                headers: { Authorization: `Bearer ${supabaseAccessToken}` },
            },
        }
    );
    // set Supabase JWT on the client object,
    // so it is sent up with all Supabase requests
    return supabase;
};

export default function Timeline() {
    const [username, setUsername] = useState("");
    const { getToken, userId } = useAuth();

    const fetchData = async () => {
        // TODO #1: Replace with your JWT template name
        const supabaseAccessToken = await getToken({ template: "supabase" });

        const supabase = await supabaseClient(supabaseAccessToken);

        // TODO #2: Replace with your database table name

        const { data, error } = await supabase
            .from("users")
            .select("username")
            .eq("clerkId", userId);

        setUsername(data[0].username);

        // TODO #3: Handle the response
    };

    fetchData();

    return (
        <main data-theme="dark" className="w-screen h-screen">
            <Navbar route={"timeline"} />
            <p>Hello {username}</p>
        </main>
    );
}
