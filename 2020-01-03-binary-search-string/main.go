package main

func BinarySearch(slice []string, value string) int {
	low := 0
	high := len(slice) - 1

	for low < high {
		mid := (low + high) / 2

		if value == slice[mid] {
			return mid
		}

		if slice[mid] > value {
			high = mid
		} else {
			low = mid + 1
		}
	}

	return -1
}
