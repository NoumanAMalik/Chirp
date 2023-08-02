"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAuth } from "@clerk/clerk-react";

export default function Post(props) {
    const { getToken, userId } = useAuth();
    const { content, username, current_user, id, setReloadMessages } = props;
    // console.log(content, username, current_user);

    const deleteMessage = async () => {
        const supabaseAccessToken = await getToken({
            template: "supabase",
        });
        const supabase = createClientComponentClient(supabaseAccessToken);

        const { error } = await supabase.from("messages").delete().eq("id", id);

        setReloadMessages((prev) => (prev += 1));
    };

    return (
        <>
            {current_user ? (
                <div className="chat chat-end">
                    <div className="chat-header">{username}</div>
                    <div className="chat-bubble">
                        {content}
                        <button
                            className="btn btn-circle btn-xs ml-4"
                            onClick={deleteMessage}
                        >
                            x
                        </button>
                    </div>
                </div>
            ) : (
                <div className="chat chat-start">
                    <div className="chat-header">{username}</div>
                    <div className="chat-bubble">{content}</div>
                </div>
            )}
        </>
    );
}
