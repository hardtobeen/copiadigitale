
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				xs: '1rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '2.5rem',
				xl: '3rem',
				'2xl': '4rem'
			},
			screens: {
				xs: '475px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Semantic tokens for consistent branding
				'navy-deep': 'hsl(var(--navy-deep))',
				'navy-light': 'hsl(var(--navy-light))',
				'digital-blue': 'hsl(var(--digital-blue))',
				'nav-color': 'hsl(var(--nav-color))',
				// Tech color palette coerente - Updated with client colors
				'tech-primary': '208 68% 43%',      // #236fb4
				'tech-secondary': '208 65% 53%',    // #3688d4  
				'tech-accent': '208 75% 58%',       // Lighter variation
				'tech-success': '150 100% 50%',     // Verde neon
				'tech-dark': '220 25% 8%',          // Blu scuro quasi nero
				'tech-darker': '220 30% 4%',        // Ancora più scuro
				'tech-light': '220 20% 95%',        // Grigio chiarissimo
				'tech-gray': '220 10% 50%',         // Grigio medio
			},
			fontFamily: {
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-tech': 'linear-gradient(135deg, hsl(220 100% 60%) 0%, hsl(260 100% 70%) 50%, hsl(180 100% 60%) 100%)',
				'gradient-tech-dark': 'linear-gradient(135deg, hsl(220 25% 8%) 0%, hsl(260 25% 8%) 100%)',
				'gradient-digital': 'var(--gradient-digital)',
				'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(220 100% 60% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(220 100% 60% / 0.6)'
					}
				},
				'tech-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(180 100% 60% / 0.4), 0 0 40px hsl(220 100% 60% / 0.2)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(180 100% 60% / 0.6), 0 0 80px hsl(220 100% 60% / 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'tech-glow': 'tech-glow 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
