package main

func QuickSort(values []int) []int {
	if len(values) < 2 {
		return values
	}
	var lower []int
	var higher []int
	pivot := values[0]

	for _, value := range values[1:] {
		if value >= pivot {
			higher = append(higher, value)
		} else {
			lower = append(lower, value)
		}
	}

	low := append(QuickSort(lower), pivot)

	return append(low, QuickSort(higher)...)
}
