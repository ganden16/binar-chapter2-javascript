function sortCarByYearDescendingly(cars) {
	//let years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]
	let years = []
	cars.map((car) => {
		if(!years.includes(car.year)) years.push(car.year)
	})

	for(let i = 0; i < years.length; i++) {
		for(let j = i + 1; j < years.length; j++) {
			if(years[i] < years[j]) {
				let tmp = years[i]
				years[i] = years[j]
				years[j] = tmp
			}
		}
	}

	let mobil = []

	//success
	years.map((year) => {
		cars.map((car) => {
			if(year == car.year) {
				mobil.push(car)
			}
		})
	})

	//success
	// years.forEach((year) => {
	// 	cars.forEach((car) => {
	// 		if(year == car.year) {
	// 			mobil.push(car)
	// 		}
	// 	})
	// })

	//success
	// for(let i = 0; i < years.length; i++) {
	// 	for(let j = 0; j < cars.length; j++) {
	// 		if(years[i] == cars[j].year) {
	// 			mobil.push(cars[j])
	// 		}
	// 	}
	// }

	console.log(mobil)
	return mobil;
}
