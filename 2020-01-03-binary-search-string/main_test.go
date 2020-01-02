package main

import "testing"

func TestBinarySearchFound(t *testing.T) {
	index := BinarySearch([]int{12, 13, 14, 15, 16, 17}, 16)

	if index != 4 {
		t.Error("Should return found index 4, but returned ", index)
	}
}

func TestBinarySearchNotFound(t *testing.T) {
	index := BinarySearch([]int{1, 2, 3}, 5)

	if index != -1 {
		t.Error("Should return -1 for not found, but returned ", index)
	}
}
