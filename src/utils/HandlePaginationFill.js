export const HandlePaginationFill = () => {
	const pagination = new Array(10);

	for (let index = 0; index < pagination.length; index++) {
		pagination[index] = index + 1;
	}
	return pagination;
};
