package main

func Sum(values []int) int {
	if len(values) == 0 {
		return 0
	}

	return values[0] + Sum(values[1:])
}
