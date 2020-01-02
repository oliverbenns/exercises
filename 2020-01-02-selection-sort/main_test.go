package main

import "testing"

func equals(a []int, b []int) bool {
	if len(a) != len(b) {
		return false
	}

	for index, value := range a {
		if value != b[index] {
			return false
		}
	}

	return true
}

func TestSelectionSort(t *testing.T) {
	slice := []int{7, 3, 5, 2}
	expected := []int{2, 3, 5, 7}
	result := SelectionSort(slice)

	if !equals(expected, result) {
		t.Error("Does not sort correctly. Expected: ", expected, "Got: ", result)
	}
}
