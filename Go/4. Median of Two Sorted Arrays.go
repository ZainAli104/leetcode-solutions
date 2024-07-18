package main

import (
    "fmt"
    "slices"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    m := len(nums1)
    n := len(nums2)
    
    mergedArr := append(nums1, nums2...)
    slices.Sort(mergedArr)
    
    var result float64
    i := m + n
    if i%2 == 0 {
        j := (i-1) / 2
        median := float64((mergedArr[j] + mergedArr[j+1]))
        result = float64(median / 2)
    } else {
        result = float64(mergedArr[i/2])
    }
    
    return result
}

func main() {
    nums1 := []int{1,2}
    nums2 := []int{3, 4} // 1, 2, 3, 4
    
    fmt.Println(findMedianSortedArrays(nums1, nums2))
}