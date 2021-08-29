
module.exports.getDate = function () {
	const date = new Date();
	
	const options = {weekday:"long",month:"long",day:"numeric"};
	const day = date.toLocaleDateString("en-Us",options);
	return day;
};

module.exports.getDay = function () {
	const date = new Date();
	
	const options = {weekday:"long"};
	const day = date.toLocaleDateString("en-Us",options);
	return day;
};