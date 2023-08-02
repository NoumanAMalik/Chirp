/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],

    daisyui: {
        hemes: ["light", "dark"],
        darkTheme: "dark",
        base: true,
        styled: true,
        utils: true,
        rtl: false,
        prefix: "",
        logs: true,
    },
};
