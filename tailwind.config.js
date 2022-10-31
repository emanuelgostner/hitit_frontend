/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-slate-200',
    'bg-gray-200',
    'bg-zinc-200',
    'bg-neutral-200',
    'bg-stone-200',
    'bg-red-200',
    'bg-orange-200',
    'bg-amber-200',
    'bg-yellow-200',
    'bg-lime-200',
    'bg-green-200',
    'bg-emerald-200',
    'bg-teal-200',
    'bg-cyan-200',
    'bg-sky-200',
    'bg-blue-200',
    'bg-indigo-200',
    'bg-violet-200',
    'bg-fuchsia-200',
    'bg-pink-200',
    'bg-rose-200'
  ],
  content: [],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.2)'},
          '100%': { transform: 'scale(.9)'},
        }
      },
      animation: {
        'bounce': 'bounce .4s ease-out',
      },

    },
  },
  plugins: [],
}
