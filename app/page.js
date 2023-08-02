import Navbar from "./components/navbar";

export default function Home() {
    return (
        <main data-theme="dark" className="w-screen h-screen">
            <Navbar route={"home"} />
        </main>
    );
}
