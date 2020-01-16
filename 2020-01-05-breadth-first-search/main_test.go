package main

import (
	"testing"
	"time"
)

func TestQueueAdd(t *testing.T) {
	queue := Queue{}
	queue.Add("Pikachu")

	if queue.data[0] != "Pikachu" {
		t.Error("Element not added")
	}
}

func TestQueueShift(t *testing.T) {
	queue := Queue{
		data: []string{"Bulbasaur", "Charmander", "Squirtle"},
	}
	value := queue.Shift()

	if len(queue.data) != 2 {
		t.Error("Element not removed")
	}

	if value != "Bulbasaur" {
		t.Error("Incorrect element returned ")
	}
}

func TestFindClosestProfessionInNetworkInNetwork(t *testing.T) {
	graph := Graph{
		"Me": User{
			name:       "Me",
			friends:    []string{"Tyler", "Kerry", "Vanessa"},
			profession: "Software Engineer",
		},
		"Tyler": User{
			name:       "Tyler",
			friends:    []string{"Dylan"},
			profession: "Nurse",
		},
		"Dylan": User{
			name:       "Dylan",
			friends:    []string{},
			profession: "Carpenter",
		},
		"Kerry": User{
			name:       "Kerry",
			friends:    []string{"Serena", "Jacob"},
			profession: "Police Officer",
		},
		"Jacob": User{
			name:       "Jacob",
			friends:    []string{"Bethany"},
			profession: "Admin",
		},
		"Serena": User{
			name:       "Serena",
			friends:    []string{},
			profession: "Marketer",
		},
		"Bethany": User{
			name:       "Bethany",
			friends:    []string{},
			profession: "Marketer",
		},
		"Vanessa": User{
			name:       "Vanessa",
			friends:    []string{},
			profession: "Teacher",
		},
	}

	user := FindClosestProfessionInNetwork(graph, "Marketer")

	if user.name != "Serena" {
		t.Error("User name should be Serena, got ", user.name)
	}
}

func TestFindClosestProfessionInNetworkNotFound(t *testing.T) {
	graph := Graph{}
	user := FindClosestProfessionInNetwork(graph, "Marketer")

	if user != nil {
		t.Error("User should not be found. But found user ", user)
	}
}

func TestFindClosestProfessionInNetworkNoInfinite(t *testing.T) {
	graph := Graph{
		"Me": User{
			name:       "Me",
			friends:    []string{"Alice"},
			profession: "Software Engineer",
		},
		"Alice": User{
			name:       "Alice",
			friends:    []string{"Me"},
			profession: "Software Engineer",
		},
	}

	channel := make(chan bool)

	go func() {
		FindClosestProfessionInNetwork(graph, "Marketer")
		channel <- true
	}()

	select {
	case <-channel:
	case <-time.After(3 * time.Second):
		t.Error("Function takes a long time - perhaps an infinite loop.")
	}

}
