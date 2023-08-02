"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Post(props) {
    const { content, username, current_user } = props;
    // console.log(content, username, current_user);

    return (
        <>
            {current_user ? (
                <div className="chat chat-end">
                    <div className="chat-header">{username}</div>
                    <div className="chat-bubble">{content}</div>
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
