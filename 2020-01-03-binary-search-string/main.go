package main

import "log"

func BinarySearch(slice []int, value int) int {
	low := 0
	high := len(slice) - 1
	log.Print(high)

	for low < high {
		mid := (low + high) / 2

		if slice[mid] == value {
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
