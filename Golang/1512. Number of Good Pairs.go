package main

import "fmt"

func numIdenticalPairs(nums []int) int {
	count := 0
	freq := make(map[int]int)

	for _, num := range nums {
		// If the number has appeared before, it can form pairs with all previous occurrences
		count += freq[num]
		// Increment the frequency of the current number
		freq[num]++
	}

	return count
}

func main() {
	argument := []int{1, 2, 3, 1, 1, 3}
	fmt.Println(numIdenticalPairs(argument))
}
