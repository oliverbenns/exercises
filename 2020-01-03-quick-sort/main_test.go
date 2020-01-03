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

func TestQuickSort(t *testing.T) {
	result := QuickSort([]int{32, 8, 16, 48})
	expected := []int{8, 16, 32, 48}

	if !equals(expected, result) {
		t.Error("Does not sort correctly. Expected: ", expected, "Got: ", result)
	}
}

func TestQuickSortSingle(t *testing.T) {
	result := QuickSort([]int{1})

	if !equals([]int{1}, result) {
		t.Error("Expected same slice back")
	}
}

func TestQuickSortEmpty(t *testing.T) {
	result := QuickSort([]int{})

	if !equals([]int{}, result) {
		t.Error("Expected empty slice")
	}
}
