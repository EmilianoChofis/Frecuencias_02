export const getMin = (myarr) => {
	let al = myarr.length;
	let minimum = myarr[al - 1];
	while (al--) {
		if (myarr[al] < minimum) {
			minimum = myarr[al];
		}
	}
	console.log('MINIMO',minimum);

    const intMin = parseInt(minimum);

	return intMin;
};
