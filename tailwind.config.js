/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      special: '391px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
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
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: 'url(../../../public/hero/hero-bg.png)',
        hero_shape: 'url(../../../public/hero/shape-1.svg)',
        hero_shape2_light: 'url(../../../public/hero/shape-2-light.svg)',
        hero_shape2_dark: 'url(../../../public/hero/shape-2-dark.svg)',
        about_shape_light: 'url(../../../public/about/shape-light.svg)',
        about_shape_dark: 'url(../../../public/about/shape-dark.svg)',
        dots_light: 'url(../../../public/dots-light.svg)',
        dots_dark: 'url(../../../public/dots-dark.svg)',
        work_project_bg_light: 'url(../../../public/work/project-bg-light.png)',
        work_project_bg_dark: 'url(../../../public/work/project-bg-dark.png)',
        contact_illustration_light: 'url(../../../public/contact/illustration-light.svg)',
        contact_illustration_dark: 'url(../../../public/contact/illustration-dark.svg)',
      },
      fontFamily: {
        eUkraine: ['var(--font-eUkraine)'],
        eUkraineHead: ['var(--font-eUkraineHead)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
