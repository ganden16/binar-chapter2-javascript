function filterCarByAvailability(cars) {
	const result = [];
	//success
	cars.map((car) => {if(car.available) result.push(car)})

	//success
	// cars.forEach(car => {
	// 	if(car.available) result.push(car)
	// });

	//success
	// for(let i = 0; i < cars.length; i++) {
	// 	if(cars[i].available) result.push(cars[i])
	// }

	console.log(result)
	return result
}
