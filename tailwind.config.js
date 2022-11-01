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
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        myJello: {
          '0%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.2)'},
          '100%': { transform: 'scale(.9)'},
        },
        jelloHorizontal: {
          '0%': { transform: 'scale3d(1, 1, 1) ', '-webkit-transform': 'scale3d(1, 1, 1) '},
          '30%': {transform: 'scale3d(1.25, 0.75, 1)', '-webkit-transform': 'scale3d(1.25, 0.75, 1)'},
          '40%': {transform: 'scale3d(0.75, 1.25, 1)', '-webkit-transform': 'scale3d(0.75, 1.25, 1)'},
          '50%': {transform: 'scale3d(1.15, 0.85, 1)', '-webkit-transform': 'scale3d(1.15, 0.85, 1)'},
          '65%': {transform: 'scale3d(0.95, 1.05, 1)', '-webkit-transform': 'scale3d(0.95, 1.05, 1)'},
          '75%': {transform: 'scale3d(1.05, 0.95, 1)', '-webkit-transform': 'scale3d(1.05, 0.95, 1)'},
          '100%': {transform: 'scale3d(1, 1, 1)', '-webkit-transform': 'scale3d(1, 1, 1)'},
        }
      },
      animation: {
        'myJello': 'myJello .4s ease-out',
        'jello-horizontal': 'jelloHorizontal 0.9s both',
        'waving-hand': 'wave 2s linear infinite',
      },

    },
  },
  mode:'jit',
  plugins: [
    require('autoprefixer')
  ],
}
