"use client";

import Navbar from "../components/navbar";
import Post from "../components/post";
import { useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const supabaseClient = async (supabaseAccessToken) => {
    const supabase = createClientComponentClient(
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
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState();
    const [curUserId, setCurUserId] = useState();

    const router = useRouter();

    useEffect(() => {
        (async function () {
            const supabaseAccessToken = await getToken({
                template: "supabase",
            });
            const supabase = createClientComponentClient(supabaseAccessToken);

            const { data, error } = await supabase.from("messages").select();

            return data;
        })().then((data) => setAllMessages(data));
    });

    const fetchData = async () => {
        const supabaseAccessToken = await getToken({
            template: "supabase",
        });
        const supabase = createClientComponentClient(supabaseAccessToken);

        const { data, error } = await supabase
            .from("users")
            .select("username")
            .eq("clerkId", userId);

        if (data[0]) setUsername(data[0].username);
    };

    const getId = async () => {
        const supabaseAccessToken = await getToken({
            template: "supabase",
        });
        const supabase = createClientComponentClient(supabaseAccessToken);

        let { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("clerkId", userId);

        setCurUserId(data[0].id);

        return curUserId;
    };

    useEffect(() => {
        (async function () {
            await getId();
            await fetchData();
        })();
    }, [allMessages]);

    const post = async () => {
        const supabaseAccessToken = await getToken({
            template: "supabase",
        });
        const supabase = createClientComponentClient(supabaseAccessToken);

        const user_id = await getId();

        fetchData();

        const { data, error } = await supabase
            .from("messages")
            .insert([
                { content: message, user_id: user_id, username: username },
            ])
            .select();

        router.refresh();
    };

    return (
        <main
            data-theme="dark"
            className="w-screen h-screen flex flex-col items-center gap-12"
        >
            <Navbar route={"timeline"} />
            <p>Welcome {username}</p>
            <div className="w-full max-w-md">
                {allMessages &&
                    allMessages.map((element) => {
                        return (
                            <Post
                                content={element.content}
                                username={element.username}
                                current_user={element.user_id == curUserId}
                                key={element.id}
                            />
                        );
                    })}
                <div className="join sticky bottom-0 mt-12">
                    <input
                        className="input input-bordered join-item"
                        value={message}
                        placeholder="Type here ..."
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        className="btn btn-primary join-item normal case"
                        onClick={post}
                    >
                        Post
                    </button>
                </div>
            </div>
        </main>
    );
}
