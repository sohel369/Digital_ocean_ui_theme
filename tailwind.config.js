/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#e11d48", // Rose 600
                    dark: "#be123c",    // Rose 700
                    light: "#f43f5e",   // Rose 500
                },
                secondary: "#64748b",
                accent: {
                    DEFAULT: "#e11d48", // Rose 600
                    light: "#f43f5e",
                    dark: "#be123c",
                },
                success: {
                    DEFAULT: "#10B981", // Emerald 500
                    light: "#34D399",   // Emerald 400
                },
                warning: {
                    DEFAULT: "#D97706", // Rich Amber
                    light: "#F59E0B",   // Bright Amber
                },
                error: {
                    DEFAULT: "#DC2626", // Deep Red
                    light: "#EF4444",   // Bright Red
                },
                background: {
                    DEFAULT: "#030712", // Near Black
                    surface: "#0F172A", // Slate 900
                    elevated: "#1E293B", // Slate 800
                },
                text: {
                    main: "#F8FAFC",   // Crisp White
                    secondary: "#CBD5E1", // Slate 300
                    muted: "#94A3B8",     // Slate 400
                },
                dark: "#0f172a", // Keep for backward compatibility if needed, but background.surface is preferred
                card: "rgba(30, 41, 59, 0.7)", // Transparent dark card
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
