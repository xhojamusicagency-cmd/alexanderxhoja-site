/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial / concert-program palette — distinct from XMA's dark+gold
        ivory: '#F7F2EA',         // warm off-white paper
        'ivory-deep': '#EFE8DB',  // deeper paper, for sections
        charcoal: '#1A1714',      // deep brown-black text
        graphite: '#3A332C',      // muted body text
        bronze: '#8B5E34',        // primary accent — antique brushed bronze
        'bronze-light': '#B58559', // hover state
        rule: '#D5CBB8',          // hairline rules + subtle borders
      },
      fontFamily: {
        // Cormorant kept as primary serif (it's a Garamond — refined, concert-program-appropriate)
        serif: ['Cormorant Garamond', 'serif'],
        // Display weight for big editorial headings
        display: ['Cormorant Garamond', 'serif'],
        // Sans for small labels + UI elements
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // Wider editorial tracking presets
        'editorial': '0.04em',
        'label': '0.22em',
      },
    },
  },
  plugins: [],
}
