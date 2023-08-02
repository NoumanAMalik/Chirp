export default function Home() {
    return (
        <main data-theme="dark" className="w-screen h-screen">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Chirp</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost normal-case">
                        Timeline
                    </button>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost normal-case">
                        Sign-up
                    </button>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost normal-case">
                        Log-in
                    </button>
                </div>
            </div>
        </main>
    );
}
