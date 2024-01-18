export default {

	formatDate(inputDate) {
		if (inputDate === null) {
			return "Date not available";
		}

		const dateObject = new Date(inputDate);
		const year = dateObject.getFullYear();
		const month = String(dateObject.getMonth() + 1).padStart(2, '0');
		const day = String(dateObject.getDate()).padStart(2, '0');

		return `${year}-${month}-${day}`;
	},
}