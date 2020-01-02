package main

func removeByIndex(s []int, i int) []int {
	s[i] = s[len(s)-1]
	return s[:len(s)-1]
}

func findSmallestIndex(slice []int) int {
	smallest_index := 0
	smallest_val := slice[0]

	for index, val := range slice {
		if val < smallest_val {
			smallest_index = index
			smallest_val = val
		}
	}

	return smallest_index
}

func SelectionSort(slice []int) []int {
	var sorted_slice []int

	for _, _ = range slice {
		smallest_index := findSmallestIndex(slice)
		sorted_slice = append(sorted_slice, slice[smallest_index])
		slice = removeByIndex(slice, smallest_index)
	}

	return sorted_slice
}
