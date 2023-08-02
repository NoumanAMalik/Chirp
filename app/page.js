import Navbar from "./components/navbar";
import { SignUpButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <main
            data-theme="dark"
            className="w-screen h-screen flex flex-col items-center gap-12"
        >
            <Navbar route={"home"} />
            <h2>This project is a Twitter clone</h2>
            <h2>Made by Nouman and Danny</h2>

            <div className="flex-none">
                <SignUpButton mode="modal">
                    <button className="btn btn-primary normal-case">
                        Sign-up
                    </button>
                </SignUpButton>
            </div>
            <div className="flex-none">
                <SignInButton mode="modal">
                    <button className="btn btn-primary normal-case">
                        Sign-in
                    </button>
                </SignInButton>
            </div>
        </main>
    );
}
