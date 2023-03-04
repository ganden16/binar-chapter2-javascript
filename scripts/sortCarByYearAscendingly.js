function sortCarByYearAscendingly(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe

	// Clone array untuk menghindari side-effect
	// Apa itu side effect?

	// Tulis code-mu disini

	// let years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
	let years = []
	cars.map((car) => {
		if(!years.includes(car.year)) years.push(car.year)
	})

	for(let i = 0; i < years.length; i++) {
		for(let j = i + 1; j < years.length; j++) {
			if(years[i] > years[j]) {
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

	// Rubah code ini dengan array hasil sorting secara ascending
	return mobil;
}
