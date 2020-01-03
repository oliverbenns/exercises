package main

import "testing"

func TestSum(t *testing.T) {
	sum := Sum([]int{32, 16, 8})

	if sum != 56 {
		t.Error("Sum should be 56, but got ", sum)
	}
}

func TestSumEmpty(t *testing.T) {
	sum := Sum([]int{})

	if sum != 0 {
		t.Error("Sum should be 0, but got ", sum)
	}
}
