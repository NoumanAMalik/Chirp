"use client";

import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import supabase from "../../utils/supabase";

import { useRouter } from "next/navigation";

export default function Timeline() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    });

    const router = useRouter();

    const handleSubmit = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    username: formData.username,
                },
            },
        });

        const access_token = data.session.access_token;
        const refresh_token = data.session.refresh_token;

        console.log(access_token, refresh_token);

        if (data.user.aud == "authenticated") {
            const { data, error } = supabase.auth.setSession({
                access_token,
                refresh_token,
            });
            router.push("/timeline");
        }
    };

    return (
        <main
            data-theme="dark"
            className="w-screen h-screen flex flex-col items-center gap-12"
        >
            <Navbar route={"sign-up"} />

            <h1 className="text-xl font-semibold">Sign-up</h1>

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
