export const System = {
  Black: { hex: '#000000', rgb: 'rgba(0, 0, 0, 1.00)' },
  White: { hex: '#ffffff', rgb: 'rgba(255, 255, 255, 1.00)' },
  Gray: { hex: '#696969', rgb: 'rgba(105, 105, 105, 1.00)' },
} as const

export const Red = {
  '50': { hex: '#ffe9ec', rgb: 'rgba(255, 233, 236, 1.00)' },
  '100': { hex: '#ffc1cb', rgb: 'rgba(255, 193, 203, 1.00)' },
  '200': { hex: '#ff98aa', rgb: 'rgba(255, 152, 170, 1.00)' },
  '300': { hex: '#ff7088', rgb: 'rgba(255, 112, 136, 1.00)' },
  '400': { hex: '#ff4867', rgb: 'rgba(255, 72, 103, 1.00)' },
  '500': { hex: '#ff2046', rgb: 'rgba(255, 32, 70, 1.00)' },
  '600': { hex: '#dc0a2d', rgb: 'rgba(220, 10, 45, 1.00)' },
  '700': { hex: '#b3001e', rgb: 'rgba(179, 0, 30, 1.00)' },
  '800': { hex: '#8a0017', rgb: 'rgba(138, 0, 23, 1.00)' },
  '900': { hex: '#620010', rgb: 'rgba(98, 0, 16, 1.00)' },
} as const

export const Types = {
  none: { hex: '#ffffff', rgb: 'rgba(255, 255, 255, 1.00)' },
  water: { hex: '#4592c4', rgb: 'rgba(69, 146, 196, 1.00)' },
  flying: { hex: '#89aae3', rgb: 'rgba(137, 170, 227, 1.00)' },
  ice: { hex: '#74cec0', rgb: 'rgba(116, 206, 192, 1.00)' },
  dragon: { hex: '#006fc9', rgb: 'rgba(0, 111, 201, 1.00)' },
  dark: { hex: '#5a5366', rgb: 'rgba(90, 83, 102, 1.00)' },
  bug: { hex: '#729f3f', rgb: 'rgba(114, 159, 63, 1.00)' },
  ghost: { hex: '#7b62a3', rgb: 'rgba(123, 98, 163, 1.00)' },
  grass: { hex: '#9bcc50', rgb: 'rgba(155, 204, 80, 1.00)' },
  steel: { hex: '#5a8ea1', rgb: 'rgba(90, 142, 161, 1.00)' },
  rock: { hex: '#a38c21', rgb: 'rgba(163, 140, 33, 1.00)' },
  normal: { hex: '#a4acaf', rgb: 'rgba(164, 172, 175, 1.00)' },
  poison: { hex: '#b97fc9', rgb: 'rgba(185, 127, 201, 1.00)' },
  fighting: { hex: '#ce4069', rgb: 'rgba(206, 64, 105, 1.00)' },
  electric: { hex: '#eed535', rgb: 'rgba(238, 213, 53, 1.00)' },
  psychic: { hex: '#f366b9', rgb: 'rgba(243, 102, 185, 1.00)' },
  ground: { hex: '#d97746', rgb: 'rgba(217, 119, 70, 1.00)' },
  fire: { hex: '#fd7d24', rgb: 'rgba(253, 125, 36, 1.00)' },
  fairy: { hex: '#fdb9e9', rgb: 'rgba(253, 185, 233, 1.00)' },
} as const

export const colors = {
  System,
  Types,
  Red,
}
