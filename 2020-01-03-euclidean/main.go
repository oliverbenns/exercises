package main

func Euclidean(a int, b int) int {
	var lower int
	var higher int

	if a == b {
		return a
	}

	if a > b {
		higher = a
		lower = b
	} else {
		higher = b
		lower = a
	}

	remainder := higher % lower

	if remainder == 0 {
		return lower
	}

	return Euclidean(lower, remainder)
}
