import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chirp",
    description: "Twitter Clone by Nouman and Danny",
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html data-theme="dark">
                <body className={inter.className}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
