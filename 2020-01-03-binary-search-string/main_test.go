package main

import "testing"

func TestBinarySearchStringFound(t *testing.T) {
	index := BinarySearchString([]string{"Diglett", "Ditto", "Dodrio", "Doduo", "Dragonair", "Dragonite"}, "Dragonair")

	if index != 4 {
		t.Error("Should return found index 4, but returned ", index)
	}
}

func TestBinarySearchStringNotFound(t *testing.T) {
	index := BinarySearchString([]string{"Squirtle", "Starmie", "Staryu"}, "Pikachu")

	if index != -1 {
		t.Error("Should return -1 for not found, but returned ", index)
	}
}
