/** @type {import('tailwindcss').Config} */
import { spacing } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class", '[data-theme="dark"]'],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
    	extend: {
    		colors: {
    			'blue-opaque': 'rgb(13 42 148 / 18%)',
    			gray: {
    				'0': '#fff',
    				'100': '#fafafa',
    				'200': '#eaeaea',
    				'300': '#999999',
    				'400': '#888888',
    				'500': '#666666',
    				'600': '#444444',
    				'700': '#333333',
    				'800': '#222222',
    				'900': '#111111'
    			},
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
    			}
    		},
    		typography: '(theme) => ({\n				DEFAULT: {\n					css: {\n						color: theme("colors.gray.700"),\n						a: {\n							color: theme("colors.blue.500"),\n							"&:hover": {\n								color: theme("colors.blue.700"),\n							},\n							code: { color: theme("colors.blue.400") },\n						},\n						"h2,h3,h4": {\n							"scroll-margin-top": spacing[32],\n						},\n						thead: {\n							borderBottomColor: theme("colors.gray.200"),\n						},\n						code: { color: theme("colors.pink.500") },\n						"blockquote p:first-of-type::before": false,\n						"blockquote p:last-of-type::after": false,\n					},\n				},\n				dark: {\n					css: {\n						color: theme("colors.gray.200"),\n						a: {\n							color: theme("colors.blue.400"),\n							"&:hover": {\n								color: theme("colors.blue.600"),\n							},\n							code: { color: theme("colors.blue.400") },\n						},\n						blockquote: {\n							borderLeftColor: theme("colors.gray.700"),\n							color: theme("colors.gray.300"),\n						},\n						"h2,h3,h4": {\n							color: theme("colors.gray.100"),\n							"scroll-margin-top": spacing[32],\n						},\n						hr: { borderColor: theme("colors.gray.700") },\n						ol: {\n							li: {\n								"&:before": { color: theme("colors.gray.500") },\n							},\n						},\n						ul: {\n							li: {\n								"&:before": {\n									backgroundColor: theme("colors.gray.500"),\n								},\n							},\n						},\n						strong: { color: theme("colors.gray.100") },\n						thead: {\n							th: {\n								color: theme("colors.gray.100"),\n							},\n							borderBottomColor: theme("colors.gray.600"),\n						},\n						tbody: {\n							tr: {\n								borderBottomColor: theme("colors.gray.700"),\n							},\n						},\n					},\n				},\n			})',
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	variants: {
		typography: ["dark"],
	},
	plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
