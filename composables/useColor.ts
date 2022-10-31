const TailwindColors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'fuchsia',
    'pink',
    'rose'
]
const getRandomInt = (max : number) => Math.floor(Math.random() * max);
const getRandomColorFromArray = (colors : Array<String>) => colors[getRandomInt(colors.length)]
export const getRandomTailwindColor = () => getRandomColorFromArray(TailwindColors)
