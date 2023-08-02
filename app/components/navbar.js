"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Navbar(props) {
    let { route } = props;
    const { isSignedIn, user, isLoaded } = useUser();

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                {route == "home" ? (
                    <Link
                        href="/"
                        className="btn btn-ghost normal-case text-xl underline"
                    >
                        Chirp
                    </Link>
                ) : (
                    <Link
                        href="/"
                        className="btn btn-ghost normal-case text-xl"
                    >
                        Chirp
                    </Link>
                )}
            </div>
            <div className="flex-none">
                {route == "timeline" ? (
                    <Link href="/timeline">
                        <button className="btn btn-ghost normal-case underline">
                            Timeline
                        </button>
                    </Link>
                ) : (
                    <Link href="/timeline">
                        <button className="btn btn-ghost normal-case">
                            Timeline
                        </button>
                    </Link>
                )}
            </div>
            {/* <div className="flex-none">
                {route == "sign-up" ? (
                    <SignUpButton mode="modal">
                        <button className="btn btn-ghost normal-case underline">
                            Sign-up
                        </button>
                    </SignUpButton>
                ) : (
                    <SignUpButton mode="modal">
                        <button className="btn btn-ghost normal-case">
                            Sign-up
                        </button>
                    </SignUpButton>
                )}
            </div>
            <div className="flex-none">
                {route == "sign-in" ? (
                    <SignInButton mode="modal">
                        <button className="btn btn-ghost normal-case underline">
                            Sign-in
                        </button>
                    </SignInButton>
                ) : (
                    <SignInButton mode="modal">
                        <button className="btn btn-ghost normal-case">
                            Sign-in
                        </button>
                    </SignInButton>
                )}
            </div> */}
            <div className="flex-none">
                {route == "create-account" ? (
                    <Link href="/createAccount">
                        <button className="btn btn-ghost normal-case underline">
                            Create Account
                        </button>
                    </Link>
                ) : (
                    <Link href="/createAccount">
                        <button className="btn btn-ghost normal-case">
                            Create Account
                        </button>
                    </Link>
                )}
            </div>
            <div className="flex-none">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}
