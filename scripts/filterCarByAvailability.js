function filterCarByAvailability(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe

	// Tempat penampungan hasil
	const result = [];

	// Tulis code-mu disini

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

	// Rubah code ini dengan array hasil filter berdasarkan availablity

	return result
}
