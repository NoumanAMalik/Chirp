"use client";

import Navbar from "../components/navbar";
import { useAuth } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function CreateAccount() {
    const { getToken } = useAuth();

    const fetchData = async () => {
        // TODO #1: Replace with your JWT template name
        const supabaseAccessToken = await getToken({ template: "supabase" });

        const supabase = await supabaseClient(supabaseAccessToken);

        // TODO #2: Replace with your database table name

        const { data, error } = await supabase.from("users").select();

        console.log(data);

        // TODO #3: Handle the response
    };
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    });

    const router = useRouter();

    const handleSubmit = async () => {
        // const data = await supabase.auth.signUp({
        //     email: formData.email,
        //     password: formData.password,
        //     options: {
        //         data: {
        //             username: formData.username,
        //         },
        //     },
        // });
        // console.log(data);
        // const access_token = data.session.access_token;
        // const refresh_token = data.session.refresh_token;
        // console.log(access_token, refresh_token);
        // if (data.user.aud == "authenticated") {
        // const { data, error } = supabase.auth.setSession({
        //     access_token,
        //     refresh_token,
        // });
        // router.push("/timeline");
        // }
    };

    return (
        <main
            data-theme="dark"
            className="w-screen h-screen flex flex-col items-center gap-12"
        >
            <Navbar route={"create-account"} />

            <h1 className="text-xl font-semibold">Create Account</h1>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter your email</span>
                </label>
                <input
                    type="text"
                    placeholder="abc@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className="input input-bordered w-full max-w-xs mb-6"
                />

                <label className="label">
                    <span className="label-text">Enter a password</span>
                </label>
                <input
                    type="password"
                    placeholder="Type here"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                    className="input input-bordered w-full max-w-xs mb-6"
                />

                <label className="label">
                    <span className="label-text">Enter a username</span>
                </label>
                <input
                    type="text"
                    placeholder="@"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                    className="input input-bordered w-full max-w-xs mb-6"
                />

                <button
                    className="btn btn-primary normal-case"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </main>
    );
}
