package romannumerals

import (
	"fmt"
	"sort"
)

func ToRomanNumeral(input int) (string, error) {
	if input <= 0 || input >= 4000 {
		return "", fmt.Errorf("%d is out of range", input)
	}
	romanNumerals := map[int]string{1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"}
	keys := make([]int, 0)
	for k, _ := range romanNumerals {
		keys = append(keys, k)
	}
	sort.Sort(sort.Reverse(sort.IntSlice(keys)))

	number := input
	romanNumber := ""
	for _, k := range keys {
		for number >= k {
			romanNumber += romanNumerals[k]
			number -= k
		}
	}

	return romanNumber, nil
}
