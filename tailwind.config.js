/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', '"SF Mono"', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      fontSize: {
        display:  ['5rem',      { lineHeight: '1',         letterSpacing: '-0.03em',  fontWeight: '700' }],
        bignum:   ['2.5rem',    { lineHeight: '1.1',       letterSpacing: '-0.02em',  fontWeight: '700' }],
        title1:   ['1.75rem',   { lineHeight: '2.125rem',  letterSpacing: '0.004em',  fontWeight: '700' }],
        title2:   ['1.375rem',  { lineHeight: '1.75rem',   fontWeight: '600' }],
        headline: ['1.0625rem', { lineHeight: '1.375rem',  fontWeight: '600' }],
        body:     ['1.0625rem', { lineHeight: '1.5rem' }],
        callout:  ['1rem',      { lineHeight: '1.3125rem' }],
        subhead:  ['0.9375rem', { lineHeight: '1.25rem' }],
        footnote: ['0.8125rem', { lineHeight: '1.125rem' }]
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        tile: 'var(--tile)',
        label: 'var(--label)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'accent-text': 'var(--accent-text)',
        'on-accent': 'var(--on-accent)',
        fill: 'var(--fill)',
        sep: 'var(--sep)',
        ink: 'var(--ink)',
        hl: 'var(--hl)'
      }
    }
  }
};
