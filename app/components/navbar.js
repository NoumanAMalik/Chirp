"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar(props) {
    let { route } = props;

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
            <div className="flex-none">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}
