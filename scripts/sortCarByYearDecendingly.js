function sortCarByYearDescendingly(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe
	console.log(cars);

	// Clone array untuk menghindari side-effect
	// Apa itu side effect?

	// Tulis code-mu disini

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

	years.map((year) => {
		cars.map((car) => {
			if(year == car.year) {
				mobil.push(car)
			}
		})
	})

	// Rubah code ini dengan array hasil sorting secara descending
	return mobil;
}
