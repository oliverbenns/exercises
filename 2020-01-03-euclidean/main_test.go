package main

import "testing"

func TestEuclidean(t *testing.T) {
	gcd := Euclidean(1680, 640)

	if gcd != 80 {
		t.Error("GCD should be 80, but got ", gcd)
	}
}

func TestEuclideanSameValues(t *testing.T) {
	gcd := Euclidean(480, 480)

	if gcd != 480 {
		t.Error("GCD should be 480, but got ", gcd)
	}
}
