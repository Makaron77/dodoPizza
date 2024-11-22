import { useMemo } from 'react';

export function useGroupedCities(cities, columnCount = 3) {
	return useMemo(() => {
		if (!cities) return null;

		return Array.from({ length: columnCount }).map((_, columnIndex) => {
			const itemsPerColumn = Math.ceil(cities.length / columnCount);
			const start = columnIndex * itemsPerColumn;
			const end = start + itemsPerColumn;

			const groupedCities = cities.slice(start, end).reduce((acc, city) => {
				const firstLetter = city.name.charAt(0).toUpperCase();
				if (!acc[firstLetter]) acc[firstLetter] = [];
				acc[firstLetter].push(city);
				return acc;
			}, {});

			return groupedCities;
		});
	}, [cities, columnCount]);
}
