import Navbar from "./components/navbar";

export default function Home() {
    return (
        <main
            data-theme="dark"
            className="w-screen h-screen flex flex-col items-center gap-12"
        >
            <Navbar route={"home"} />
            <h2>This project is a Twitter clone</h2>
            <h2>Made by Nouman and Danny</h2>
        </main>
    );
}
