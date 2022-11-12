import { extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		100: '#e71c61',
	},
	base: {
		bg: '#082a3a',
		sub: '#670023',
		text: '#c6e5ff',
		gray: '#8090A5',
	},
};
const fonts = {
	heading: `'Roboto' ,sans-serif`,
	body: `'Montserrat' ,sans-serif`,
};

const components = {
	Heading: {
		baseStyle: {
			fontWeight: 500,
		},
	},
};

export const theme = extendTheme({ colors, fonts, components });
