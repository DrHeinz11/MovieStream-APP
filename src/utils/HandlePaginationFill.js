export const HandlePaginationFill = amount => {
	const pagination = new Array(amount);

	for (let index = 0; index < pagination.length; index++) {
		pagination[index] = index + 1;
	}
	return pagination;
};
