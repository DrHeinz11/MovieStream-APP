import { extendTheme } from '@chakra-ui/react';

const colors = {
	brand: { main: '#00e6f6', bg: '#082a3a', sub: '#1f6cab', text: '#c6e5ff' },
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
