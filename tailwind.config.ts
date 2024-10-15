import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

            gradientColorStops: theme => ({
                'primary': '#4F46E5',
                'secondary': '#7C3AED',
                'tertiary': '#2563EB',
            }),
            height: {
                '104': '24rem',
                '112': '30rem',
                '118': '36rem',
            },
            flex: {
                '6': '0 0 60%'
            },
            backgroundImage: {
                'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                keyframes: {
                    popup: {
                        '0%': {transform: 'scale(1)'},
                        '50%': {transform: 'scale(1.2)'},
                        '100%': {transform: 'scale(1)'}
                    },
                    bounceOnce: {
                        '0%, 100%': {transform: 'translateY(0)'},
                        '50%': {transform: 'translateY(-25%)'}
                    }
                },
                animate: {
                    popup: 'popup 1s ease-in-out infinite',
                    bounceOnce: 'bounceOnce 1s ease-in-out'
                }
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;