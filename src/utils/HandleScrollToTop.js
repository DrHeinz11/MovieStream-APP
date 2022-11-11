export const HandleScrollToTop = ({ direction, coordinate, behavior }) => {
	window.scrollTo({ [direction]: coordinate, behavior: behavior });
};
