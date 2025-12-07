module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bg: "#071028",         // very dark blue
                surface: "#071226",    // near-black with blue tone
                muted: "#94a3b8",      // gray for secondary text
                accentFrom: "#5b21b6", // indigo-ish
                accentTo: "#8b5cf6"    // violet-ish
            }
        }
    },
    plugins: []
};
