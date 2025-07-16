import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Pretendard, sans-serif',
            h1: {
              fontSize: '2.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '600',
              lineHeight: '1.3',
              marginTop: '1.75rem',
              marginBottom: '0.875rem',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '1.4',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '1rem',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: 'hsl(var(--accent))',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              backgroundColor: 'hsl(var(--muted))',
              padding: '1rem',
              borderRadius: '0.5rem',
            },
            code: {
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config