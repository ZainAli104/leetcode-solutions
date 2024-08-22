package main

import "fmt"

func numIdenticalPairs(nums []int) int {
	count := 0
	numsLength := len(nums)

	for i := 0; i < numsLength; i++ {
		for j := 0; j < numsLength; j++ {
			if nums[i] == nums[j] && i < j {
				count++
			}
		}
	}

	return count
}

func main() {
	argument := []int{1, 2, 3, 1, 1, 3}
	fmt.Println(numIdenticalPairs(argument))
}
