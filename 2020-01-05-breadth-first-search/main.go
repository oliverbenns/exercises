package main

// Basic breadth first search using a hash as a graph

type Queue struct {
	data []string
}

func (queue *Queue) Add(value string) {
	queue.data = append(queue.data, value)
}

func (queue *Queue) Shift() string {
	value := queue.data[0]
	queue.data = queue.data[1:]

	return value
}

func (queue *Queue) Len() int {
	return len(queue.data)
}

type User struct {
	name       string
	friends    []string
	profession string
}

type Graph = map[string]User

func FindClosestProfessionInNetwork(graph Graph, profession string) *User {
	queue := Queue{}
	queue.Add("Me")

	for queue.Len() > 0 {
		name := queue.Shift()
		user := graph[name]

		if user.profession == profession {
			return &user
		}

		for _, friend := range user.friends {
			queue.Add(friend)
		}
	}

	return nil
}
